import React from 'react';

const Button: React.FC<{ onClick?: () => void; children: React.ReactNode }> = ({ onClick, children }) => {
    return <button className="shadcn-button" onClick={onClick}>{children}</button>;
};

export default Button;