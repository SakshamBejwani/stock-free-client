import React from 'react'
import Post from './Post/Post'
import { useSelector } from 'react-redux'
import moment from 'moment'
function Posts(props) {
    const {selectedPost, setSelectedPost} = props
    const posts = useSelector((state) => state.posts)
    console.log('Post from redux', posts)

    return (
<>
    <div class="flex flex-wrap align-center justify-between md:px-10">
            {posts.map((post) => (
                <>
                <Post post={post} key={post._id} selectedPost={selectedPost}
                        setSelectedPost={setSelectedPost}/>
               </>
            ))}
             
    
        
        </div>
    </>
    )
}

export default Posts
