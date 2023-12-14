import { useState, useEffect } from "react"
import { addCommentToArticle } from "../utils";

const AddComment = (props) => {

    const [input, setInput] = useState("")
    const {article_id} = props;
    const [errorMessage, setErrorMessage] = useState("")
    

    const updateInput = (event) => {
        setInput(event.target.value)
    } 
    
    const updateError = (error) => {
        setErrorMessage(error)
        setInput("something")
    }


    const handleSubmit = (event) => {
        event.preventDefault()

        props.setComments((currComments) => {
            
            if (input.length === 0) {
                return[...currComments]
            }

            
            return[{comment_id: currComments.length + 1, body: input, votes: 0, author: "weegembump", 
            created_at: new Date().toISOString()}, ...currComments]
        })   
            
           
            addCommentToArticle(article_id, input).catch((err) => {
                if (err) {
                    const errorMsg = err.response
                    console.log(errorMsg)
                    updateError(errorMsg)
                
               
    
        }
   
        

    })

    }
    // console.log(input)
    console.log(errorMessage)

    return  (
    
    <form onSubmit = {handleSubmit}>  
    <label htmlFor='commentInput'>
        <input type='text' 
        placeholder='Type comment here...' 
        id='comment-input'
        value={input} 
        onChange={updateInput}/>  
        {input.length > 50 ? <Error message ="exceeded character limit!"/>
        : <p>{`${50 - input.length} characters remaining`}</p> } 
        {errorMessage ? <Error message={errorMessage}/>: null} 
    </label>
    <button disabled={input.length > 50 }>Add Comment</button> 
</form>
)

    }

export default AddComment