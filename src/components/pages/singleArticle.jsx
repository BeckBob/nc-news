import { useEffect, useState } from "react";
import { getArticleById } from "../../utils";
import { useParams } from "react-router-dom";

const SingleArticle = () => {
	const [article, setArticle] = useState({});
	const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(false) 
  const day = article.created_at.slice(8, 10)
  const month = article.created_at.slice(5,7)
  const year = article.created_at.slice(0, 4)
  console.log(article)
	useEffect(() => {
    setIsLoading(true)
		getArticleById(article_id).then((data) => {
			setArticle(data);
      setIsLoading(false)
		});
	}, []);
  if (isLoading){
    return <section className="loading-screen">loading...</section>
  }
  else
	return (
		<div className="single-article-card">
			<section className="single-article-header"><h3 className="single-article-title">{article.title}</h3>
			<h4 className="single-article-author">Author: {article.author}</h4></section>
            <img className="single-article-img" src={article.article_img_url} />
        
            <p className="single-article-body"> <br />
                {article.body}  </p> 
                <p> Topic: {article.topic} <br />
                Comment Count: {article.comment_count} <br/>
                Date Created: {day}/{month}/{year} <br />
                Votes: {article.votes}</p>
			
		</div>
	);
};

export default SingleArticle