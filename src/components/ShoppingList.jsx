function ShoppingList({ list, onDeleteItem }) {
  return (
      <div className="overflow-x-auto">
        <h2 className="text-2xl text-fuchsia-600 w-100 text-center ">Her er din indkøbesliste</h2>

        <table className="w-full sm:w-11/12 sm:mx-auto md:w-9/12 lg:max-w-4xl xl:max-w-6xl mx-auto rounded overflow-hidden shadow-lg bg-white">
          <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
          </thead>
          <tbody>
          {list.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="px-4 py-2">{item.id}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.quantity}</td>
                <td className="px-4 py-2">{item.price}</td>
                <td className="px-4 py-2">
                  <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                      onClick={() => onDeleteItem(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
}

export default ShoppingList;
