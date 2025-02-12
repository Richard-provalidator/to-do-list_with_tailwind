import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { updateTodo } from "../store/slices/TodoSlice";

function TodoList({ onToggleComplete, onUpdate, onDelete }) {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  function handleUpdateTodo(todoId, newText) {
    dispatch(updateTodo({ id: todoId, text: newText }));
  }
  return (
    <ul className="w-full max-w-xl space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onUpdate={handleUpdateTodo}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
