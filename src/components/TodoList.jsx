import TodoItem from "./TodoItem";

function TodoList({ todos, onToggleComplete, onUpdate, onDelete }) {
  return (
    <ul className="w-full max-w-xl space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
