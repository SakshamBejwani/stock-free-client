import React from 'react'
import {useState, useEffect} from 'react'
import FileBase from 'react-file-base64';
import {useDispatch, useSelector} from 'react-redux'
import { createPost, updatePost  } from '../../actions/posts'

function Form(props) {
  const {selectedPost, setSelectedPost} = props
  

  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  })
  const post = useSelector((state) => (selectedPost ? state.posts.find((message) => message._id === selectedPost) : null));
  const dispatch = useDispatch()
 
  useEffect(()=>{
    if(post) {
      setPostData(post)
      document.getElementById("addPost").click();
    }
  }, [post])

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(selectedPost){
      dispatch(updatePost(selectedPost, postData))
    }
    else{
      dispatch(createPost(postData))
    }
    
    document.getElementById("closeBtn").click();
    clear()
  }
  const clear = () => {
    setSelectedPost(null)
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: ''
    } )
  } 
    return (
        <div class="my-5 text-black container">
             <div class="space-y-4">
        <h1 class="text-center text-2xl font-semibold">Enter details for Photo</h1>
        <div>
          <label for="text" class=" block mb-1 font-semibold">Creator</label>
          <input type="text" class="bg-indigo-50 text-black text-center px-4 py-2 outline-none rounded-md w-full" 
          value={postData.creator} 
          onChange={(e)=> setPostData({...postData, creator: e.target.value})}
          />
        </div>
        <div>
          <label for="text" class="block mb-1 font-semibold">Title</label>
          <input type="text" class="bg-indigo-50 text-black text-center px-4 py-2 outline-none rounded-md w-full"
          value={postData.title} 
          onChange={(e)=> setPostData({...postData, title: e.target.value})}
          />
        </div>
        <div>
          <label for="text" class="block mb-1 font-semibold">Message</label>
          <input type="text" class="bg-indigo-50 text-black text-center px-4 py-2 outline-none rounded-md w-full" 
          value={postData.message} 
          onChange={(e)=> setPostData({...postData, message: e.target.value})}
          />
        </div>
        <div>
          <label for="email" class="block mb-1 font-semibold">Tags</label>
          <input type="text" class="bg-indigo-50 text-black text-center px-4 py-2 outline-none rounded-md w-full" 
          value={postData.tags} 
          onChange={(e)=> setPostData({...postData, tags: e.target.value})}
          />
        </div>
      </div>
      <label class="block mt-4 flex">
        {/* <span class="sr-only">Choose profile photo</span>
        <input type="file" class="block w-full text-sm text-slate-500
          file:mr-4 file:py-2 file:px-4 cursor-pointer
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100
        "/> */}
        
        <FileBase type="file"
        multiple={false}
        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
        />
        
        
      </label>

      <button class="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md fw-bold text-lg" onClick={handleSubmit}>Submit</button>

        </div>
    )
}

export default Form
