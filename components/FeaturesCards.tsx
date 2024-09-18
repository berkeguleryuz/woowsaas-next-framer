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
        <div>
          <div>
            <Image
              src={"/pill.png"}
              alt="cube 3D"
              width={255}
              height={255}
              priority
            />
            <h3>Revolutinary Blockchain Dedectors</h3>
            <p>
              Find the best blockchain dedectors to protect your budget and keep
              your data safe.
            </p>
            <div className="flex">
              <button>Learn More</button>
              <ArrowRight className="" />
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
