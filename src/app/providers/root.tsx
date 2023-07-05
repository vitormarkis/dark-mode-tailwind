"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

interface RootProviderProps {
  children?: React.ReactNode;
}

export default function RootProvider(props: RootProviderProps) {
  return (
    <ThemeProvider defaultTheme="dark" enableSystem attribute="class">
      {props.children}
    </ThemeProvider>
  );
}
