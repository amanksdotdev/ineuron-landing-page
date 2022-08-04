import React, { ReactNode } from "react";

export const Container = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <div className={`${className} container mx-auto w-11/12`}>{children}</div>
  );
};
