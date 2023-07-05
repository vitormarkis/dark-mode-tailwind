import React from "react";
import { twMerge } from "tailwind-merge";

interface CenteredContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default function CenteredContainer({
  ...props
}: CenteredContainerProps) {
  return (
    <section
      {...props}
      className={twMerge("max-w-7xl w-full mx-auto px-4", props.className)}
    >
      {props.children}
    </section>
  );
}
