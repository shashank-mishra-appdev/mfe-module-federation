import React from 'react';

// Define the prop types for the Button component
interface ButtonProps {
  label: string; // Text to display on the button
  onClick: () => void; // Click event handler
  style?: React.CSSProperties; // Optional custom styles
}

// Button Component
const Button: React.FC<ButtonProps> = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={{ ...defaultStyles, ...style }}>
      {label}
    </button>
  );
};

// Default button styles
const defaultStyles: React.CSSProperties = {
  padding: '8px 16px',
  fontSize: '12px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '3px',
  cursor: 'pointer',
  marginTop: '2rem'
};

export default Button;
