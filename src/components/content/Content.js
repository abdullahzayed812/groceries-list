import { ItemList } from "../itemList/ItemList";
import "./Content.css";

export function Content({ items, handleCheck, handleDelete }) {
  return (
    <>
      {items.length > 0 ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p>Your list is empty.</p>
      )}
    </>
  );
}
