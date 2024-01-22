import { Routes, Route} from "react-router-dom";
import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import Contacts from "pages/Contacts";
import Layout from "./Layout";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: "column",
        // alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >


      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="contacts" element={<Contacts/>} />
        </Route>
       
       
      </Routes>
    </div>
  );
};
