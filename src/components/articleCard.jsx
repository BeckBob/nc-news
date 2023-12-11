

const ArticleCard = ({article}) => {
    {
        const { title, topic, article_img_url, votes, comment_count, created_at } = article;
        const day = created_at.slice(8, 10)
        const month = created_at.slice(5,7)
        const year = created_at.slice(0, 4)
        console.log(year)
        return (
            <div className="article-card">
                <h2 className="article-title">{title}</h2>
                <img src={article_img_url} className="article-img"/>
                <p>Topic: {topic} <br />
                Votes: {votes}
                <br />
                Comment Count: {comment_count} <br/>
                Date Created: {day}/{month}/{year} <br /></p>
            </div>
        );
    };

}
    export default ArticleCard;

