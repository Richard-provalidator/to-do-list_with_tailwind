import { useState } from "react";

function TodoItem({ todo, onToggleComplete, onUpdate, onDelete }) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  function onSubmitUpdate(event) {
    event.preventDefault();

    if (newText.trim() === "" || newText == todo.text) {
      setNewText(todo.text);
      setIsUpdate(false);
      return;
    }

    onUpdate(todo.id, newText.trim());
    setIsUpdate(false);
  }

  return (
    <li className="list">
      {isUpdate ? (
        <form className="grow flex justify-between" onSubmit={onSubmitUpdate}>
          <input
            className="input w-full mr-4"
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <input
            className="button bg-green-300 hover:bg-green-400"
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
          className="button bg-amber-300 hover:bg-amber-400"
          onClick={() => {
            setNewText(todo.text);
            setIsUpdate(!isUpdate);
          }}
        >
          {isUpdate ? "취소" : "수정"}
        </button>
        {isUpdate ? (
          ""
        ) : (
          <button
            className="button bg-pink-300 hover:bg-pink-400"
            onClick={() => onDelete(todo.id)}
          >
            삭제
          </button>
        )}
      </div>
    </li>
  );
}

export default TodoItem;
