import getAllArticles from "../utils"
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ArticleCard from "./articleCard";
import RouteError from "../routeError";

const ArticleList = (props) => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false) 
    const topics = ["date", "comments", "votes"]
    const articleTopics = ["coding", "football", "cooking"]
    const [sortBy, setSortBy] = useState("date")
    const [orderBy, setOrderBy] = useState("desc")
    const [orderByToggle, setOrderByToggle] = useState("asc")
    

    useEffect(() => {
        setIsLoading(true)
		getAllArticles().then(({body}) => {
            if (orderBy === "asc") {setOrderByToggle("desc")} else {
                setOrderByToggle("asc")
            }

            const sortArray = (type, order) => {
                const types = {
                  date: 'created_at',
                  comments: 'comment_count',
                  votes: 'votes',
                };
                
                const sortProperty = types[type];
                
                
                let sorted = [...body].sort((a, b) => b[sortProperty] - a[sortProperty])

                if(type === "date") {
                    if(order === "asc"){
                sorted = [...body].sort((a, b) => (a.created_at < b.created_at) ? -1 : ((a.created_at > b.created_at) ? 1 : 0))}
                    else {
                        sorted = [...body].sort((a, b) => (b.created_at < a.created_at) ? -1 : ((b.created_at > a.created_at) ? 1 : 0))
                    }};
         
                if(order === "asc" && type !== "date"){
                sorted = [...body].sort((a, b) => a[sortProperty] - b[sortProperty]);}
                setArticles(sorted);
                setIsLoading(false)
              };
              
              sortArray(sortBy, orderBy);
			
            
		});
    }, [sortBy, orderBy])

 
    if (isLoading){
        return <section className="loading-screen">loading...</section>
      }

    if (props.topic &&articleTopics.includes(props.topic)){
        return (<section className="articles-container"><h2 className="topic-header">{props.topic.toUpperCase()}</h2><div className="list-of-articles">
        {articles.map((article) => {if (article.topic === props.topic)
            return (
                <Link to={`/articles/${article.article_id}`} key={article.article_id} className="article-link">
                    <ArticleCard key={article.article_id} article={article} />
                </Link> 
    )}
    )}</div>
                </section>)}
    if (props.topic){
        return (<div><RouteError message={"topic doens't exist"}/></div>)
    }
      else
    return (<section className="articles-container">
            <div className="sort-dropdown"><label htmlFor="sortby-category" >sort by<select id="sortyby-category" name="sortby-category"> 
            <option id="select" value="select" disabled="" selected="">{sortBy}</option>
            {topics.map((topic) => { if(topic !== sortBy) return <option key={topic} value={topic} onClick={(e) => setSortBy(topic)}>{topic}</option>})}
                 </select></label>
            <label htmlFor="orderby">order by<select id="orderby" name="orderbyname">
                    <option key={"desc"} value={"desc"} onClick={(e) => setOrderBy(orderBy)}>{orderBy}</option><option key={"asc"} value={"asc"} onClick={(e) => setOrderBy(orderByToggle)}>{orderByToggle}</option>
        </select></label></div>
        <div className="list-of-articles">
        {articles.map((article) => {
    return (
        <Link to={`/articles/${article.article_id}`} key={article.article_id} className="article-link">
            <ArticleCard key={article.article_id} article={article} />
        </Link> 
    );
})}
</div></section>)

}

export default ArticleList