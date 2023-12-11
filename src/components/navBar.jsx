import { Link } from "react-router-dom"

const Navbar = () => {
    return ( 
        <nav>
            <Link to={"/"} className="nav-text">Home</Link>
            <Link className="nav-text">Users</Link> 
            
        </nav> )
}


export default Navbar