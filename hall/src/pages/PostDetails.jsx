import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const PostDetails = () => {

  const [post, setPost] = useState(null);
  const { postId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isErrorMessage, setIsErrorMessage] = useState("");


  
 useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`). 
        then((res)=> res.json()). 
        then((data)=> {
          setPost(data);
          setIsLoading(false);
          setIsErrorMessage("");
        }).catch((err)=>{
          setIsErrorMessage(err.message);
          setIsLoading(false);
          setPost(null);
          
       
        })
    },[postId])

    if(isLoading){
      return <h3>Loading ........</h3>
    }
    if(isErrorMessage){
      return <h3>{isErrorMessage}</h3>
    }


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
