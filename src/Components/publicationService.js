import axios from "axios"

const baseUrl = 'http://localhost:3001/api/publications'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response
}

const create = async newObject => {
    const response = await axios.post(baseUrl, newObject)
    return response
}

const remove = async (id)  => {
    const response = await axios.delete(`${baseUrl}/${id}`)
    console.log(response)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {getAll, create, remove}