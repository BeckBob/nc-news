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

export const changeArticleVotes = (article_id, number) => {
    const patchBody = {
        inc_votes: number
    }
    return api.patch(`/api/articles/${article_id}`, patchBody).then((response) => {
        return response.data

    }).catch((err) => {return err.response.data})
}

export const addCommentToArticle = (article_id, newComment) => {
    // console.log(newComment)
    const patchBody = {
        username: newComment.body,
        author: newComment.author,
    }

    return api.post(`/api/articles/${article_id}/comments`, patchBody).then((response) => {
        return response.data

    }).catch((err) => {return err.response.data})
}
export default getAllArticles