import * as React from "react";
import { AvatarPart } from "@styles/avatar";
import { AvatarProps } from "@interfaces/avatar";
import { HEAD_DEFAULT_COLOR } from "@constants";

const Buckets = (props: AvatarProps) => {
  return (
    <AvatarPart
      style={props.style}
      width="360"
      height="360"
      viewBox="0 -60 320 320"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M150.92 53.25H172.58C187.84 53.25 200.22 65.64 200.22 80.89V99.77H124.59C123.86 99.77 123.27 99.18 123.27 98.45V80.89C123.27 65.63 135.66 53.25 150.91 53.25H150.92Z"
        fill={props.fillColor || HEAD_DEFAULT_COLOR}
      />
      <path
        d="M201.48 101.02H124.6C123.19 101.02 122.03 99.87 122.03 98.45V80.89C122.03 64.96 134.99 52 150.92 52H172.58C188.51 52 201.47 64.96 201.47 80.89V101.02H201.48ZM150.92 54.5C136.37 54.5 124.53 66.34 124.53 80.89V98.45L198.98 98.52V80.89C198.98 66.34 187.14 54.5 172.59 54.5H150.93H150.92Z"
        fill="black"
      />
      <path
        d="M107.58 111.3C119.81 113.49 170.1 121.33 214.17 111.35C215.24 111.11 215.61 109.77 214.84 109L201.12 95.28C200.82 94.98 200.4 94.83 199.98 94.88C193.78 95.57 145.51 100.67 123.26 94.99C122.81 94.87 122.34 94.99 121.99 95.3L106.89 108.89C106.03 109.67 106.43 111.1 107.58 111.3Z"
        fill={props.fillColor || HEAD_DEFAULT_COLOR}
      />
      <path
        d="M164.81 117.58C138.55 117.58 116.11 114.1 107.35 112.54C106.35 112.36 105.55 111.64 105.27 110.66C104.99 109.68 105.29 108.65 106.05 107.97L121.15 94.38C121.81 93.79 122.71 93.57 123.56 93.79C145.67 99.43 194.36 94.25 199.84 93.65C200.64 93.56 201.43 93.84 202 94.41L215.72 108.13C216.4 108.81 216.66 109.82 216.39 110.75C216.12 111.67 215.38 112.38 214.44 112.59C197.96 116.32 180.68 117.59 164.81 117.59V117.58ZM107.79 110.08C121.73 112.57 170.59 119.95 213.89 110.14C213.91 110.14 213.97 110.12 213.99 110.04C214.02 109.95 213.97 109.9 213.95 109.89L200.23 96.17C200.23 96.17 200.17 96.13 200.12 96.13C194.59 96.74 145.49 101.96 122.95 96.21C122.9 96.2 122.86 96.21 122.83 96.24L107.73 109.83C107.73 109.83 107.66 109.89 107.69 109.98C107.71 110.07 107.78 110.08 107.8 110.08H107.79Z"
        fill="black"
      />
      <path
        d="M117.71 99.15C117.71 99.15 149.28 108.4 205.13 99.15H117.71Z"
        fill={props.fillColor || HEAD_DEFAULT_COLOR}
      />
      <path
        d="M157.52 104.5C150.83 104.5 145.09 104.23 140.38 103.86C125.55 102.71 117.69 100.44 117.36 100.35L118.06 97.95C118.14 97.97 126.07 100.25 140.68 101.38C154.16 102.42 176.26 102.67 204.93 97.92L205.34 100.39C186.36 103.53 170.23 104.51 157.52 104.51V104.5Z"
        fill="black"
      />
      <path
        d="M111.62 104.63C111.62 104.63 155.41 116.15 210.89 104.63H111.62Z"
        fill={props.fillColor || HEAD_DEFAULT_COLOR}
      />
      <path
        d="M160.67 110.96C131.29 110.96 111.6 105.91 111.3 105.84L111.94 103.42C112.38 103.53 156.11 114.73 210.64 103.41L211.15 105.86C192.7 109.69 175.46 110.97 160.68 110.97L160.67 110.96Z"
        fill="black"
      />
      <path
        d="M155.7 89.07V78.67L165.97 88.95V78.14"
        fill={props.fillColor || HEAD_DEFAULT_COLOR}
      />
      <path
        d="M155.7 91.08C154.6 91.08 153.7 90.18 153.7 89.08V78.68C153.7 77.87 154.19 77.14 154.93 76.83C155.68 76.52 156.54 76.69 157.11 77.26L163.97 84.12V78.14C163.97 77.04 164.87 76.14 165.97 76.14C167.07 76.14 167.97 77.04 167.97 78.14V88.95C167.97 89.76 167.48 90.49 166.74 90.8C165.99 91.11 165.13 90.94 164.56 90.37L157.7 83.51V89.08C157.7 90.18 156.8 91.08 155.7 91.08Z"
        fill="black"
      />
    </AvatarPart>
  );
};

export default Buckets;
