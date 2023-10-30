import * as React from "react";
import { AvatarPart } from "@styles/avatar";
import { AvatarProps } from "@interfaces/avatar";

const LongHair = (props: AvatarProps) => {
  return (
    <AvatarPart
      style={props.style}
      width="360"
      height="360"
      viewBox="0 -60 320 320"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M159.73 74.93C164.05 81.9 177.81 102.12 199.07 115L199.14 114.96L199.1 118.01C199.1 118.01 199.83 116.48 205.98 116.71C207.02 116.75 205.89 114.62 205.89 113.55C205.89 98.59 202.82 86.7 202.82 86.7C187.98 50.96 161.49 59.11 155.48 61.52C154.71 61.83 153.9 61.97 153.07 61.92C149.44 61.7 137.79 62.54 123.91 79.44C111.84 94.14 115.31 105.77 115.79 118.01C115.79 118.01 118.07 116.17 125.1 116.71L125.59 105.18L126.29 105.23L140.38 106.33C141.15 106.39 141.83 105.83 141.91 105.07C142.44 100.29 146.93 80.31 155.66 74.05C153.13 78.28 147.1 90.05 150.14 102.06C150.28 102.63 150.79 103 151.35 103C151.45 103 151.55 102.99 151.66 102.96C152.33 102.79 152.73 102.11 152.57 101.44C150.06 91.52 154.47 81.43 157.07 76.67C156.85 82.1 158.01 96.87 175.23 107.78C175.44 107.91 175.67 107.97 175.9 107.97C176.31 107.97 176.72 107.76 176.96 107.39C177.33 106.81 177.16 106.03 176.57 105.67C157.19 93.39 159.52 76.24 159.74 74.94L159.73 74.93Z"
        fill="black"
      />
      <path
        d="M220.39 189.87C215.1 180.08 210.7 137.71 210.7 137.71C204.99 138.63 199.58 139.37 199.58 139.37C200.05 158.75 187.07 169.2 187.07 169.2L187.84 186.85C184.94 197.1 204.99 205.14 204.99 205.14L225.22 212.59C225.22 212.59 225.68 199.67 220.39 189.87Z"
        fill="black"
      />
      <path
        d="M124.31 139.37C124.31 139.37 118.9 138.63 113.19 137.71C113.19 137.71 108.79 180.07 103.5 189.87C98.21 199.67 98.67 212.59 98.67 212.59L118.9 205.14C118.9 205.14 136.82 197.77 136.05 186.85L136.82 169.2C136.82 169.2 123.84 158.75 124.31 139.37Z"
        fill="black"
      />
    </AvatarPart>
  );
};

export default LongHair;
