import { useEffect, useState } from "react"
import { getAllUsers } from "../../utils"


const UserPage = () => {
    const [singleUser, setSingleUser] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {

    getAllUsers().then(({users}) => {
            users.map((user) => 
                {
                    console.log(user)
            if (user.username === "weegembump") 
            {setSingleUser(user)}})
            setLoading(false)
        })
        
    },[])

    if (loading){
        return <section className="loading-screen">loading...</section>
      }
      else
    return (<div className="single-user-card">
    <h2 className="single-username">{singleUser.username}</h2>
    <img src={singleUser.avatar_url} className="single-user-img"/>
    <p>Name: {singleUser.name} </p>
    </div>)
}

export default UserPage