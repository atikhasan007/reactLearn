import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const PostList = () => {
  

    const posts  = useLoaderData();
  return (
    <div>
        <h2>All posts</h2>
        {
            posts.map((post)=>
            
                    <li key={post.id}>
                       <Link to={`/posts/${post.id}`}>{post.title}</Link>  
                        </li>
                
            )
        }
    </div>
  )
}

export default PostList
