import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import App from "./App";
import { Navigate } from "react-router";

const AppRoutes = () => {

  const useNavigate=Navigate()

  loginButton=`<button onClick={useNavigate(/login)}>Login</button>`

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={loginButton} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
