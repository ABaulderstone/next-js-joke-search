import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export default function Button({
  children,
  className = '',
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`bg-blue-600 p-2 m-2 rounded text-white w-fit disabled:bg-slate-400 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
