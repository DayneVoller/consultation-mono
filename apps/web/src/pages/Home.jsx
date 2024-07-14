import { Flex } from "@chakra-ui/react";
import LeftPanel from "../components/LeftPanel";
import CenterPanel from "../components/CenterPanel";
import RightPanel from "../components/RightPanel";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) navigate("/");
  }, [navigate, user]);
  return (
    <Flex h="100vh" w="100vw">
      <LeftPanel />
      <CenterPanel />
      <RightPanel />
    </Flex>
  );
};

export default Home;
