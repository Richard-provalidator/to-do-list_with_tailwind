import { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import { useEffect } from "react";
import TodoList from "./components/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "./store/slices/TodoSlice";

function App() {
  // const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  // function handleAddTodo(text) {
  //   console.log("start");
  //   dispatch(addTodo({ id: Date.now(), text, completed: false }));
  //   console.log("end");
  // }

  // const [todos, setTodos] = useState([
  //   { id: Date.now(), text: "💻 코딩하기", completed: false },
  // ]);

  // function addTodo(text) {
  //   setTodos([...todos, { id: Date.now(), text, completed: false }]);
  // }

  function toggleComplete(todoId) {
    setTodos(
      todos.map((todo) =>
        todoId === todo.id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  // function updateTodo(todoId, newText) {
  //   setTodos(
  //     todos.map((todo) =>
  //       todoId === todo.id ? { ...todo, text: newText } : todo
  //     )
  //   );
  // }

  function handleUpdateTodo(todoId, newText) {
    dispatch(updateTodo({ id: todoId, text: newText }));
  }

  function deleteTodo(todoId) {
    setTodos(todos.filter((todo) => todoId !== todo.id));
  }

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
      <InputForm />
      <TodoList
        todos={todos}
        onToggleComplete={toggleComplete}
        onUpdate={handleUpdateTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
}

export default App;
