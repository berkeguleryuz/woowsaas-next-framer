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
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
