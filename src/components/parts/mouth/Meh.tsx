import * as React from "react";
import { AvatarPart } from "@styles/avatar";
import { AvatarProps } from "@interfaces/avatar";

const Meh = (props: AvatarProps) => {
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
        d="M169.1 151.42C168.91 151.42 168.72 151.38 168.54 151.29C168.46 151.25 161.82 148 155.92 151.27C155.32 151.6 154.56 151.39 154.22 150.78C153.89 150.18 154.1 149.42 154.71 149.08C161.79 145.16 169.35 148.9 169.67 149.06C170.29 149.37 170.53 150.12 170.22 150.74C170 151.17 169.56 151.43 169.1 151.43V151.42Z"
        fill="black"
      />
    </AvatarPart>
  );
};

export default Meh;
