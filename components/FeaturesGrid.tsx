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
    <section className="py-24">
      <div className="container mx-auto">
        <div className="flex flex-col gap-56">
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <h2 className="font-serif font-black text-4xl">
                Building the future of blockchain
              </h2>
              <p className="text-xl text-zinc-400 mt-8">
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
            <div>
              <Image src={"/torus-knot.png"} alt="cube 3D" width={500} height={500} />
            </div>
          </div>
          <div>
            <h2 className="font-serif font-black text-4xl">
              Clodron leading the way.
            </h2>
            <div className="flex flex-col text-xl text-zinc-400 mt-6 gap-6">
              <p>
                Dedicated to building the future of Web3 applications by
                delivering the necessary solutions.
              </p>
              <p>
                Leading to the the future of Web3. Web3 represents the next era
                of the internet, offering a more secure, transparent, and
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
    </section>
  );
};

export default FeaturesGrid;
