import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export interface RadioProps extends InputProps {
  id: string;
  label: string;
  className?: string;
  isSelected?: boolean;
}
