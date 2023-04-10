import React from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import {deletePost, likePost} from '../../../actions/posts'
import ImagesToPdfPackage from "images-to-pdf-package";

function Post(props) {
    const {post, selectedPost, setSelectedPost} = props
    const ImagesToPdfPackage = require("images-to-pdf-package");
    const dispatch = useDispatch()

    function imageToPdf(){
        console.log("Image to pdf")
        const image_object = {
            src: post.selectedFile,
            height: post.selectedFile.naturalWidth,
            imageType: "",
            width: post.selectedFile.naturalHeight,
          };
          const arrayOfImages = [image_object]
          ImagesToPdfPackage(
            arrayOfImages,
            true,
            "convertedPdf",

          );
    }
    return (
        <>
        <div class="my-3 mx-2 max-w-2xl  bg-dark rounded-lg">
            <main class="py-4 px-4 sm:p-6 md:py-10 md:px-8">
                <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                    <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                    <h1 class="mt-1 p-2  font-semibold text-white sm:text-white md:text-2xl dark:sm:text-white">{post.title}</h1>
                    <p class=" text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">{moment(post.createdAt).fromNow()}</p>
                    </div>
                    <div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                        
                    <img src={post.selectedFile} alt="" class="w-full cursor-pointer h-80 object-cover rounded-lg sm:h-80 sm:col-span-2 lg:col-span-full" loading="lazy" data-bs-toggle="modal" data-target={"#viewModal"+post._id} />
                    
                    </div>
                    <dl class="mt-4 text-md font-medium flex items-center justify-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                    {/* <dt class="sr-only">Reviews</dt>
                    <dd class="text-indigo-600 flex items-center dark:text-indigo-400">
                        <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-1 stroke-current dark:stroke-indigo-500">
                        <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span><span class="text-slate-400 font-normal">(128)</span></span>
                    </dd> */}
                    
                    <dd class="flex items-center text-white">
                        <img class="mx-2 w-5" src="creator.png" alt="creator"/> 
                        {post.creator}
                    </dd>
                    </dl>
                    <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                    <button type="button" class="mx-1 my-2 w-100 bg-indigo-600 px-4 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg flex align-middle justify-center" onClick={() => dispatch(likePost(post._id))}>
                        <p class="px-3 text-black">{post.likeCount}</p>
                        <img class="w-5" src="like.png" alt="like" />
                    </button>
                    <div class="flex align-middle justify-center">
                        <button type="button" class="mx-1 my-2 w-100 bg-red-500 px-4 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg flex align-middle justify-center" onClick={() => dispatch(deletePost(post._id))}>
                        <img class="w-5" src="bin.png" alt="like" />
                        </button>
                        <button type="button" class="mx-1 my-2 w-100 bg-yellow-500 px-4 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg flex align-middle justify-center" onClick={()=> setSelectedPost(post._id)}>
                        <img class="w-5" src="edit.png" alt="like" />
                        </button>

                    </div>
                    <a type="button" class="mx-1 my-2 w-100 bg-green-600 px-4 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg flex align-middle justify-center" href={post.selectedFile} download>
                        <div class="p text-black">Download</div>
                    </a>
                    <p class="text-white"><span class="h6">Tags:</span> {post.tags}</p>
                    </div>
                    <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                        {post.message} 
                    </p>
                    
                        {/* {(post.tags).map((tag) => (
                                <h6>{tag}</h6>
                        ))} */}
                    
                </div>
            </main>
        </div>
       
        
        
    </>
    )
}

export default Post
