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

         if (input.length === 0) {
            setErrorMessage("no comment")
            props.setComments((currComments) => {
            
            return [...currComments]
         })
            }
            else {
                console.log(props.comments)
                props.setComments((currComments) => {
                    return[{comment_id: currComments.length + 1, body: input, votes: 0, author: "weegembump", 
                        created_at: new Date().toISOString()}, ...currComments]
                })
            }
            console.log(props.comments)
        // props.setComments((currComments) => {
            

        //     else {
        //     return[{comment_id: currComments.length + 1, body: input, votes: 0, author: "weegembump", 
        //     created_at: new Date().toISOString()}, ...currComments]}
        // })   
            
                console.log(errorMessage)
            addCommentToArticle(article_id, input).catch((err) => {
                
                    const errorMsg = err.response
                
                    setErrorMessage("hello")
                    console.log(errorMessage)
                
   
        

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