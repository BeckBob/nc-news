import getAllArticles from "../utils"
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ArticleCard from "./articleCard";

const ArticleList = (props) => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false) 
    useEffect(() => {
        setIsLoading(true)
		getAllArticles().then(({body}) => {
			setArticles(body);
            setIsLoading(false)
		});
    }, [])

    if (isLoading){
        return <section className="loading-screen">loading...</section>
      }
    if (props.topic){
        return (<section className="articles-container">
        {articles.map((article) => {if (article.topic === props.topic)
            return (
                <Link to={`/articles/${article.article_id}`} key={article.article_id} className="article-link">
                    <ArticleCard key={article.article_id} article={article} />
                </Link> 
    )})}
                </section>)}
      else
return (<section className="articles-container">
{articles.map((article) => {
    return (
        <Link to={`/articles/${article.article_id}`} key={article.article_id} className="article-link">
            <ArticleCard key={article.article_id} article={article} />
        </Link>
    );
})}
</section>)

}

export default ArticleList