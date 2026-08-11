import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSumit(e) {
    e.preventDefault();
    if (!description) return;
    // console.log(e);
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    // console.log(newItem);
    //to add an item
    onAddItems(newItem);

    setQuantity(1);
    setDescription("");
  }
  return (
    <form className="add-form" onSubmit={handleSumit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}