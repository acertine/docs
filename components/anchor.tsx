"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";
import { Button } from "./ui/button";

type AnchorProps = ComponentProps<typeof Link> & {
  absolute?: boolean;
  activeClassName?: string;
  disabled?: boolean;
  showActiveDot?: boolean;
};

export default function Anchor({ absolute, className = "", activeClassName = "", disabled, showActiveDot = true, children, ...props }: AnchorProps) {
  const path = usePathname();
  let isMatch = absolute ? props.href.toString().split("/")[1] == path.split("/")[1] : path === props.href;

  if (props.href.toString().includes("http")) isMatch = false;

  if (disabled) return <div className={cn(className, "cursor-not-allowed")}>{children}</div>;
  return (
    <Button asChild variant="link" className={cn("whitespace-normal py-1.5 px-0 h-auto", !isMatch && "!text-zinc-600 dark:!text-zinc-400")}>
      <Link className={cn(className, isMatch && activeClassName)} {...props}>
        {isMatch && showActiveDot && <div className="hidden sm:block w-1 h-1 rounded-full bg-primary" />}
        {children}
      </Link>
    </Button>
  );
}
