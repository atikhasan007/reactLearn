import React, { useState, useEffect } from 'react'
import './App.css';


const App = () => {


  console.log("I am re-rendering");

  const [posts, setPosts] = useState([]);

  

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
  .then((res)=>res.json())
  .then((data)=>{
    setPosts(data);
  })

  

  }, [])

  return (
    <div className='App'>
      <h2>All Posts</h2>
      <ul>
         {posts?.map((post)=>(
          <li key={post.id}>{post.title}</li>
         ))}
      </ul>
    </div>
  )
}

export default App
