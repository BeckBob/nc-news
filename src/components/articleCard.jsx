

const ArticleCard = ({article}) => {
    {
        const { title, topic, article_img_url, votes } = article;
        return (
            <div className="article-card">
                <h2 className="article-title">{title}</h2>
                <img src={article_img_url} className="article-img"/>
                <p>Topic: {topic} <br />
                Votes: {votes}
                <br /></p>
            </div>
        );
    };

}
    export default ArticleCard;

