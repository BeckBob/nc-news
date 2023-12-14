import { useState, useEffect } from "react"
import { addCommentToArticle } from "../utils";

const AddComment = (props) => {

    const [input, setInput] = useState("")
    const [date, setDate] = useState(new Date().toISOString());
    const {article_id} = props;
    const [errorMessage, setErrorMessage] = useState("")

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
            
            return[...currComments, {comment_id: currComments.length + 1, body: input, votes: 0, author: "rogersop", 
            created_at: date}]
        })   
            
           
            addCommentToArticle(article_id, input).catch((err) => {
                if (err) {
                setErrorMessage(err);
        

        }
    })
    }

    

    return  (
    
    <form onSubmit = {handleSubmit}>  
    <label htmlFor='commentInput'>
        <input type='text' 
        placeholder='Type comment here...' 
        id='comment-input'
        value={input} 
        onChange={updateInput}/>  
        {input.length > 50 ? <p> exceeded character limit!
        </p>: <p>{`${50 - input.length} characters remaining`}</p> }  
    </label>
    <button disabled={input.length > 50 }>Add Comment</button> 
</form>
)

    }

export default AddComment