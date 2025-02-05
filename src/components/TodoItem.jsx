import { useState } from "react";

function TodoItem({ todo, onToggleComplete, onUpdate, onDelete }) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const onSubmitUpdate = (e) => {
    e.preventDefault();

    if (newText.trim() === "" || newText == todo.text) return;

    onUpdate(todo.id, newText.trim());
    setIsUpdate(false);
  };
  return (
    <li
      className="
    flex justify-between items-center
    p-4
    border border-b-2 border-r-2
    bg-white
    font-semibold
    "
    >
      {isUpdate ? (
        <form
          className="
          grow
        bg-red-100
        flex justify-between
        "
          onSubmit={onSubmitUpdate}
        >
          <input
            className="
          w-full
          mr-4
          input-style
          "
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <input
            className="
        bg-green-300
        hover:bg-green-400
        px-4
        py-2
        m-3
        cursor-pointer
        "
            type="submit"
            value="확인"
          />
        </form>
      ) : (
        <span
          className={`
      text-xl
      cursor-pointer
      ${todo.completed && "line-through"}
      `}
          onClick={() => onToggleComplete(todo.id)}
        >
          {todo.text}
        </span>
      )}

      <div>
        <button
          className="
        bg-amber-300
        hover:bg-amber-400
        px-4
        py-2
        m-3
        cursor-pointer
        "
          onClick={() => setIsUpdate(!isUpdate)}
        >
          {isUpdate ? "취소" : "수정"}
        </button>
        <button
          className="
        bg-pink-300
        hover:bg-pink-400
        px-4
        py-2
        m-3
        cursor-pointer
        "
          onClick={() => onDelete(todo.id)}
        >
          삭제
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
