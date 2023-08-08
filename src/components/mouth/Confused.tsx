import * as React from "react";
import { AvatarPart } from "../../styles/avatar";
import { AvatarProps } from "../../interfaces/avatar";

const Confused = (props: AvatarProps) => {
  return (
    <AvatarPart
      width="360"
      height="360"
      style={props.style}
      viewBox="0 -60 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M151.08 154.15C150.48 154.15 149.95 153.72 149.85 153.1C149.74 152.42 150.2 151.78 150.88 151.66L172.79 148.05C173.47 147.94 174.11 148.4 174.23 149.08C174.35 149.76 173.88 150.4 173.2 150.52L151.29 154.13C151.22 154.14 151.15 154.15 151.09 154.15H151.08Z"
        fill="black"
      />
    </AvatarPart>
  );
};

export default Confused;
