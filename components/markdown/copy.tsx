"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { CopyIcon, Tick01Icon } from "@hugeicons/core-free-icons";
import { Button } from "../ui/button";

export default function Copy({ content }: { content: string }) {
  const [isCopied, setIsCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(content);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <Button variant="secondary" className="border" size="sm" onClick={handleCopy}>
      {isCopied ? <HugeiconsIcon icon={Tick01Icon} className="w-3 h-3" /> : <HugeiconsIcon icon={CopyIcon} className="w-3 h-3" />}
    </Button>
  );
}
