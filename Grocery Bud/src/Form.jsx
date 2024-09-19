import { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addItem }) => {
  const [newItemName, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error("Please provide a value");
      return;
    }
    addItem(newItemName);
    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          name=""
          onChange={(event) => setNewItem(event.target.value)}
        />
        <button className="btn" type="submit">
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
