import React from 'react';

// Declare the props interface
export interface ButtonProps {
  label: string; // Text to display on the button
  onClick: () => void; // Function to handle the button click
  style?: React.CSSProperties; // Optional custom inline styles
}

// Declare the Button component type
declare const Button: React.FC<ButtonProps>;

export default Button;
