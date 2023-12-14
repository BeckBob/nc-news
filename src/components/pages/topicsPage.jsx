import { useParams } from "react-router-dom";
import ArticleList from "../articleList";

const TopicsPage = () => {
    const { topic } = useParams();


    return (<div><h2 className="topic-header">{topic}</h2>
            <ArticleList key={topic} topic={topic}/>
            </div>
    
    )
}


export default TopicsPage