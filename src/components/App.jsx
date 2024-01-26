import { Route, Navigate, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import { useDispatch} from "react-redux";
import { useEffect,  lazy} from "react";
import { refreshUser } from "some/auth/auth-operations";
// import { selectIsRefreshing } from "some/auth/auth-selectors";
// import { Loader } from "./Loader/Loader";
import { PrivateRoute } from "./privateRoute";
import { PublicteRoute } from "./publicRoute";


const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import("../pages/Login/Login"));
const Home = lazy(() => import('../pages/Home/Home'));
const Contacts = lazy(() => import("../pages/Contacts/Contacts"));



export const App = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser()); 
  }, [dispatch]);

  // const  isRefreshing = useSelector(selectIsRefreshing);
  // !isRefreshing ?


  return  (
    <>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>} />
            
          
          <Route
            path="/login"
            element={
             
              <PublicteRoute>
                <Login />
                </PublicteRoute>
                
             } />
            
          <Route
            path="/register"
            element={
              
              <PublicteRoute>
                <Register />
                </PublicteRoute>
               
              }
              />
            
          
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>

    </>
  ) 
    
  
};