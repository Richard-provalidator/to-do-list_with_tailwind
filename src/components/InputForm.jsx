import { useState } from "react";

function InputForm({ onAddTodo }) {
  const [input, setInput] = useState("");

  function handleAdd() {
    if (input.trim() !== "") {
      onAddTodo(input.trim());
    }

    setInput("");
  }

  return (
    <div className="flex gap-2 mb-8">
      <input
        className="input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="button bg-purple-400 hover:bg-purple-500"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
}

export default InputForm;
