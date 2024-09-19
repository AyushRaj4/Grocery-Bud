import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) list = JSON.parse(list);
  else list = [];
  return list;
};

// one liner for the above function
const defaultList = JSON.parse(localStorage.getItem("list") || "[]");

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const App = () => {
  const [items, setItems] = useState(defaultList);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("Item added to the list");
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => itemId !== item.id);
    setItems(newItems);
    toast.success("Item deleted");
    setLocalStorage(newItems);
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return {...item, completed: !item.completed};
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
      <ToastContainer position="top-center" />
    </section>
  );
};

export default App;
