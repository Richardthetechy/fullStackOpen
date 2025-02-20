import axios from "axios";
const baseUrl = 'http://localhost:3001/notes'

const getAll = () =>
    {
    const request = axios.get(baseUrl)
    return request.then(res => res.data)
} 
const create = (newObj) => 
    {
       const request =  axios.post(baseUrl, newObj)
       return request.then(res => res.data)
    }

const update = (id, newObj) => {
    const request =  axios.put(`${baseUrl}/${id}`, newObj)
    return request.then(res => res.data)
}

export {
    getAll,
    create,
    update
}