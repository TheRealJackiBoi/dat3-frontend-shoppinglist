import { useState, useRef, useEffect } from "react";

function ShoppingList({ list, onDeleteItem, onUpdateItem }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatingItem, setUpdatingItem] = useState({});

  const [valuta, setValuta] = useState("kr");

  const handleValutaChange = (e) => {
    setValuta(e.target.value);
  };

  const itemNameRef = useRef(null);
  const priceRef = useRef(null);
  const quantityRef = useRef(null);

  const totalArray = list.map((item) => parseFloat(item.price));
  const totalPrice = totalArray.reduce((total, price) => total + price, 0);

  return (
    <div className="overflow-x-auto">
      <h2 className="text-3xl text-purple-700 text-center mb-4">
        Your Shopping List
      </h2>
      <div>
        <select className="mx-auto text-white bg-gray-800 block border border-info py-2" onChange={handleValutaChange}>
          <option value="kr">Danish krone</option>
          <option value="¥">Yen</option>
          <option value="€">Euro</option>
          <option value="$">USD</option>
          <option value="£">Pund</option>
        </select>
      

      <table className="w-full sm:w-11/12 sm:mx-auto md:w-9/12 lg:max-w-4xl xl:max-w-6xl mx-auto rounded overflow-hidden shadow-lg bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2">#ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2" >Actions</th>
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
                      Confirm{" "}
                      <img
                        type="image"
                        src="/src/assets/confirmIcon.png"
                        className="w-4 inline"
                      ></img>
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
                      <img
                        type="image"
                        src="/src/assets/deleteIcon.png"
                        className="w-4 inline"
                      ></img>
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td className="px-4 py-2 text-center">{item.id}</td>
                  <td
                    className={`px-4 py-2 text-center ${
                      item.pickedUp ? "line-through" : ""
                    }`}
                  >
                    {item.name}
                  </td>
                  <td
                    className={`px-4 py-2 text-center ${
                      item.pickedUp ? "line-through" : ""
                    }`}
                  >
                    {item.quantity}
                  </td>
                  <td
                    className={`px-4 py-2 text-center ${
                      item.pickedUp ? "line-through" : ""
                    }`}
                  >
                    {valuta != "kr" ? valuta : ""} {item.price}{" "}
                    {valuta == "kr" ? valuta : ""}
                  </td>
                  <td className="px-4 py-2 text-center">
                      <div className="flex justify-center">
                        <td className="mx-auto">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded "
                          onClick={() => {
                            setIsUpdating(true);
                            setUpdatingItem(item);
                          }}
                        >
                          Edit{" "}
                          <img
                            type="image"
                            src="/src/assets/editIcon.png"
                            className="w-4 inline"
                            alt="edit"
                          ></img>
                        </button>
                        </td>
                        <td className="mx-auto">
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded "
                          onClick={() => onDeleteItem(item.id)}
                        >
                          Delete{" "}
                          <img
                            type="image"
                            src="/src/assets/deleteIcon.png"
                            className="w-4 inline"
                            alt="delete"
                          ></img>
                        </button>
                        </td>
                        <td className="mx-auto ">
                        <button
                          className={`font-bold py-1 px-2 rounded ${
                            item.pickedUp
                              ? "bg-orange-500 hover:bg-orange-700 text-black"
                              : "bg-teal-500 hover:bg-teal-700 text-white"
                          }`}
                          onClick={async () => {
                            await onUpdateItem({
                              id: item.id,
                              name: item.name,
                              quantity: item.quantity,
                              price: item.price,
                              pickedUp: !item.pickedUp,
                            });
                          }}
                        >
                          {item.pickedUp ? "Collected" : "Collect"}{" "}
                          <img
                            type="image"
                            src={
                              item.pickedUp
                                ? "/src/assets/removeFromBasketIcon.png"
                                : "/src/assets/basketIcon.png"
                            }
                            className="w-4 inline"
                            alt="collect"
                          ></img>
                        </button>
                        </td>
                      </div>
                    </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <p className="text-center mx-auto py-4">
        You have {list.length} different items on your list, for a total of:{" "}
        {valuta != "kr" ? valuta : ""} {totalPrice}{" "}
        {valuta == "kr" ? valuta : ""}
      </p>
    </div>
  );
}

export default ShoppingList;
