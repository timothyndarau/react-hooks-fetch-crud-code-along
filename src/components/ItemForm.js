import React, { useState } from "react";

function ItemForm({ onAdditem }) {
    const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleSubmit(e) {
    e.preventDefault();
    const itemData = {
      name: name,
    category: category,
    isIncart: false,
    };
    fetch ("http://localhost:4000/items", {
      method: "POST",
      headers: {
        "Content-Type": "applicaton/json",
      },
      body: JSON.stringify(itemData),
    })
    .then((r) => r.json())
    .then((newItem) => console.log(newItem));   
  }

  return (
    // to call handlesubmit when form is submitted
    
        <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
