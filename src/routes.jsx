// import { BrowserRouter, Route, Routes } from "react-router";
import { createBrowserRouter } from "react-router";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import { useNavigate} from "react-router";
// import HomePage from "./features/components/HomePage"; 
import Feed from "./features/post/pages/Feed";

// const AppRoutes = () => {



//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<h1>Home Page</h1>} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };
// export default AppRoutes;


  

export const router = createBrowserRouter([
  {
    path:"/",
    Component:Feed
  },
  {
    path:"/login",
    Component:Login
  },
  {
    path:"/register",
    Component:Register
  }
])
