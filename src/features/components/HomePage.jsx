import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>Home Page</h1>
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/register")}>Register</button>
      </div>
    </>
  );
};


export default HomePage