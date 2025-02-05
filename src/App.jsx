import { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import { useEffect } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: Date.now(), text: "💻 코딩하기", completed: false },
  ]);

  const addTodo = (text) =>
    setTodos([...todos, { id: Date.now(), text, completed: false }]);

  const toggleComplete = (todoId) => {
    setTodos(
      todos.map((todo) =>
        todoId === todo.id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const updateTodo = (todoId, newText) => {
    setTodos(
      todos.map((todo) =>
        todoId === todo.id ? { ...todo, text: newText } : todo
      )
    );
  };

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todoId !== todo.id));
  };

  useEffect(() => console.log(todos), [todos]);

  return (
    <div
      className="
    min-h-screen
    bg-gray-100
    p-6
    flex flex-col items-center
    "
    >
      <Header />
      <InputForm onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        onToggleComplete={toggleComplete}
        onUpdate={updateTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
}

export default App;
