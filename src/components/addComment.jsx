import { useState, useEffect } from "react"
import { addCommentToArticle } from "../utils";
import Error from "./error.jsx"

const AddComment = (props) => {

    const errorObj = {message: ""}

    const [input, setInput] = useState("")
    const {article_id} = props;
    const [errorMessage, setErrorMessage] = useState(errorObj)
    

    const updateInput = (event) => {
        setInput(event.target.value)
    } 

    useEffect(() => {
        console.log(errorMessage, "<----")
    }, [errorMessage])

    const handleSubmit = (event) => {
        event.preventDefault()

         if (input.length === 0) {
            setErrorMessage({message:"nothing in comment box!"})
            props.setComments((currComments) => {
            
            return [...currComments]
         })
            }
            else {
                props.setComments((currComments) => {
                    console.log(errorMessage)
                    return[{comment_id: currComments.length + 1, body: input, votes: 0, author: "weegembump", 
                        created_at: new Date().toISOString()}, ...currComments]
                })

                addCommentToArticle(article_id, input).catch((err) => {
                    const newErrorMessage = err.msg
                    
                    console.log(newErrorMessage)
                    setErrorMessage({message: newErrorMessage})
                    
                    
    })
        
            
    }
    }
    
    return  (
    
    <form onSubmit = {handleSubmit}>  
    <label htmlFor='commentInput'>
        <input type='text' 
        placeholder='Type comment here...' 
        id='comment-input'
        value={input} 
        onChange={updateInput}/>  
        {input.length > 50 ? <Error message={"exceeded character limit!"}/>
        : <p>{`${50 - input.length} characters remaining`}</p> } 
        {errorMessage.message.length > 0 ? <Error message={errorMessage.message}/>: null} 
    </label>
    <button disabled={input.length > 50 }>Add Comment</button> 
</form>
)

    }

export default AddComment