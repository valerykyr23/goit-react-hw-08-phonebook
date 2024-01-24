import { Routes, Route} from "react-router-dom";
import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import Register from "pages/Register/Register";
import Contacts from "pages/Contacts/Contacts";
import Layout from "./Layout/Layout";
import { AppBar, Container } from "@mui/material";

export const App = () => {
  return (
    <Container>
      
      
      <Routes>
        
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
          <Route path="/contacts" element={<Contacts />} />
          </Route>
        
      </Routes>
    </Container>
  );
};
