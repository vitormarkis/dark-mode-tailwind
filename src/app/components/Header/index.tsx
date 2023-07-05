import CenteredContainer from "@/app/components/CenteredContainer";
import React from "react";
import { twMerge } from "tailwind-merge";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default function Header({ ...props }: HeaderProps) {
  return (
    <header
      {...props}
      className={twMerge("border-b border-black", props.className)}
    >
      <CenteredContainer className="flex items-center justify-between">
        {props.children}
      </CenteredContainer>
    </header>
  );
}
