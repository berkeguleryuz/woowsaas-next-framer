import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { twMerge } from "tw-merge";

type Props = {};

const cardData = [
  {
    image: "/pill.png",
    title: "Revolutinary Blockchain Dedectors",
    description:
      "Find the best blockchain dedectors to protect your data safe. Find the best solutions for your needs.",
    color: "fuchsia",
  },
  {
    image: "/cuboid.png",
    title: "Decentralized Blockchain Data Protection",
    description:
      "Empower your dApp with decentralized data protections. Find the best solutions for your needs.",
    color: "lime",
  },
  {
    image: "/cone.png",
    title: "Futuristic Smart Contracts Solutions",
    description:
      "Create the future of smart contracts with Clodron. Find the best solutions for your needs.",
    color: "orange",
  },
  {
    image: "/icosahedron.png",
    title: "Blockchain Solutions & Contract Services",
    description:
      "Imagine best tools for your needs. Find the best solutions for your needs.",
    color: "blue",
  },
];

const FeaturesCards = (props: Props) => {
  return (
    <section className="py-24 overflow-x-clip md:-mt-28">
      <div className="container mx-auto">
        <h2 className="font-serif font-black text-4xl text-center max-w-lg md:text-5xl lg:text-6xl mx-auto">
          Discover the future of blockchain with Clodron
        </h2>
        <div className="mt-36 lg:mt-48 flex">
          <div className="flex flex-none gap-8 ">
            {cardData.map(({ image, title, description, color }) => (
              <div
                className="z-0 relative p-8 md:p-10 max-w-xs md:max-w-md group cursor-pointer"
                key={title}>
                <div
                  className={clsx(
                    "absolute size-16 rounded-xl bg-fuchsia-500 top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300",
                    color === "lime" && "bg-lime-500",
                    color === "blue" && "bg-blue-500",
                    color === "orange" && "bg-orange-500",
                  )}></div>
                <div
                  className={clsx(
                    `absolute size-16 rounded-xl bg-fuchsia-500 group-hover:bg-fuchsia-400 top-1.5 right-1.5 -z-10`,
                    color === "lime" && "bg-lime-500 group-hover:bg-lime-400",
                    color === "blue" && "bg-blue-500 group-hover:bg-blue-400",
                    color === "orange" &&
                      "bg-orange-500 group-hover:bg-orange-400",
                  )}></div>
                <div className="absolute inset-0 bg-neutral-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>
                <div className="flex justify-center -mt-28">
                  <div className="inline-flex relative">
                    <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-neutral-950/70 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)] group-hover:bg-neutral-950/30 transition-all duration-300"></div>
                    <Image
                      src={image}
                      alt={title}
                      width={255}
                      height={255}
                      priority
                      className="size-40 group-hover:-translate-y-6 transition-all duration-300"
                    />
                  </div>
                </div>
                <h3 className="font-serif font-black text-3xl mt-12">
                  {title}
                </h3>
                <p className="text-sm text-zinc-400 mt-4">{description}</p>
                <div className="flex justify-between mt-3">
                  <button
                    className={clsx(
                      "text-sm font-sans font-extrabold tracking-wider text-fuchsia-500 uppercase",
                      color === "lime" && "text-lime-500",
                      color === "blue" && "text-blue-500",
                      color === "orange" && "text-orange-500",
                    )}>
                    Learn More
                  </button>
                  <ArrowRight className="size-8 cursor-pointer text-zinc-500 group-hover:text-zinc-300 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="flex bg-neutral-950 infline-flex gap-4 p-2.5 rounded-full">
            {cardData.map(({ title }) => (
              <div
                key={title}
                className="size-2.5 rounded-full bg-zinc-500 cursor-pointer"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCards;
