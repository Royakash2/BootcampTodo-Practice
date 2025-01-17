import { useState } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { FaArrowUp, FaArrowDown, FaEquals } from "react-icons/fa";

const TodoFilter = () => {
  const [priority, setPriority] = useState("medium");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg hover:scale-105 transition-transform duration-200"
        >
          Filter by Priority
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-60 bg-white shadow-md rounded-lg border border-gray-200 animate-fade-in"
      >
        <DropdownMenuLabel className="text-gray-700 font-semibold">
          Select Priority
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="my-2 border-gray-300" />
        <DropdownMenuRadioGroup value={priority} onValueChange={setPriority}>
          <DropdownMenuRadioItem
            value="high"
            className="flex items-center space-x-2 hover:bg-green-100 p-2 rounded-md transition-all"
          >
            <FaArrowUp className="text-red-500" />
            <span className="text-gray-800">High Priority</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="medium"
            className="flex items-center space-x-2 hover:bg-yellow-100 p-2 rounded-md transition-all"
          >
            <FaEquals className="text-yellow-500" />
            <span className="text-gray-800">Medium Priority</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="low"
            className="flex items-center space-x-2 hover:bg-blue-100 p-2 rounded-md transition-all"
          >
            <FaArrowDown className="text-blue-500" />
            <span className="text-gray-800">Low Priority</span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TodoFilter;
