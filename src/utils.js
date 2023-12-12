import axios from "axios";

const api = axios.create({baseURL:"https://breaddit.onrender.com"})

const getAllArticles = () => {
    return api.get("/api/articles").then((response) => 
    {
        return response.data})
}

export const getArticleById = (article_id) => {
    return api.get(`/api/articles/${article_id}`).then((response) =>
    {
        return response.data
    })
}

export const getCommentsForArticle = (article_id) => {
    return api.get(`/api/articles/${article_id}/comments`).then((response) =>
    {
        return response.data
    })
}

export const addLikeToArticle = (article_id) => {
    const patchBody = {
        inc_votes: 1
    }
    return api.patch(`/api/articles/${article_id}`, patchBody).then((response) => {
        return response.data

    }).catch((err) => {console.log(err)})
}
export default getAllArticles