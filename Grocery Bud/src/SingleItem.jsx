import React, { useState } from "react";
import { toast } from "react-toastify";
export function SingleItem({ item, removeItem, editItem }) {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        name="completed"
        checked={item.completed}
        onChange={() => {
          editItem(item.id);
          // if (!isComplete) toast.success(`${item.name} - Done`);
          // else toast.error(`${item.name} - not done`);
        }}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed && "line-through",
        }}
      >
        {item.name}
      </p>
      <button
        type="button"
        className="btn remove-btn"
        onClick={() => removeItem(item.id)}
      >
        delete
      </button>
    </div>
  );
}
