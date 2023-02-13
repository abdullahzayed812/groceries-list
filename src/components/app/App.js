import { useState } from "react";
import { Content } from "../content/Content";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "./App.css";

function App() {
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
    <div className="App">
      <Header />
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
