import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const PostDetails = () => {

  const [post, setPost] = useState(null);
  const { postId } = useParams();
  
  console.log(postId);
  
 useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`). 
        then((res)=> res.json()). 
        then((data)=> setPost(data))
    },[postId])


  return (
    <div>
      this is postDetails
      <h2>post details page of post id - {postId}</h2>
      <p>Post Title - {post?.title}</p>
      <p>Post Description - {post?.body}</p>

    </div>
  )
}

export default PostDetails
