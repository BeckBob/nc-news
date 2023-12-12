import { useEffect, useState } from "react";
import { getCommentsForArticle } from "../utils";
import CommentCard from "./commentCard";

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
            return <p>No Comments</p>
        }
          else
    return  (<section className="comment-list">
            <p>Comments</p>
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