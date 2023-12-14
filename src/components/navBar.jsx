import { Link } from "react-router-dom"


const Navbar = () => {
 

    return ( 
        <nav>
            <Link to={"/"} className="nav-text">Home</Link>
            <Link className="nav-text">Users</Link>
            <Link className="nav-text-user">User : weegembum</Link> 
            
        </nav> )
}


export default Navbar