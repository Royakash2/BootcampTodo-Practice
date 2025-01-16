// import { DiGo } from "react-icons/di";

import TodoCard from "./TodoCard";
import AddTodoModal from "./AddTodoModal";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal/>
        <button>Filter</button>
      </div>
      <div className="bg-primary-gradient h-full w-full rounded-xl p-[5px] font-mono ">
        {" "}
        {/* <div className="p-2 bg-[#F6E96B] rounded flex justify-center items-center">
          <p className="font-semibold font-mono lg:text-xl sm:text-xs">
            There is no Task pending
          </p>
          <DiGo className="text-amber-950 lg:h-16 lg:w-16 h-12 w-12" />
        </div> */}
        <div className="bg-todo-card lg:p-5 w-full h-full rounded-lg space-y-3">
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
