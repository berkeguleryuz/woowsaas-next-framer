import clsx from "clsx";
import React, { ComponentPropsWithoutRef } from "react";

type Props = {};

const Circle = (props: ComponentPropsWithoutRef<"div">) => {
  const { className, children } = props;
  return (
    <div
      className={clsx(
        "bg-neutral-900 size-[240px] inline-flex items-center justify-center rounded-full outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10",
        className,
      )}>
      {children}
    </div>
  );
};

export default Circle;
