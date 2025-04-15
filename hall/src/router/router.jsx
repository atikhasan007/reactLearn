
import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Root from "../pages/RoutLayout"
import App from '../App.jsx'
import PostList from "../pages/PostList.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import PostDetails from "../pages/PostDetails.jsx";
import UserList from "../pages/UserList.jsx";
export const router = createBrowserRouter([
   {
    path : '/',
    element : <Root />,
    errorElement : <ErrorPage/>,

    children : [{
        index : true,
        element:<Home />

    },
        {
        path : '/about',
        element:<About />
    },{
        path : '/all-todos',
        element: <App />
    },{
        path : '/posts',
        element : <PostList />
       
        
    },{
        path : '/posts/:postId',
        element : <PostDetails/>
    },{
        path : 'all-users',
        element: <UserList />
    }],
   }
    
]);