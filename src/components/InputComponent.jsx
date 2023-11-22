import { useEffect, useRef, useState } from "react";

function InputComponent({ nextId, addShoppingListItem, shoppingCart }) {
  const [id, setId] = useState(nextId);
  const itemRef = useRef(null);
  const priceRef = useRef(null);
  const quantityRef = useRef(null);

  useEffect(() => {
    setId(nextId);
  },[nextId]);

  return (
      <div className="my-4 mx-auto w-6/12 bg-fuchsia-200 rounded p-4">
          <h2 className="text-2xl text-center text-fuchsia-600">Add to list</h2>
          <label htmlFor="text" className="block my-2 text-center text-lg font-normal text-gray-600">
              Product name
          </label>
          <input
              type="text"
              placeholder="Product name"
              ref={itemRef}
              className="block w-full my-2 p-2 border border-gray-300 rounded"
          />

          <label htmlFor="number" className="block my-2 text-center text-lg font-normal text-gray-600">
              Quantity
          </label>
          <input
              type="number"
              placeholder="How many?"
              ref={quantityRef}
              className="block w-full my-2 p-2 border border-gray-300 rounded"
          />

          <label htmlFor="number" className="block my-2 text-center text-lg font-normal text-gray-600">
              Price
          </label>
          <input
              type="number"
              min={0}
              placeholder="Price"
              ref={priceRef}
              className="block w-full my-2 p-2 border border-gray-300 rounded"
          />

          <button
              className="block w-2/5 h-12 mx-auto uppercase font-medium tracking-wider bg-indigo-900 text-white"
              onClick={() => {
                  // persist the new item to the database
                  addShoppingListItem({
                      id: id,
                      name: itemRef.current.value,
                      price: priceRef.current.value,
                      quantity: quantityRef.current.value,
                  },
                      shoppingCart)

                    // reset the input fields
                  itemRef.current.value = ""
                  priceRef.current.value = ""
                  quantityRef.current.value = ""
              }}
          >
              Add to list
          </button>
      </div>
  );
}

export default InputComponent;
