import React from "react";
import CutCurnerButton from "@/components/core/CutCurnerButton";
import Image from "next/image";
import Hexagon from "@/components/core/Hexagon";
import Circle from "@/components/core/Circle";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="py-24 md:py-52 overflow-x-clip">
      <div className="container mx-auto">
        <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider">
          Introducing Clodron
        </p>
        <h1 className="font-serif lg:text-7xl text-5xl text-center mt-4 max-w-3xl mx-auto">
          The future of the blockchain is here
        </h1>
        <p className="text-center text-xl mt-6 md:text-2xl text-zinc-400 max-w-xl mx-auto">
          Clodron new project has been launched. We are creating honeypot
          dedectors.
        </p>
        <div className="flex justify-center mt-10">
          <CutCurnerButton className="">Get Started</CutCurnerButton>
        </div>
        <div className="flex justify-center mt-24">
          <div className="inline-flex  relative z-0 ">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1100px]" />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1800px]" />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute left-[200px] -top-[900px]">
                <Image
                  src={"/cube.png"}
                  alt="cube 3D"
                  width={500}
                  height={500}
                  className="size-[140px]"
                />
              </Circle>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute left-[200px] top-[270px]">
                <Image
                  src={"/cuboid.png"}
                  alt="cuboid 3D"
                  width={500}
                  height={500}
                  className="size-[140px]"
                />
              </Circle>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute -left-[600px] -top-[80px] ">
                <Image
                  src={"/torus.png"}
                  alt="Torus 3D"
                  width={500}
                  height={500}
                  className="size-[140px]"
                />
              </Circle>
            </div>
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
              className="w-[500px]"
              priority
            />
          </div>
        </div>
        <div className="flex justify-center flex-col items-center mt-40 md:mt-80 gap-4">
          <div className="h-10 w-5 outline outline-[6px] outline-fuchsia-500/10 inline-flex justify-center pt-2 rounded-full">
            <div className="h-3 w-1 bg-fuchsia-500 rounded-full"></div>
          </div>
          <p className="uppercase text-zinc-500 font-extrabold tracking-wider">
            Scroll to learn more
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
