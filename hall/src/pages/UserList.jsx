import React, { useEffect, useState } from 'react'

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/?_limit=5`). 
        then((res)=>res.json()). 
        then((data)=>{
            setUsers(data);
            setIsLoading(false);
            setErrorMessage('');
        }).catch((err)=>{
            setErrorMessage(err.message);
            setIsLoading(false);
            setUsers([]);
        })
    },[])

  return (
    <div>
      <h2>All Users</h2>
      {isLoading && <h3>Loading ......</h3>}
      {errorMessage && <h3>{errorMessage}</h3>}

      <ul>
        {users.map((user)=>
            <li>{user.name}</li>
        )}
      </ul>
      
    </div>
  )
}

export default UserList
