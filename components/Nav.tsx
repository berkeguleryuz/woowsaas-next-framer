import Image from "next/image";
import React from "react";

type Props = {};

const Nav = (props: Props) => {
  return (
    <header>
      <div className="container">
        <div className="flex justify-between">
          <div>
            <Image src="/logo.svg" alt="logo" width={100} height={100} />
          </div>
          <div>
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
