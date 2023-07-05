import React from "react";
import { twMerge } from "tailwind-merge";

interface CenteredContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  notInTheBody?: boolean;
}

export default function CenteredContainer({
  notInTheBody,
  ...props
}: CenteredContainerProps) {
  return (
    <section
      {...props}
      className={twMerge(
        "max-w-7xl w-full mx-auto px-4",
        props.className,
        !notInTheBody && "min-h-[calc(100dvh_-_var(--headerHeight))]"
      )}
    >
      {props.children}
    </section>
  );
}
