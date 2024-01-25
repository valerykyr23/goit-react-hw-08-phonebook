import { Routes, Route, Navigate} from "react-router-dom";
import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import Register from "pages/Register/Register";
import Contacts from "pages/Contacts/Contacts";
import Layout from "./Layout/Layout";


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
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(refreshUser()); // для обновления токена
  // }, [dispatch]);

  // const { isRefreshing } = useSelector(state => state.auth);

 
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
