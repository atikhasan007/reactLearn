import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';


// useState => use state
//useReducer => use Reducer
//useContext => use Context






const PostList = () => {
   const {data, isLoading,errorMessage} =  useFetch(`https://jsonplaceholder.typicode.com/posts/?_limit=5`, [])

  return (
    <div>
        <h2>All posts</h2>
        {isLoading && <h3>Loading........</h3>}
        {errorMessage && <h3>{errorMessage}</h3>}

        {
            data.map((post)=>
            
                    <li key={post.id}>
                       <Link to={`/posts/${post.id}`}>{post.title}</Link>  
                        </li>
                
            )
        }
    </div>
  )
}

export default PostList
