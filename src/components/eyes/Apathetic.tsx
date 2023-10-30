import * as React from "react";
import { AvatarProps } from "@interfaces/avatar";
import { AvatarPart } from "@styles/avatar";

const Apathetic = (props: AvatarProps) => {
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
        d="M155 119.5H133C132 123 134 131.5 144.5 131.5C152.9 131.5 155 123.5 155 119.5Z"
        fill="white"
      />
      <path
        d="M192.229 119.5H170.229C169.229 123 171.229 131.5 181.729 131.5C190.129 131.5 192.229 123.5 192.229 119.5Z"
        fill="white"
      />
      <path
        d="M143.79 132.88C136.61 132.88 130.77 127.04 130.77 119.85C130.77 119.16 131.33 118.6 132.02 118.6H155.57C156.26 118.6 156.82 119.16 156.82 119.85C156.82 127.03 150.98 132.88 143.8 132.88H143.79ZM133.34 121.1C133.96 126.32 138.41 130.38 143.79 130.38C149.17 130.38 153.62 126.32 154.24 121.1H133.34Z"
        fill="black"
      />
      <path
        d="M150.02 120.65H137.23C137.23 124.27 140.17 127.21 143.79 127.21C147.41 127.21 150.35 124.27 150.35 120.65"
        fill="black"
      />
      <path
        d="M157.18 116.69H132.01C131.32 116.69 130.76 116.13 130.76 115.44C130.76 114.75 131.32 114.19 132.01 114.19H157.18C157.87 114.19 158.43 114.75 158.43 115.44C158.43 116.13 157.87 116.69 157.18 116.69Z"
        fill="black"
      />
      <path
        d="M180.49 132.88C173.31 132.88 167.46 127.04 167.46 119.85C167.46 119.16 168.02 118.6 168.71 118.6H192.26C192.95 118.6 193.51 119.16 193.51 119.85C193.51 127.03 187.67 132.88 180.49 132.88ZM170.04 121.1C170.66 126.32 175.11 130.38 180.49 130.38C185.87 130.38 190.32 126.32 190.94 121.1H170.04Z"
        fill="black"
      />
      <path
        d="M174.26 120.65H187.05C187.05 124.27 184.11 127.21 180.49 127.21C176.87 127.21 173.93 124.27 173.93 120.65"
        fill="black"
      />
      <path
        d="M192.26 116.69H167.09C166.4 116.69 165.84 116.13 165.84 115.44C165.84 114.75 166.4 114.19 167.09 114.19H192.26C192.95 114.19 193.51 114.75 193.51 115.44C193.51 116.13 192.95 116.69 192.26 116.69Z"
        fill="black"
      />
    </AvatarPart>
  );
};

export default Apathetic;
