import { useEffect, useState } from "react";
import { getAllUsers } from "../utils";
import UserCard from "./userCard";


const UserList = () => {

    const [allUsers, setAllUsers] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {  
         getAllUsers().then(({users}) => {
        setAllUsers(users)
        setLoading(false)
    }) 
    }, [])
   
    
    if (loading){
        return <section className="loading-screen">loading...</section>
      }
      else
    return (
     <div className="all-user-cards">{allUsers.map((user) => {
        return (
        
                <UserCard key={user.username} user={user} />
        
        );
    })}</div>
    );
}

export default UserList