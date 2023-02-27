import { useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "./AddItem.css";

export const AddItem = ({ handleSubmit, newItem, setNewItem }) => {
  const inputRef = useRef();
  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        id="form"
        type="text"
        placeholder="Add Item"
        ref={inputRef}
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <label htmlFor="form" className="form-label"></label>
      <button
        type="submit"
        className="submit-button"
        onClick={() => inputRef.current.focus()}
      >
        <AiOutlinePlus />
      </button>
    </form>
  );
};
