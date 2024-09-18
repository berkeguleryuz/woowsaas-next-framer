import Image from "next/image";
import React from "react";
import CutCurnerButton from "@/components/core/CutCurnerButton";

type Props = {};

const Nav = (props: Props) => {
  return (
    <header className="sticky container mx-auto top-0 bg-neutral-900/50">
      <div className="container">
        <div className="flex justify-between items-center h-24 md:h-28">
          <div>
            <Image src="/logo.png" alt="logo" width={77} height={77} />
          </div>
          <div className="flex gap-4 items-center">
            <CutCurnerButton className="hidden md:inline-flex">
              Get Started
            </CutCurnerButton>
            <div className="size-10 relative">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2  -translate-y-1/2">
                <div className="w-5 h-0.5 bg-zinc-300 -translate-y-1"></div>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2  -translate-y-1/2">
                <div className="w-5 h-0.5 bg-zinc-300 translate-y-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
