import clsx from "clsx";

import { icons } from "./icons";

import type { SvgIconProps } from "@/types/icon.types";

const SvgIcon = ({
  name,

  size = 22,

  color = "currentColor",

  className,

  onClick,
}: SvgIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={clsx(
        "shrink-0 transition-all duration-300",

        onClick && "cursor-pointer",

        className,
      )}
    >
      <g fill={color} stroke={color}>
        {icons[name]}
      </g>
    </svg>
  );
};

export default SvgIcon;
