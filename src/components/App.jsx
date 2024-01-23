import { Routes, Route} from "react-router-dom";
import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import Register from "pages/Register/Register";
import Contacts from "pages/Contacts/Contacts";
import Layout from "./Layout/Layout";

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        // display: 'flex',
        // flexDirection: "column",
        // // alignItems: 'center',
        // fontSize: 40,
        // color: '#010101'
        maxWidth: '1170px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '15px',
  paddingRight: '15px',
  paddingBottom: '50px',
  textAlign: 'center'
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
