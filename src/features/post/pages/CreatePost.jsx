import { useRef, useState } from "react"
import { usePost } from "../hooks/usePost"
import {useNavigate} from "react-router"
import "./styles/createPost.scss" 
const CreatePost = () => {

    const [caption, setCaption] = useState("")
    const postImageInputfieldRef= useRef(null)

    const {loading , handleCreatePost} = usePost()

    const navigate = useNavigate()

    const handleSubmiit = async (e) =>{
        e.preventDefault()
        const file = postImageInputfieldRef.current.files[0]


        const data=await handleCreatePost(file , caption)
        console.log(data)
        // console.log(file)
        // console.log(caption)
        // console.log(postImageInputfieldRef)

        setCaption("")
        navigate("/")
         
    }


    if(loading){
        <main>
            <h1>Loading.....</h1>
        </main>
    }


  return (
    <main>
        <div className="form-container">
            <h1>Create Post</h1>
            <form className="form" onSubmit={handleSubmiit}>
                <label  className="post-image-label" htmlFor='post-image'>
                    Select Image
                </label>
                <input ref={postImageInputfieldRef} hidden type='file' name='post-image' id='post-image'>
                </input>

                <input className="caption" onChange={(e)=> setCaption(e.target.value)} value={caption} type='text' name='caption' id='caption' placeholder=' write caption...' />

                <button className='button primary-button'>Upload</button>
            </form>
        </div>
    </main>
  )
}

export default CreatePost
