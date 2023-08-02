import * as React from "react";
import { AvatarPart } from "../../styles/avatar";

const Happt = () => {
  return (
    <AvatarPart
      width="320"
      height="320"
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_5_4801)">
        <path
          d="M162.97 153.34C158.68 153.34 155.34 151.68 155.13 151.58C154.51 151.27 154.27 150.52 154.58 149.9C154.89 149.28 155.64 149.04 156.26 149.35C156.34 149.39 162.98 152.64 168.88 149.37C169.48 149.04 170.24 149.25 170.58 149.86C170.91 150.46 170.7 151.22 170.09 151.56C167.67 152.9 165.2 153.35 162.97 153.35V153.34Z"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_5_4801"
          x="-4"
          y="0"
          width="328"
          height="328"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_5_4801"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_5_4801"
            result="shape"
          />
        </filter>
      </defs>
    </AvatarPart>
  );
};

export default Happt;
