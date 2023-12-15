import { useEffect, useState } from "react";
import { getArticleById, changeArticleVotes } from "../../utils";
import { useParams } from "react-router-dom";
import Comments from "../comments"; 
import RouteError from "../../routeError";

const SingleArticle = () => {
	const [article, setArticle] = useState({});
	const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true); 
  const [date, setDate] = useState("");
  const [likes, setLikes] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);

	useEffect(() => {
		getArticleById(article_id).then((data) => {
      
      setDate(data.created_at)
      setLikes(data.votes)
      setIsLoading(false)
      setArticle(data)
      }).catch((err) => {
        setErrorMessage(err.response.data.msg)
        setIsLoading(false)
      });
	}, []);

  console.log(errorMessage)
  const handleClick = (article_id) => {
   
    setArticle((currArticle) => {
      const updatedArticle = {...currArticle, votes: currArticle.votes + 1} 
    setLikes(likes +1)
    return updatedArticle})
    
    
     changeArticleVotes(article_id, 1).catch((err) => {
      if (err) {
      setErrorMessage('Votes button not working!');

      setArticle((currArticle) => {
        const updatedArticle = {...currArticle, votes: currArticle.votes + 1} 
      setLikes(likes -1)
      return updatedArticle})
      }
    })
     
    
     }

     const handleClickDown = (article_id) => {
   
      setArticle((currArticle) => {
        const updatedArticle = {...currArticle, votes: currArticle.votes + 1} 
      setLikes(likes -1)
      return updatedArticle})
      
      
       changeArticleVotes(article_id, -1).catch((err) => {
        if (err) {
        setErrorMessage('Votes button not working!');
        setArticle((currArticle) => {
          

          const updatedArticle = {...currArticle, votes: currArticle.votes + 1} 
        setLikes(likes +1)
        return updatedArticle})
        }
       ;
      })
       
      
       }

  const day = date.slice(8, 10)
  const month = date.slice(5,7)
  const year = date.slice(0, 4)

  
  if (isLoading){
    return <section className="loading-screen">loading...</section>
  }
  else if(errorMessage){
    return <RouteError message={errorMessage}/>
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
                Posted on {day}/{month}/{year}  <br /> </p>
                <div className="votes-box">{likes}
                <button className="vote-button" onClick={() => handleClick(article_id)}>👍</button> 
                <button className="vote-button" onClick={() => handleClickDown(article_id)}>👎</button> 
                </div>
                
		</div>
      <Comments key={article.article_id} article_id={article_id}/>
    </div>
	);
};

export default SingleArticle