import React, { ComponentPropsWithoutRef } from "react";
import TextButton from "@/components/core/TextButton";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

type Props = {};

const Card = (
  props: ComponentPropsWithoutRef<"div"> & {
    color?: string;
    buttonText?: string;
  },
) => {
  const { color, children, className, buttonText } = props;
  return (
    <div
      className={clsx(
        "z-0 relative p-8 md:p-10 group cursor-pointer",
        className,
      )}>
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
          color === "orange" && "bg-orange-500 group-hover:bg-orange-400",
        )}></div>
      <div className="absolute inset-0 bg-neutral-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>
      <div>{children}</div>
      <div className="flex justify-between mt-3">
        <TextButton color={color}>{buttonText || "Learn More"}</TextButton>
        <ArrowRight className="size-8 cursor-pointer text-zinc-500 group-hover:text-zinc-300 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
      </div>
    </div>
  );
};

export default Card;
