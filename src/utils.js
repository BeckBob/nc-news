import axios from "axios";

const api = axios.create({baseURL:"https://breaddit.onrender.com"})

const getAllArticles = () => {
    return api.get("/api/articles").then((response) => 
    {
        return response.data})
}

export default getAllArticles