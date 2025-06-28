import React from "react";

const GridIcon = (
  props: React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 22 22" fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M11 1V21M1 11H21M8 21H14C19 21 21 19 21 14V8C21 3 19 1 14 1H8C3 1 1 3 1 8V14C1 19 3 21 8 21Z" stroke="#666666" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default GridIcon;
