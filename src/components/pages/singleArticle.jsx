import { useEffect, useState } from "react";
import { getArticleById, addLikeToArticle } from "../../utils";
import { useParams } from "react-router-dom";
import Comments from "../comments"; 

const SingleArticle = () => {
	const [article, setArticle] = useState({});
	const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(false); 
  const [date, setDate] = useState("");
  const [likes, setLikes] = useState(0)

	useEffect(() => {
    setIsLoading(true)
		getArticleById(article_id).then((data) => {
			setArticle(data);
      setIsLoading(false)
      setDate(data.created_at)
      setLikes(data.votes)
     

		});
	}, []);

  const handleClick = (article_id) => {
   
    setArticle((currArticle) => {
      const updatedArticle = {...currArticle, votes: currArticle.votes + 1} 
    setLikes(likes +1)
    return updatedArticle})
    
    
     addLikeToArticle(article_id).catch((err) => {
      console.log(err.response.data);
    })
     
    
     }


  const day = date.slice(8, 10)
  const month = date.slice(5,7)
  const year = date.slice(0, 4)
  if (isLoading){
    return <section className="loading-screen">loading...</section>
  }
  else
	return (
    <div>
		<div className="single-article-card">
			<section className="single-article-header"><h3 className="single-article-title">{article.title}</h3>
			<h4 className="single-article-author">Author: {article.author}</h4></section>
            <img className="single-article-img" src={article.article_img_url} />
        
            <p className="single-article-body"> <br />
                {article.body}  </p> 
                <p> This article is about {article.topic} <br />
                {article.comment_count} comments <br/>
                Posted on {day}/{month}/{year}  <br />
                <button className="like-button" onClick={() => handleClick(article_id)}>{likes}👍</button> </p>
			
		</div>
      <Comments key={article.article_id} article_id={article_id}/>
    </div>
	);
};

export default SingleArticle