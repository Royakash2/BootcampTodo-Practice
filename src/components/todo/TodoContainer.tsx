// import { DiGo } from "react-icons/di";

import TodoCard from "./TodoCard";
import AddTodoModal from "./AddTodoModal";
import TodoFilter from "./TodoFilter";
import { useAppSelector } from "@/redux/hook";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
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
          {todos.map((item) => (
            <TodoCard key={item.id} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
