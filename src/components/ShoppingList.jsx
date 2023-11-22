function ShoppingList({ list }) {
  return (
    <div>
      <h2 className="text-3xl font-bold underline w-100">Her er din indkøbesliste</h2>
      <table>
        <thead>
        
          <tr>
            <th className="px-4 py-2">id</th>
            <th className="px-4 py-2">name</th>
            <th className="px-4 py-2">price</th>
            <th className="px-4 py-2">quantity</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ShoppingList;
