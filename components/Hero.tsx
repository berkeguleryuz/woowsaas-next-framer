import React from "react";
import CutCurnerButton from "@/components/core/CutCurnerButton";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="py-24 md:py-52 overflow-x-clip">
      <div className="container mx-auto">
        <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider">
          Introducing Clodron
        </p>
        <h1 className="font-serif text-5xl text-center mt-4">
          The future of the blockchain is here
        </h1>
        <p className="text-center text-xl mt-6 md:text-2xl text-zinc-400 max-w-xl mx-auto">
          Clodron new project has been launched. We are creating honeypot
          dedectors.
        </p>
        <div className="flex justify-center mt-10">
          <CutCurnerButton className="">Get Started</CutCurnerButton>
        </div>
        <div className="flex justify-center">
          <div className="inline-flex mt-24 relative z-0 ">
            <Image
              src={"/icosahedron.png"}
              alt="icosahedron"
              width={500}
              height={500}
              className="absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-[10%] brightness-[4%] hue-rotate-[240deg]"
            />
            <Image
              src={"/icosahedron.png"}
              alt="icosahedron"
              width={300}
              height={300}
              className="w-[300px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
