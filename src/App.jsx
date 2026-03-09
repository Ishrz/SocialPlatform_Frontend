
import { AuthProvider } from "./features/auth/auth.context"
// import AppRoutes from "./routes"
import { router } from "./routes"
import { RouterProvider } from "react-router"
const App = ( )=>{

  return (
    <>
      <AuthProvider>
      {/* <AppRoutes/> */}
      <RouterProvider router={router} />
      {/* </RouterProvider> */}

      </AuthProvider>
    </>
  )
}

export default App