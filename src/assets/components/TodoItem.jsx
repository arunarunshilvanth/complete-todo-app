import { MdDeleteSweep } from "react-icons/md";
const TodoItem = ({ todoName, todoDate, onDeleteClick }) => {
  return (
    <div className="container">
      <div class="row kg-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => onDeleteClick(todoName)}
          >
            <MdDeleteSweep />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
