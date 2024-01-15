import { Link } from "react-router-dom"
import { getAllTopics } from "../utils"
import { useState, useEffect } from "react"


const Navbar = () => {
    const [topics, setTopics] = useState([])
    useEffect(() => {
        getAllTopics().then(({topics}) => {
          
            setTopics(topics)
        });
    }, [])
 

    return ( 
        <div><nav>
            <Link to={"/"} className="nav-text"> Home </Link>
            <Link to={"/users"}className="nav-text"> Users </Link>
            <Link to={"users/weegembum"}className="nav-text-user"> signed in: <br/> weegembump </Link> 

            </nav>
        <nav className="topics-nav">
            {topics.map((topic) => {
                return <Link to={`/topics/${topic.slug}`}key={topic.slug} className="topic-link">{topic.slug}</Link>
            }) }
            
        </nav>
        </div> )
}


export default Navbar