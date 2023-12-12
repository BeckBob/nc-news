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
          else
    return  (<section className="comment-list">
            <p>COMMENTS</p>
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