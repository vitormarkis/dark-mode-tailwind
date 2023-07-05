"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "next-themes";
import { ButtonProps } from "@/app/atoms/Button";
import { Atom } from "@/app/atoms";

interface ButtonSwitchThemeProps extends ButtonProps {
  text?: string;
}

export function ButtonSwitchTheme({ text, ...props }: ButtonSwitchThemeProps) {
  const { theme, setTheme } = useTheme();
  return (
    <Atom.Button
      {...props}
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className={twMerge("", props.className)}
    >
      <button>{text ?? "Toggle Theme"}</button>
    </Atom.Button>
  );
}
