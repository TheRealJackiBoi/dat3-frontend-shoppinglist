import { useState, useRef, useEffect } from "react";

function ShoppingList({ list, onDeleteItem, onUpdateItem }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatingItem, setUpdatingItem] = useState({});

  const itemNameRef = useRef(null);
  const priceRef = useRef(null);
  const quantityRef = useRef(null);

  return (
    <div className="overflow-x-auto">
      <h2 className="text-3xl text-purple-700 text-center mb-4">
        Your Shopping List
      </h2>
  
      <table className="w-full sm:w-11/12 sm:mx-auto md:w-9/12 lg:max-w-4xl xl:max-w-6xl mx-auto rounded overflow-hidden shadow-lg bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2">#ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id} className="border-b">
              {isUpdating && updatingItem.id === item.id ? (
                <>
                  <td className="px-4 py-2 text-center">{item.id}</td>
                  <td className="px-4 py-2 text-center">
                    <input
                      type="text"
                      placeholder="Name"
                      ref={itemNameRef}
                      defaultValue={updatingItem.name}
                      className="block w-9/12 mx-auto my-2 p-2 border border-gray-300 rounded text-center"
                    />
                  </td>
                  <td className="px-4 py-2 text-center">
                    <input
                      type="text"
                      pattern="[0-9]*" 
                      placeholder="Quantity"
                      defaultValue={updatingItem.quantity}
                      ref={quantityRef}
                      className="block w-9/12 mx-auto my-2 p-2 border border-gray-300 rounded text-center"
                    />
                  </td>
                  <td className="px-4 py-2 text-center">
                    <input
                      type="text"
                      pattern="[0-9]*" 
                      min={0}
                      placeholder="Price"
                      defaultValue={updatingItem.price}
                      ref={priceRef}
                      className="block w-9/12 mx-auto my-2 p-2 border border-gray-300 rounded text-center"
                    />
                  </td>
                  <td className="px-4 py-2 text-center">
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"
                      onClick={async () => {
                        await onUpdateItem({
                          id: item.id,
                          name: itemNameRef.current.value,
                          quantity: quantityRef.current.value,
                          price: priceRef.current.value,
                        });
                        setIsUpdating(false);
                      }}
                    >
                      Confirm
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                      onClick={() => {
                        onDeleteItem(item.id);
                        setIsUpdating(false);
                        setUpdatingItem(null);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td className="px-4 py-2 text-center">{item.id}</td>
                  <td className="px-4 py-2 text-center">{item.name}</td>
                  <td className="px-4 py-2 text-center">{item.quantity}</td>
                  <td className="px-4 py-2 text-center">${item.price}</td>
                  <td className="px-4 py-2 text-center">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                      onClick={() => {
                        setIsUpdating(true);
                        setUpdatingItem(item);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                      onClick={() => onDeleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                  </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShoppingList;
