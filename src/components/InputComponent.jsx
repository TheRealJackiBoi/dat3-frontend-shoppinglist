import { useEffect, useRef, useState } from "react";

function InputComponent({ nextId, addShoppingListItem }) {
  const [id, setId] = useState(nextId);
  const itemRef = useRef(null);
  const priceRef = useRef(null);
  const quantityRef = useRef(null);

  useEffect(() => {
    setId(nextId);
  },[nextId]);

  return (
    <div>
      <input type="text" disabled value={id} />
      <input type="text" placeholder="Product name" ref={itemRef} />
      <input type="number" min={0} placeholder="Price" ref={priceRef} />
      <input type="number" placeholder="How many?" ref={quantityRef} />
      <button className="flex-none w-1/5 h-12 uppercase font-medium tracking-wider bg-indigo-900 text-white"
        onClick={() => {
          addShoppingListItem({
            id: id,
            name: itemRef.current.value,
            price: priceRef.current.value,
            quantity: quantityRef.current.value,
          });
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default InputComponent;
