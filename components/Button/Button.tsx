import './button.css';

import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}
export function Button({ children, variant = 'primary',  ...props }: ButtonProps) {
  const classes =
    "btn " +
    (variant === "primary" ? "btn-primary " : "") +
    (variant === "secondary" ? "btn-secondary " : "");
  return <button className={classes.trim()} {...props}>{children}</button>;
}

export default Button;
