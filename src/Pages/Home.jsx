import React, {useEffect, useState} from 'react'
import Posts from '../components/Posts/Posts'
import Form from '../components/Form/Form'
import { useDispatch } from 'react-redux'
import {getPosts} from '../actions/posts'
function Home() {
    const [selectedPost, setSelectedPost] = useState(null)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPosts());
    }, [])

    return (
        <div class="container-fluid bg-white content">
            <div class="h1 underline fw-bold">Library</div>

            
            <div class="container">
                <div class="row md:px-5 flex align-middle justify-center">

               
                    <Posts
                        selectedPost={selectedPost}
                        setSelectedPost={setSelectedPost}
                    />
                </div>
            </div>
           
            
        </div>
    )
}

export default Home
