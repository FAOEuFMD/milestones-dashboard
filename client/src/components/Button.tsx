import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button', disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-1 px-3 text-white font-medium rounded-md
        ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}
        focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 text-sm`}
    >
      {label}
    </button>
  );
};

export default Button;
