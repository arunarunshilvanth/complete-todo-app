import AddTodo from "./assets/components/AddTodo";
import TodoAppName from "./assets/components/TodoAppName";

import "./App.css";

import TodoItems from "./assets/components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./assets/components/WelcomeMessage";

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

    console.log(`item Deleted ${todoItemName}`);
  };

  return (
    <center className="todo-container">
      <TodoAppName></TodoAppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
