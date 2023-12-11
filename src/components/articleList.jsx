import getAllArticles from "../utils"
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ArticleCard from "./articleCard";

const ArticleList = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
		getAllArticles().then(({body}) => {
            console.log(body)
			setArticles(body);
		});
    }, [])


return (<section className="articles-container">
{articles.map((article) => {
    return (
        <Link key={article.article_id} className="article-link">
            <ArticleCard key={article.article_id} article={article} />
        </Link>
    );
})}
</section>)

}

export default ArticleList