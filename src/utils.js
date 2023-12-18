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
    }).catch((err) => {
        console.log(err)
        return Promise.reject(err)
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

export const addCommentToArticle = (article_id, input) => {
    const patchBody = {
        username: "weegembump",
        body: input,
    }

    return api.post(`/api/articles/${article_id}/comments`, patchBody).then((response) => {

        return response.data

    }).catch((err) => {
        return Promise.reject(err.response.data)
    })
}

export const deleteCommentFromDB = (comment_id) => {
    return api.delete(`/api/comments/${comment_id}`).then((response) => {
        if(!response.ok) {return Promise.reject({ status: response.status, message: response.statusText})}

        return console.log("deleted comment")
    })
}

export const getAllTopics = () => {
    return api.get("/api/topics").then((response) => 
    {
        return response.data})
}


export default getAllArticles

