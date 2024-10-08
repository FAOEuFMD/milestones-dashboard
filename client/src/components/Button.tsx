// I ammended this so that it can accept a label and a name prop and it can call the onClick function when clicked
// This passes the buttons name (so expected_results) to the parent component which is ExpectedResults.tsx
import React from "react";

interface ButtonProps {
  label: string;
  name: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ label, name, onClick }) => {
  return (
    <button
      name={name}
      onClick={onClick}
      className="w-full py-1 px-3 text-white font-medium rounded-md focus-one hover:bg-teal-800"
    >
      {label}
    </button>
  );
};

export default Button;
