import { useRef, useState } from "react"
import "./styles/createPost.scss" 
const CreatePost = () => {

    const [caption, setCaption] = useState("")
    const postImageInputfieldRef= useRef(null)


    const handleSubmiit = (e) =>{
        e.preventDefault()
        const file = postImageInputfieldRef.current.files[0]
    }
  return (
    <main>
        <div className="form-container">
            <h1>Create Post</h1>
            <form onSubmit={handleSubmiit}>
                <label  className="post-image-label" htmlFor='post-image'>
                    Select Image
                </label>
                <input ref={postImageInputfieldRef} hidden type='file' name='post-image' id='post-image'>
                </input>

                <input onChange={(e)=> setCaption(e.target.value)} value={caption} type='text' name='caption' id='caption' placeholder=' write caption...' />

                <button className='button primary-button'>Upload</button>
            </form>
        </div>
    </main>
  )
}

export default CreatePost
