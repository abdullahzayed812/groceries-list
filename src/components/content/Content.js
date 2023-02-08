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
      text: "Some text to show in item",
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
  };

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li>
            <input
              type="checkbox"
              checked={item.checked}
              onClick={() => handleCheck(item.id)}
            />
            <label>{item.text}</label>
            <FaTrash role="button" />
          </li>
        ))}
      </ul>
    </main>
  );
}
