import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h1 className="lg:text-3xl text-center font-mono font-bold my-5 text-[#333333]">
        My Todos
      </h1>

      <TodoContainer />
    </Container>
  );
};

export default Todo;
