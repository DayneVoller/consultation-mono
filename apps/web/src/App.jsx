import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/sign-up" element={ <Register /> } />
        <Route path="/home" element={ <Home /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
