import * as React from "react";
import { AvatarPart } from "../../styles/avatar";
import { AvatarProps } from "../../interfaces/avatar";

const ApatheticMouth = (props: AvatarProps) => {
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
        d="M172.99 153.12H151.08C150.39 153.12 149.83 152.56 149.83 151.87C149.83 151.18 150.39 150.62 151.08 150.62H172.99C173.68 150.62 174.24 151.18 174.24 151.87C174.24 152.56 173.68 153.12 172.99 153.12Z"
        fill="black"
      />
    </AvatarPart>
  );
};

export default ApatheticMouth;
