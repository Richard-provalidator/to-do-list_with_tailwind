import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } = useSelector((state) => state.todo);

  return (
    <ul className="w-full max-w-xl space-y-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
