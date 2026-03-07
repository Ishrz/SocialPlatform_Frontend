import { createContext } from "react";
import { registration, login, getMe } from "./services/auth.api";

const authContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (email, password) => {
    setLoading(true)
    try {
      const response = await login(email, password);
      setUser(response.data);
      
    } catch (err) {
      console.log(err.message);
    } finally {
        setLoading(false)
    }
  };
}
