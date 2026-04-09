
import { AuthProvider } from "./features/auth/auth.context"
import { postContextProvider } from "./features/post/post.context"
// import AppRoutes from "./routes"
import { router } from "./routes"
import { RouterProvider } from "react-router"
const App = ( )=>{

  return (
    <>
      <AuthProvider>
      <postContextProvider>
      {/* <AppRoutes/> */}
      <RouterProvider router={router} />
      {/* </RouterProvider> */}
      </postContextProvider>
      </AuthProvider>
    </>
  )
}

export default App