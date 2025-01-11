import React from 'react';

interface DropdownProps {
  options: Array<{ label: string; value: string }>;
  onChange: (value: string) => void;
  selectedValue: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onChange, selectedValue }) => {
  return (
    <select value={selectedValue} onChange={(e) => onChange(e.target.value)}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
