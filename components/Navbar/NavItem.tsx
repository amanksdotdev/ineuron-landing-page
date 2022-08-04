import React, { MouseEventHandler, ReactNode } from "react";
import { primary } from "../../common/colors";

export const NavItem = ({
  className = "",
  onMouseEnter,
  onMouseLeave,
  children,
}: {
  className?: string;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  children?: ReactNode;
}) => {
  return (
    <li
      className={`cursor-pointer ${className} hover:text-[#3110e5] font-medium list-none`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </li>
  );
};
