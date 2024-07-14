const express = require("express");
const cors = require("cors");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = 5000;

app.use(cors());

const getZohoAccessToken = async () => {
  const params = new URLSearchParams();
  params.append("client_id", process.env.CLIENT_ID);
  params.append("client_secret", process.env.CLIENT_SECRET);
  params.append("refresh_token", process.env.REFRESH_TOKEN);
  params.append("grant_type", "refresh_token");

  try {
    const response = await axios.post(
      "https://accounts.zoho.com.au/oauth/v2/token",
      params
    );
    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching access token:", error.response.data);
    throw new Error("Error fetching access token");
  }
};

app.get("/api/patients", async (req, res) => {
  try {
    const accessToken = await getZohoAccessToken();

    const url = "https://www.zohoapis.com.au/crm/v6/coql";

    const headers = {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      "Content-Type": "application/json",
    };

    const data = {
      select_query:
        "select id, WP_User_ID, Full_Name, Email, Website, Mobile from Leads where WP_User_ID is not null",
    };

    const response = await axios.post(url, data, {
      headers,
    });

    const patients = [];

    response.data.data.forEach((patient) => {
      patients.push({
        id: patient.id,
        name: patient.Full_Name,
        email: patient.Email,
        mobile: patient.Mobile,
        address: "",
        wp_id: patient.WP_User_ID,
      });
    });

    res.json(patients);
  } catch (error) {
    console.error("Error fetching events:", error.response.data);
    res.status(500).json({ error: "Error fetching events" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
