
import { AuthProvider } from "./features/auth/auth.context"
import { PostContextProvider } from "./features/post/Post.context"
// import AppRoutes from "./routes"
import { router } from "./routes"
import { RouterProvider } from "react-router"
const App = ( )=>{

  return (
    <>
      <AuthProvider>
      <PostContextProvider>
      {/* <AppRoutes/> */}
      <RouterProvider router={router} />
      {/* </RouterProvider> */}
      </PostContextProvider>
      </AuthProvider>
    </>
  )
}

export default App