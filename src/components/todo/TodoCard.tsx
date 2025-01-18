import { RiDeleteBack2Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { useAppDispatch } from "@/redux/hook";
import { removeTask, toggleComplete } from "@/redux/features/todoSlice";

type TTodoProps = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};
const TodoCard = ({
  title,
  description,
  id,
  isCompleted,
  priority,
}: TTodoProps) => {
  const dispatch = useAppDispatch();
  const toggleState = () => {
    dispatch(toggleComplete(id));
  };
  return (
    <div
      className="bg-todo-card flex justify-between 
    items-center p-3 rounded-lg font-semibold border shadow-lg border-[#A6D49F]"
    >
      <input
        className="mr-3"
        onChange={toggleState}
        type="checkbox"
        name="complete"
        id="complete"
      />
      <p className="font-semibold flex-1">{title}</p>
      <div className="flex-1 flex items-center gap-2">
        <div className={`size-3 rounded-full 
        ${priority === 'high' ? 'bg-red-500' : null} 
         ${priority === 'medium' ? 'bg-orange-400' : null}
         ${priority === 'low' ? 'bg-green-600' : null}
        `}> </div>
        <p>{priority}</p>
      </div>
      <div className="flex-1">
        {isCompleted ? (
          <p className="text-green-500">Done</p>
        ) : (
          <p className="text-red-500">pending</p>
        )}
      </div>
      <p className="flex-[2]">{description}</p>
      <div className="space-x-5 flex">
        <button
          onClick={() => dispatch(removeTask(id))}
          className="text-[#FF6F61]"
          title="delete"
        >
          <RiDeleteBack2Line />
        </button>
        <button className="text-[#5A8DEE]" title="edit">
          <FaRegEdit />
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
