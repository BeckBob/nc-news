import { deleteCommentFromDB } from "../utils"
import { useState } from "react"

const DeleteComment = (props) => {

    const [errorMessage, setErrorMessage] = useState("")
    const {comment} = props
    const handleClick = () => {
        if(comment.author === "weegembump"){
        props.setComments((currComments) => {
            const updatedComments = currComments.filter((commentFromArr) => {
                if (commentFromArr.comment_id !== comment.comment_id)
                {return commentFromArr} 
            })
            return[...updatedComments]})

        deleteCommentFromDB(comment.comment_id).catch((err) => {
        if (err){setErrorMessage(err)}}
        )
    }}
    if (errorMessage) {
        return <p>{errorMessage}</p>
    }
    else
    return <div>
        <button onClick={handleClick}>Delete Comment</button>

        </div>
}

export default DeleteComment