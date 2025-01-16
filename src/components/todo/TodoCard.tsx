import { RiDeleteBack2Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
const TodoCard = () => {
  return (
    <div
      className="bg-todo-card flex justify-between 
    items-center p-3 rounded-lg font-semibold border shadow-lg border-[#A6D49F]"
    >
      <input type="checkbox" name="" id="" />
      <p>Todo Title</p>
      <p>Time</p>
      <p>Description</p>
      <div className="space-x-5 flex">
        <button className="text-[#FF6F61]" title="delete"><RiDeleteBack2Line/></button>
        <button className="text-[#5A8DEE]" title="edit"><FaRegEdit/></button>
      </div>
    </div>
  );
};

export default TodoCard;
