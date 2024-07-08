import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const WrapperComponent: React.FC<WrapperProps> = ({ children }) => {
  return <div className="">{children}</div>;
};

export default WrapperComponent;
