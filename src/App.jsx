import { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";

function App() {
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
      <TodoList />
    </div>
  );
}

export default App;
