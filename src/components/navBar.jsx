import { Link } from "react-router-dom"
import { getAllTopics } from "../utils"
import { useState, useEffect } from "react"


const Navbar = () => {

 

    return ( 
        <div><nav>
            <Link to={"/"} className="nav-text">Home</Link>
            <Link className="nav-text">Users</Link>
            <Link className="nav-text-user">User : weegembum</Link> 

            
        </nav>
        </div> )
}


export default Navbar