import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import TextButton from "@/components/core/TextButton";
import Card from "@/components/core/Card";

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
              <Card key={title} color={color} className="max-w-xs md:max-w-md">
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
              </Card>
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
