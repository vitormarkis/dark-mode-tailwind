"use client";
import CenteredContainer from "@/app/components/CenteredContainer";
import { useHeaderHeight } from "@/app/providers/contexts/header-height";
import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default function Header({ ...props }: HeaderProps) {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const { setHeaderHeight } = useHeaderHeight();

  useEffect(() => {
    if (headerRef && headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [headerRef]);

  return (
    <header
      {...props}
      ref={headerRef}
      className={twMerge("border-b border-black", props.className)}
    >
      <CenteredContainer
        notInTheBody
        className="flex items-center justify-between"
      >
        {props.children}
      </CenteredContainer>
    </header>
  );
}
