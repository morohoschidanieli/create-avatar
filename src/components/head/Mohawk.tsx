import * as React from "react";
import { AvatarPart } from "../../styles/avatar";
import { AvatarProps } from "../../interfaces/avatar";

const Mohawk = (props: AvatarProps) => {
  return (
    <AvatarPart
      style={props.style}
      width="360"
      height="360"
      viewBox="0 -60 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_5_4785)">
        <path
          d="M149.05 86.33C149.05 86.33 162.79 92.23 174.73 86.33C186.67 80.43 183.44 72.95 186.1 64.29C188.76 55.63 175.55 59.57 172.25 61.93C168.95 64.29 169.25 55.25 171.05 51.5C172.85 47.75 159.04 51.3 154.54 58.78C150.04 66.26 144.68 57.6 140.45 59.17C136.22 60.74 139.61 83.97 149.05 86.33Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_5_4785">
          <rect
            width="212.04"
            height="220.27"
            fill="white"
            transform="translate(54 50)"
          />
        </clipPath>
      </defs>
    </AvatarPart>
  );
};

export default Mohawk;
