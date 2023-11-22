# React Shopping List App

## Description

This is a simple React-based shopping list application that allows users to add, edit, delete, and view items in their shopping list. The application uses React hooks like `useState` and `useEffect` for managing state and side effects. It communicates with a server using the Fetch API and utilizes json-server to persist data.

## Features

- Add items to the shopping list
- Edit existing items in the list
- Delete items from the list
- View the complete shopping list

## Dependencies

Make sure you have Node.js and npm installed before running the application.

- Node.js: [Download Node.js](https://nodejs.org/)
- json-server: Install using `npm install -g json-server`

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/TheRealJackiBoi/dat3-frontend-shoppinglist.git
    ```

2. Navigate to the project directory:

    ```bash
    cd react-shopping-list
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the json-server for data persistence:

    ```bash
    npm run server
    ```

5. Start the React application:

    ```bash
    npm run dev
    ```

6. Open your browser and visit `http://localhost:5173` to use the shopping list app, and `http://localhost:3001` to view the json-server data.

## CRUD Operations

All CRUD operations are implemented using a separate HTTP file (`src/http.js`).


### Create

```javascript
// src/api/api.js
export async function createItem(item) {
    const response = await axios.post("http://localhost:3001/api", item, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    return await response.data
}
```

### Read

```javascript
// src/api/api.js
export async function getItems() {
    const response = await axios.get("http://localhost:3001/api")
    return await response.data
}
```

### Read Specific based on ID

```javascript
export async function getItem(id) {
    const response = await axios.get(`http://localhost:3001/api?id=${id}`)
    return await response.data
}
```

### Update

```javascript
// src/api/api.js
export async function updateItem(item) {

    const response = await axios.put(`http://localhost:3001/api/${item.id}`, item, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    return await response.data
}
```


### Delete

```javascript
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
```

## Project Structure

```
react-shopping-list
├── public/
├── src
│   ├── api
│   │   └── api.js
│   ├── components
│   │   ├── InputComponent.jsx
│   │   └── ShoppingList.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── http.js
├── .gitignore
├── db.json
├── package-lock.json
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── test.http
└── README.md

```