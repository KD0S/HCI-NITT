import axios from "axios"

const baseUrl = 'https://hci-backend-94fk.onrender.com/api/persons'

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