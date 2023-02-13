import { FaTrash } from "react-icons/fa";

export function LineItem({ item, handleCheck, handleDelete }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleCheck(item.id)}
      />
      <label>{item.text}</label>
      <FaTrash role="button" onClick={() => handleDelete(item.id)} />
    </li>
  );
}
