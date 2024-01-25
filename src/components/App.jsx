import { Routes, Route, Navigate} from "react-router-dom";
import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import Register from "pages/Register/Register";
import Contacts from "pages/Contacts/Contacts";
import Layout from "./Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "some/auth/auth-operations";
import { selectIsRefreshing } from "some/auth/auth-selectors";
import { Loader } from "./Loader/Loader";


// export const App = () => {
//   return (
//     <Container>

//       <Routes>

//         <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="/login" element={<Login/>} />
//         <Route path="/register" element={<Register/>} />
//           <Route path="/contacts" element={<Contacts />} />
//           </Route>

//       </Routes>
//     </Container>
//   );
// };
// const Register = lazy(() => import(''));
// const Home = lazy(() => import(''));
// const Login = lazy(() => import(''));
// const Contacts = lazy(() => import(''));

export const App = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser()); 
  }, [dispatch]);

  const isRefresh = useSelector(selectIsRefreshing);

 
  return !isRefresh ? ( 
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
      </Routes>
      </>
  ) : (
    <Loader/>
  );
}
