
import { AuthProvider } from "./features/auth/auth.context"
import AppRoutes from "./routes"
const App = ( )=>{

  return (
    <>
      <AuthProvider>
      <AppRoutes/>
      </AuthProvider>
    </>
  )
}

export default App