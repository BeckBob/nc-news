import { useParams } from "react-router-dom";
import ArticleList from "../articleList";

const TopicsPage = () => {
    const { topic } = useParams();


    return (<div>
            <ArticleList key={topic} topic={topic}/>
            </div>
    )
}


export default TopicsPage