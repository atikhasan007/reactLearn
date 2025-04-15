import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
const PostDetails = () => { 
const {postId} = useParams();
  const {data, isLoading, isErrorMessage} = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,null)

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
      <p>Post Title - {data?.title}</p>
      <p>Post Description - {data?.body}</p>

    </div>
  )
}

export default PostDetails
