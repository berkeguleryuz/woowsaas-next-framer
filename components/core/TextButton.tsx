import clsx from "clsx";
import React, { ComponentPropsWithoutRef } from "react";

type Props = {};

const TextButton = (
  props: ComponentPropsWithoutRef<"button"> & { color?: string },
) => {
  const { className, children, color } = props;
  return (
    <button
      className={clsx(
        "text-sm font-sans font-extrabold tracking-wider text-fuchsia-500 uppercase",
        color === "lime" && "text-lime-500",
        color === "blue" && "text-blue-500",
        color === "orange" && "text-orange-500",
      )}>
      {children}
    </button>
  );
};

export default TextButton;
