const Error = (props) => {

    const {message} = props
    return (
        <div className="error">
            <p>error!</p>
            <p>{message}</p>

        </div>
        
    )

}

export default Error;