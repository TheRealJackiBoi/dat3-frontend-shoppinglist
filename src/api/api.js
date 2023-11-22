import axios from "axios";

async function getItems() {
    const response = await axios.get("http://localhost:3001/api/items")
    return await response.data
}

async function getItem(id) {
    const response = await axios.get(`http://localhost:3001/api/items?id=${id}`)
    return await response.data
}

async function createItem(item) {
    const responseGet = await axios.get("http://localhost:3001/api/items?_sort=id&_order=desc&_limit=1")
    if (responseGet.data.length === 0) {
        item.id = 1
    }
    else {
        item.id = await responseGet.data[0].id + 1
    }
    if (await item.id != null) {
        const response = await axios.post("http://localhost:3001/api/items", item, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return await response.data
    }
}

async function updateItem(item) {

    const responseCheck = await axios.get(`http://localhost:3001/api/items?id=${item.id}`)
    if (responseCheck.data.length === 0) {
        return null
    }
    else {

        const response = await axios.put(`http://localhost:3001/api/items/${item.id}`, item, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return await response.data
    }
}

async function deleteItem(id) {
    const responseCheck = await axios.get(`http://localhost:3001/api/items?id=${id}`)
    if (await responseCheck.data.length === 0) {
        return null
    }
    else {
        const response = await axios.delete(`http://localhost:3001/api/items/${id}`)
        return await response.data
    }
}