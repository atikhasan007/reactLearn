import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/?_limit=5`). 
        then((res)=> res.json()). 
        then((data)=> setPosts(data))
    },[])

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
