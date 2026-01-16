import { ModeToggle } from "@/components/theme-toggle";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { page_routes } from "@/lib/routes-config";
import { SheetClose } from "@/components/ui/sheet";
import AlgoliaSearch from "./algolia-search";
import BilloIcon from "./billo-icon";
import { GithubIcon, NewTwitterIcon, ComputerTerminal01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";
import Image from "next/image";
export const NAVLINKS = [
  {
    title: "Flow - Help Center",
    href: `/flow-help${page_routes[0].href}`,
  },
  {
    title: "Blog",
    href: "/blog",
  },
  // {
  //   title: "Examples",
  //   href: "#",
  // },
  // {
  //   title: "Guides",
  //   href: "#",
  // },
  // {
  //   title: "Community",
  //   href: "https://github.com/nisabmohd/Aria-Docs/discussions",
  // },
];

const algolia_props = {
  appId: process.env.ALGOLIA_APP_ID!,
  indexName: process.env.ALGOLIA_INDEX!,
  apiKey: process.env.ALGOLIA_SEARCH_API_KEY!,
  ignoreCanonical: true,
};

export function Navbar() {
  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 bg-background">
      <div className="sm:container mx-auto w-[95vw] h-full flex items-center sm:justify-between md:gap-2">
        <div className="flex items-center sm:gap-5 gap-2.5">
          <SheetLeftbar />
          <div className="flex items-center gap-6">
            <div className="lg:flex hidden">
              <BilloIcon />
            </div>
            <div className="md:flex hidden items-center gap-4 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center sm:justify-normal justify-between sm:gap-3 ml-1 sm:w-fit w-[90%]">
          <Button asChild variant="outline" className="hidden md:flex">
            <Link href="https://flow.acertine.com" className="flex items-center flex-row gap-2">
              <Image src="/img/flow/logo.svg" alt="Flow" width={16} height={16} />
              Flow
            </Link>
          </Button>
          <Button asChild variant="outline" className="hidden md:flex">
            <Link href="https://check.acertine.com" className="flex items-center flex-row gap-2">
              <Image src="/img/check/logo.svg" alt="Check" width={16} height={16} />
              Check
            </Link>
          </Button>
          <AlgoliaSearch {...algolia_props} />
          <div className="flex items-center justify-between sm:gap-2">
            <div className="flex ml-4 sm:ml-0">
              <Button asChild variant="ghost" size="icon">
                <Link href="https://github.com/acertine/docs" target="_blank">
                  <HugeiconsIcon icon={GithubIcon} className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <Link href="https://x.com/intent/follow?screen_name=byAcertine" target="_blank">
                  <HugeiconsIcon icon={NewTwitterIcon} className="h-4 w-4" />
                </Link>
              </Button>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <HugeiconsIcon icon={ComputerTerminal01Icon} className="h-4 w-4 text-muted-foreground" />
      <h2 className="text-md font-bold font-code">AriaDocs</h2>
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="!text-primary dark:font-medium font-semibold"
            absolute
            showActiveDot={false}
            className="flex items-center gap-1 sm:text-sm text-[14.5px] dark:text-stone-300/85 text-stone-800 hover:text-white! hover:underline"
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
