import { useState, useEffect } from "react"
import { addCommentToArticle } from "../utils";

const AddComment = (props) => {

    const [input, setInput] = useState("")
    const [date, setDate] = useState(new Date().toISOString());
    const {article_id} = props
    const [newComment, setNewComment] = useState({})

    const updateInput = (event) => {
        setInput(event.target.value)
    } 
    

    const handleSubmit = (event) => {
        event.preventDefault()
        props.setComments((currComments) => {
            
            if (input.length === 0) {
                return[...currComments]
            }
           
            setDate(new Date().toISOString())
            setNewComment({comment_id: currComments.length + 1, body: input, votes: 0, author: "Anonymous", 
            created_at: date, article_id: article_id})
            return[...currComments, {comment_id: currComments.length + 1, body: input, votes: 0, author: "Anonymous", 
            created_at: date}]
        })
        
         addCommentToArticle(article_id, newComment)
        
        setInput("")
    }


    return  (
    
    <form onSubmit = {handleSubmit}>  
    <label htmlFor='commentInput'>
        <input type='text' 
        placeholder='Type comment here...' 
        id='comment-input'
        value={input} 
        onChange={updateInput}/>    
    </label>
    <button>Add Comment</button> 
</form>
)

}

export default AddComment