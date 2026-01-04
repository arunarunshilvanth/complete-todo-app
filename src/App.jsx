import AddTodo from "./assets/components/AddTodo";
import TodoAppName from "./assets/components/TodoAppName";
import TodoItems from "./assets/components/TodoItems";
import WelcomeMessage from "./assets/components/WelcomeMessage";

import "./App.css";
import { useState } from "react";
import { FaTasks } from "react-icons/fa";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card shadow-lg todo-card">
        <div className="card-body">
          {/* HEADER */}
          <h2 className="text-center mb-4">
            <FaTasks className="me-2 text-primary" />
            Todo App
          </h2>

          {/* INPUT SECTION */}
          <AddTodo onNewItem={handleNewItem} />

          {/* EMPTY STATE */}
          {todoItems.length === 0 && <WelcomeMessage />}

          {/* TODO LIST */}
          <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
        </div>
      </div>
    </div>
  );
}

export default App;
