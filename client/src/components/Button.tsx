import React from "react";

interface ButtonProps {
  label: string;
  name: string; // added name tag to be able to make the call in DB should be deprecated when we can retrieve all data from Database and store it locally
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  name, //ibidem
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      name={name}
      className={`w-full py-1 px-3 text-white font-medium rounded-md
       
        ${
          disabled
            ? "bg-darkGreen cursor-not-allowed"
            : "hover:bg-greyGreen"
        }
        focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 text-sm`}
    >
      {label}
    </button>
  );
};

export default Button;
