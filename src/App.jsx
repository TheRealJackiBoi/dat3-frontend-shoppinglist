import { useState } from "react";
import "./App.css";
import InputComponent from "./components/InputComponent";
import ShoppingList from "./components/ShoppingList";

function App() {

  {/* change this to database */}
  const initialShoppingCart = [
    { id: 1, price: 10, name: "Apple", quantity: 1 },
    { id: 2, price: 20, name: "Orange", quantity: 1 },
    { id: 3, price: 30, name: "Banana", quantity: 1 },
    { id: 4, price: 40, name: "Grapes", quantity: 4 },
  ];

  const [shoppingCart, setShoppingCart] = useState(initialShoppingCart);
  const addShoppingListItem = (item) => {
    setShoppingCart([...shoppingCart, item]);
  }

  return (
    <div className="flex">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="w-400 bg-white shadow rounded">
        <ShoppingList list={shoppingCart} />
        <InputComponent
          nextId={shoppingCart.length + 1}
          addShoppingListItem={addShoppingListItem}
        />
      </div>
    </div>
  );
}

export default App;
