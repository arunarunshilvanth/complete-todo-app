import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { FaPen, FaCalendarAlt } from "react-icons/fa";

const AddTodo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    if (!todoName || !dueDate) return; // micro UX validation

    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container mb-4">
      <div className="row g-2 align-items-end">
        {/* TODO INPUT */}
        <div className="col-md-6">
          <label className="form-label fw-semibold">Task</label>
          <div className="input-group">
            <span className="input-group-text">
              <FaPen />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="What do you want to do?"
              value={todoName}
              onChange={handleNameChange}
            />
          </div>
        </div>

        {/* DATE INPUT */}
        <div className="col-md-4">
          <label className="form-label fw-semibold">Due Date</label>
          <div className="input-group">
            <span className="input-group-text">
              <FaCalendarAlt />
            </span>
            <input
              type="date"
              className="form-control"
              value={dueDate}
              onChange={handleDateChange}
            />
          </div>
        </div>

        {/* ADD BUTTON */}
        <div className="col-md-2 d-grid">
          <button
            type="button"
            className="btn btn-success add-btn"
            onClick={handleAddButtonClicked}
          >
            <IoIosAddCircle className="me-1" size={22} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
