import React from "react";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export function Button({ ...props }: ButtonProps) {
  return (
    <Slot
      {...props}
      className={twMerge("border h-11 px-6 rounded-sm", props.className)}
    >
      {props.children}
    </Slot>
  );
}
