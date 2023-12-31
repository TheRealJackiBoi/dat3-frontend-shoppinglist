import axios from "axios";

export async function getItems() {
    const response = await axios.get("http://localhost:3001/api")
    return await response.data
}

export async function getItem(id) {
    const response = await axios.get(`http://localhost:3001/api?id=${id}`)
    return await response.data
}

export async function createItem(item) {
        const response = await axios.post("http://localhost:3001/api", item, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return await response.data
}

export async function updateItem(item) {

    const response = await axios.put(`http://localhost:3001/api/${item.id}`, item, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    return await response.data
}

export async function deleteItem(id) {
    const responseCheck = await axios.get(`http://localhost:3001/api?id=${id}`)
    if (await responseCheck.data.length === 0) {
        return null
    }
    else {
        const response = await axios.delete(`http://localhost:3001/api/${id}`)
        return await response.data
    }
}