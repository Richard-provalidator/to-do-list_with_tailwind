import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/slices/TodoSlice";

function InputForm() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function handleAdd() {
    if (input.trim() !== "") {
      dispatch(addTodo({ id: Date.now(), text: input, completed: false }));

      //onAddTodo(input.trim());
      console.log("input", input);
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
