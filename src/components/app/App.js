import { useEffect, useState } from "react";
import { AddItem } from "../addItem/AddItem";
import { Content } from "../content/Content";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { SearchItem } from "../searchItem/Searchitem";
import "./App.css";

const API_URL = "http://localhost:3500/items";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Did not receive expected data");
        const itemsList = await response.json();
        setItems(itemsList);
        setFetchError(null);
      } catch (error) {
        console.log(error);
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => fetchItems(), 2000);
  }, []);

  const handleCheck = (id) => {
    const itemsList = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(itemsList);
  };

  const handleDelete = (id) => {
    const itemsList = items.filter((item) => item.id !== id);
    setItems(itemsList);
  };

  const addItem = (item) => {
    const id = items.length > 0 ? items[items.length - 1]?.id + 1 : 1;
    const myNewItem = { id, checked: false, text: item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
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
      <SearchItem search={search} setSearch={setSearch} />
      <main>
        {fetchError ? (
          <p style={{ color: "red" }}>Error: {fetchError}</p>
        ) : isLoading ? (
          <p>Loading items...</p>
        ) : (
          <Content
            items={items.filter((item) =>
              item.text.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
