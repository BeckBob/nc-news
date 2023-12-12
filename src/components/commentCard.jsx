
const CommentCard = ({comment}) => {
const date = comment.created_at

    const day = date.slice(8, 10)
  const month = date.slice(5,7)
  const year = date.slice(0, 4)

    return <div className="comment-card"><p className="comment-body">{comment.body} </p>

            <p className="comment-info"> by {comment.author} <br/>
                {comment.votes} votes <br/>
                posted on {day}/{month}/{year}
                </p>
                </div>
}

export default CommentCard