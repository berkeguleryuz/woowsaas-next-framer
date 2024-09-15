import Image from "next/image";
import React from "react";

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
            <button className="bg-fuchsia-500/20 px-4 py-2 font-extrabold uppercase text-sm tracking-wide relative border-2 border-fuchsia-500 rounded-bl-[45px] rounded-tr-[45px]">
              {/* <div className="absolute inset-0 outline outline-2 -outline-offset-2 outline- outline-fuchsia-500 [mask-image:linear-gradient(225deg,transparent,transparent_10px,black_10px)]"></div> */}
              {/* <svg
                width="24"
                className="absolute top-0 right-0 text-fuchsia-500"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 1H12.2667L23 11.7333V24"
                  stroke="currentColor"
                  stroke-width="2"></path>
              </svg> */}
              <span className="leading-6">Get Started</span>
            </button>
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
