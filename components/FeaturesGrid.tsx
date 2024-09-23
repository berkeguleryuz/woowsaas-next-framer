import React from "react";
import CutCurnerButton from "@/components/core/CutCurnerButton";
import TextButton from "@/components/core/TextButton";
import Image from "next/image";

type Props = {};

const listItems = [
  "Experience unparallelled security with Clodron",
  "Fully benefit from scalable networks",
  "Unlock the potential of the future of blockchain",
];

const FeaturesGrid = (props: Props) => {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container mx-auto">
        <div className="flex flex-col gap-56 md:gap-48 lg:gap-80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2">
              <h2 className="font-serif font-black text-4xl md:text-5xl lg:text-6xl">
                Building the future of blockchain
              </h2>
              <p className="text-xl lg:text-2xl text-zinc-400 mt-8">
                Clodron provides different type of bots and solutions for your
                next generation dApp or smart contract.
              </p>
              <ul className="flex flex-col gap-8 mt-12">
                {listItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="inline-flex flex-shrink-0 justify-center items-center size-8 outline outline-4 -outline-offset-4 rounded-full outline-fuchsia-500/10">
                      <div className="size-1.5 bg-fuchsia-500 rounded-full"></div>
                    </div>
                    <span className="text-xl font-bold">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-8 mt-12">
                <CutCurnerButton>Get Started</CutCurnerButton>
                <TextButton>Learn More</TextButton>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative inline-flex z-0">
                <Image
                  src={"/torus-knot.png"}
                  alt="cube 3D"
                  width={500}
                  className="size-96 max-w-none"
                  height={500}
                />
                <Image
                  src={"/hemisphere.png"}
                  alt="3D"
                  width={500}
                  height={500}
                  className="absolute size-96 top-3/4 -z-10 scale-x-[-1]"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 right-0">
            <div className="relative hidden md:block">
              <div className="absolute right-0  ">
                <Image
                  src={"/cone.png"}
                  alt="cone"
                  width={555}
                  height={555}
                  className="size-96 max-w-none rotate-12"
                />
                <Image
                  src={"/hemisphere.png"}
                  alt="hemisphere"
                  width={555}
                  height={555}
                  className="size-96 absolute top-3/4 -z-10 right-0 "
                />
              </div>
            </div>
            <div className="col-span-2">
              <h2 className="font-serif font-black text-4xl md:text-5xl lg:text-6xl">
                Clodron leading the way.
              </h2>
              <div className="flex flex-col text-xl lg:text-2xl text-zinc-400 mt-6 gap-6">
                <p>
                  Dedicated to building the future of Web3 applications by
                  delivering the necessary solutions.
                </p>
                <p>
                  Leading to the the future of Web3. Web3 represents the next
                  era of the internet, offering a more secure, transparent, and
                  user-centric experience through decentralized platforms and
                  blockchain technology.
                </p>
              </div>
              <div className="flex gap-8 mt-12">
                <CutCurnerButton>Get Started</CutCurnerButton>
                <TextButton>Learn More</TextButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
