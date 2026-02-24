import { cn } from "@/lib/utils";
import { type PropsWithChildren } from "react";

export function Card({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <section className={cn("glass p-5", className)}>{children}</section>;
}
