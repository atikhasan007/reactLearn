import React from 'react'
import { Outlet, Link } from 'react-router-dom'





const RoutLayout = () => {
  return (
    <>
    <div id="sidebar">
        <h1>React Router Contacts</h1>
        <nav>
            <ul>
                <li>
                    <Link to={`/`}>Home</Link>
                </li>
                <li>
                    <Link to={`/about`}>About</Link>
                </li>
                <li>
                    <Link to={`/all-todos`}>App</Link>
                </li>
                <li>
                    <Link to={`/posts`}>PostList</Link>
                </li>
                <li>
                    <Link to={`/all-users`}>All User</Link>
                </li>

            </ul>
        </nav>
    </div>

    <div id="detail">
        <Outlet />
    </div>
      
    </>
  )
}

export default RoutLayout
