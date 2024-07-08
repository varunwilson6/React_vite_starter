import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const WrapperComponent: React.FC<WrapperProps> = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

export default WrapperComponent;
