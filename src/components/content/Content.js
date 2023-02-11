import { useState } from "react";
import "./Content.css";
import { FaTrash } from "react-icons/fa";

export function Content() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      text: "Some text to show in item",
    },
    {
      id: 2,
      checked: false,
      text: "Can i take some froutes",
    },
    {
      id: 3,
      checked: false,
      text: "Some text to show in item",
    },
  ]);

  const handleCheck = (id) => {
    const itemsList = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(itemsList);
    localStorage.setItem("shoppingList", JSON.stringify(itemsList));
  };

  const handleDelete = (id) => {
    const itemsList = items.filter((item) => item.id !== id);
    setItems(itemsList);
    localStorage.setItem("shoppingList", JSON.stringify(itemsList));
  };

  return (
    <main>
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <li>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <label>{item.text}</label>
              <FaTrash role="button" onClick={() => handleDelete(item.id)} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Your list is empty.</p>
      )}
    </main>
  );
}
