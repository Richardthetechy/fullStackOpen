import axios from "axios";
const url = 'http://localhost:3001/persons'
const getAll = () => {
    const request = axios.get(url)
    return request.then(res => res.data)
}
const create = (obj) => {
    const request = axios.post(url, obj)
    return request.then(res => res.data)
}

const deletePerson = (id) => {
    const urlDel = `${url}/${id}`
    return axios.delete(urlDel)
    .then(res => res.data)
}

const update = (id, newObj) => {
    const request =  axios.put(`${url}/${id}`, newObj)
    return request.then(res => res.data)
}
export  {
    getAll,
    create,
    deletePerson,
    update
} 