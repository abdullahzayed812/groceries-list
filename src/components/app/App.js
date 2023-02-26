import { useState } from "react";
import { AddItem } from "../addItem/AddItem";
import { Content } from "../content/Content";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "./App.css";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppingList"))
  );
  const [newItem, setNewItem] = useState("");

  const setAndSaveItems = (items) => {
    setItems(items);
    localStorage.setItem("shoppingList", JSON.stringify(items));
  };

  const handleCheck = (id) => {
    const itemsList = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(itemsList);
  };

  const handleDelete = (id) => {
    const itemsList = items.filter((item) => item.id !== id);
    setAndSaveItems(itemsList);
  };

  const addItem = (item) => {
    const id = items.length > 0 ? items[items.length - 1]?.id + 1 : 1;
    const myNewItem = { id, checked: false, text: item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header />
      <AddItem
        handleSubmit={handleSubmit}
        newItem={newItem}
        setNewItem={setNewItem}
      />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
