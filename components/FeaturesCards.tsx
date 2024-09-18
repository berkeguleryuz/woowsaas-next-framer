import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const FeaturesCards = (props: Props) => {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="font-serif font-black text-4xl text-center max-w-lg mx-auto">
          Discover the future of blockchain with Clodron
        </h2>
        <div className="mt-36">
          <div className="z-0 relative p-8 max-w-xs group cursor-pointer">
            <div className="absolute size-16 rounded-xl bg-fuchsia-500  top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="absolute size-16 rounded-xl bg-fuchsia-500 group-hover:bg-fuchsia-400 top-1.5 right-1.5 -z-10"></div>
            <div className="absolute inset-0 bg-neutral-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>
            <div className="flex justify-center -mt-28">
              <div className="inline-flex relative">
                <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-neutral-950/70 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)] group-hover:bg-neutral-950/30 transition-all duration-300"></div>
                <Image
                  src={"/pill.png"}
                  alt="cube 3D"
                  width={255}
                  height={255}
                  priority
                  className="size-40 group-hover:-translate-y-6 transition-all duration-300"
                />
              </div>
            </div>
            <h3 className="font-serif font-black text-3xl mt-12">
              Revolutinary Blockchain Dedectors
            </h3>
            <p className="text-sm text-zinc-400 mt-4">
              Find the best blockchain dedectors to protect your budget and keep
              your data safe.
            </p>
            <div className="flex justify-between mt-3">
              <button className="text-sm font-sans font-extrabold tracking-wider text-fuchsia-500 uppercase">
                Learn More
              </button>
              <ArrowRight className="size-8 cursor-pointer text-zinc-500" />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex bg-neutral-950 infline-flex gap-4 p-2.5 rounded-full">
            {[...new Array(4)].fill(0).map((_, i) => (
              <div
                key={i}
                className="size-2.5 rounded-full bg-zinc-500 cursor-pointer"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCards;
