import { ReactNode } from "react";

type TContainerProp = {
  children: ReactNode;
};

const Container = ({ children }: TContainerProp) => {
  return (
    <div className="h-screen w-full max-w-7xl mx-auto lg:p-9 p-2">{children}</div>
  );
};

export default Container;
