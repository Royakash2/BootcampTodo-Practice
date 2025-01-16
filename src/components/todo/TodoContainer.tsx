import { DiGo } from "react-icons/di";

const TodoContainer = () => {
  return (
    <div>
      <div>
        <button>Add Todo</button>
        <button>Filter</button>
      </div>
      <div className="bg-red-500 h-full w-full rounded-xl p-5 font-mono space-y-5">
        {" "}
        <div className="text-center p-4 bg-white rounded">
            <p className="font-semibold font-mono">There is no Task pending</p>
            <DiGo className="mx-auto text-amber-950 h-20 w-20" />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
