import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Image from "next/image";

interface BilloIconProps {
  iconOnly?: boolean;
  noIdentifier?: boolean;
  className?: string;
  shortName?: boolean;
}

export default function BilloIcon({ iconOnly, noIdentifier, shortName, className }: BilloIconProps) {
  if (iconOnly) {
    return (
      <Link href="/" className="flex flex-row items-center gap-2" aria-label="Flow - Go to homepage">
        <Image src="/img/new/logo.svg" alt="Acertine" width={128} height={128} className={cn("size-6 ", className)} aria-hidden="true" />
      </Link>
    );
  }
  return (
    <Link href="/" className="flex flex-row items-center gap-2" aria-label="Flow - Go to homepage">
      <div className="text-sidebar-primary-foreground flex items-center justify-center rounded-md">
        <Image src="/img/new/logo.svg" alt="Acertine" width={32} height={32} className="size-6 " aria-hidden="true" />
      </div>
      <div className="mt-[2px] flex space-x-2 text-left text-sm leading-tight">
        <div className="flex flex-col gap-0">
          <div className="w-max text-lg font-semibold">{shortName ? "Acertine Help Center" : "Acertine Help Center"} </div>
        </div>
      </div>
    </Link>
  );
}
