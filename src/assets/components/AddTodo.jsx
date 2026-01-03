import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
const AddTodo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState();
  const [dueDate, setdueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setdueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setdueDate("");
  };

  return (
    <div class="container text-centers">
      <div class="row kg-row">
        <div class="col-6">
          <input
            type="text"
            placeholder="Enter todo here
            "
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div class="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-success kg-button "
            onClick={handleAddButtonClicked}
          >
            <IoIosAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddTodo;
