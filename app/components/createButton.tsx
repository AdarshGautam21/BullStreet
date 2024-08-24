import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset"; // Added 'type' prop
}

const CreateButton: React.FC<ButtonProps> = ({
  text,
  className = "",
  onClick,
  type = "button", // Default type to "button" if not provided
}) => {
  return (
    <button
      type={type} // Pass the 'type' prop to the button element
      className={`px-4 py-2 text-white rounded ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CreateButton;
