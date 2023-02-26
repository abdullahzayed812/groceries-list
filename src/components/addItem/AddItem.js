import { AiOutlinePlus } from "react-icons/ai";
import "./AddItem.css";

export const AddItem = ({ handleSubmit, newItem, setNewItem }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="form"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <label htmlFor="form" className="form-label"></label>
      <button type="submit" className="submit-button">
        <AiOutlinePlus />
      </button>
    </form>
  );
};
