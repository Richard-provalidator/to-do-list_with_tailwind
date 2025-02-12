import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleComplete, updateTodo } from "../store/slices/TodoSlice";

function TodoItem({ todo, onToggleComplete, onUpdate, onDelete }) {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [isUpdate, setIsUpdate] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  function onSubmitUpdate(event) {
    event.preventDefault();

    if (newText.trim() === "" || newText == todo.text) {
      setNewText(todo.text);
      setIsUpdate(false);
      return;
    }
    dispatch(updateTodo({ id: todo.id, text: newText.trim() }));
    // onUpdate(todo.id, newText.trim());
    setIsUpdate(false);
  }

  function toggleComplete(todoId) {
    setTodos(
      todos.map((todo) =>
        todoId === todo.id ? { ...todo, completed: !todo.completed } : todo
      )
    );
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
          onClick={() => dispatch(toggleComplete(todo))}
          // onClick={() => onToggleComplete(todo.id)}
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
