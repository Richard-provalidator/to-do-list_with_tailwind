import { useState } from "react";

function InputForm({ onAddTodo }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;

    onAddTodo(input.trim());
    setInput("");
  };
  return (
    <div
      className="
    flex
    gap-2
    mb-8
    "
    >
      <input
        className="input-style"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="
      bg-purple-500
      text-white
      px-4
      py-[10px]
      rounded
      hover:bg-purple-600
      "
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
}

export default InputForm;
