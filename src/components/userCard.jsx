const UserCard = ({user}) => {
    {
        const { username, name, avatar_url} = user;
        return (
            <div className="user-card">
                <h2 className="username">{username}</h2>
                <img src={avatar_url} className="user-img"/>
                <p>Name: {name} </p>
            </div>
        );
    };

    

}
    export default UserCard;