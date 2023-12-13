import { useEffect, useState } from "react";
import { getCommentsForArticle } from "../utils";
import CommentCard from "./commentCard";
import AddComment from "./addComment";

const Comments = ({article_id}) => {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
            getCommentsForArticle(article_id).then((data) => {
                setComments(data.comments);
          setIsLoading(false)
            });
        },[])
      
        if (isLoading){
            return <section className="loading-screen">loading...</section>
          }
        if (comments.length === 0){
            return <section>
                <AddComment key={comments.length} setComments={setComments} article_id={article_id}/>
                <p>No Comments</p>
                </section>
        }
          else
    return  (<section className="comment-list">
            <p>Comments</p>
            <AddComment key={comments.length} setComments={setComments} article_id={article_id}/>
            {comments.map((comment) => {
            return (
                <ul key={comment.comment_id} className="comment-box">
                    <CommentCard key={comment.comment_id} comment={comment} />
                    </ul>
    );
})}
</section>)
}

export default Comments