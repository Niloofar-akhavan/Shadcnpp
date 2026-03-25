import React from 'react';
import { Button as ShadcnButton } from 'shadcn';

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <ShadcnButton onClick={onClick}>{label}</ShadcnButton>;
};

export default Button;