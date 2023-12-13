import { useState, useEffect } from "react"
import { addCommentToArticle } from "../utils";

const AddComment = (props) => {

    const [input, setInput] = useState("")
    const [date, setDate] = useState(new Date().toISOString());
    const {article_id} = props;
    const [newComment, setNewComment] = useState({});

    const updateInput = (event) => {
        setInput(event.target.value)
    } 

    useEffect(() => {
        setNewComment({username: "rogersop", body: input})
         
        ;
        }, []);

    const handleSubmit = (event) => {
        event.preventDefault()
        setNewComment(() => {
            
          const commentInput = { body: input, author: "rogersop"}
            return commentInput})

        
        props.setComments((currComments) => {
            
            if (input.length === 0) {
                return[...currComments]
            }

            setDate(new Date().toISOString())
            setInput(input)
            
            return[...currComments, {comment_id: currComments.length + 1, body: input, votes: 0, author: "Anonymous", 
            created_at: date}]
        })   
            
           
            addCommentToArticle(article_id, newComment).catch((err) => {
                if (err) {
                setErrorMessage('Cannot post comment!');

        }
    })
    }

    console.log(newComment)

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