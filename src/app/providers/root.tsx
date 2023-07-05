"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import { HeaderHeightProvider } from "@/app/providers/contexts/header-height";

interface RootProviderProps {
  children?: React.ReactNode;
}

export default function RootProvider(props: RootProviderProps) {
  return (
    <HeaderHeightProvider>
      <ThemeProvider defaultTheme="dark" enableSystem attribute="class">
        {props.children}
      </ThemeProvider>
    </HeaderHeightProvider>
  );
}
