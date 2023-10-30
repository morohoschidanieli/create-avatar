import * as React from "react";
import { AvatarPart } from "@styles/avatar";
import { SkinProps } from "@interfaces/avatar";

const Base = (props: SkinProps) => {
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
        d="M213.73 127.56C213.79 127.97 213.82 128.38 213.82 128.8C213.82 134.46 208.78 139.05 202.57 139.05C201.82 139.05 201.08 138.96 200.36 138.83V128.51C200.48 128.46 200.6 128.4 200.7 128.31C200.77 128.26 201.36 127.78 202.33 127.38C202.27 129.17 202.99 131.41 205.74 133.12C205.95 133.24 206.17 133.3 206.4 133.3C206.82 133.3 207.23 133.09 207.46 132.71C207.83 132.12 207.64 131.35 207.06 130.99C204.7 129.53 204.71 127.76 204.91 126.84C206.48 126.81 208.39 127.3 210.47 128.97C210.7 129.16 210.98 129.25 211.25 129.25C211.62 129.25 211.98 129.09 212.23 128.78C212.48 128.47 212.56 128.08 212.48 127.73L213.73 127.56Z"
        fill={props.fillColor}
      />
      <path
        d="M213.73 127.56L212.48 127.73C212.42 127.46 212.27 127.21 212.04 127.02C207.36 123.26 202.9 124.13 200.36 125.54V118.78C201.09 118.64 201.82 118.55 202.57 118.55C208.32 118.55 213.07 122.49 213.73 127.56Z"
        fill={props.fillColor}
      />
      <path
        d="M202.57 116.05C210.15 116.05 216.32 121.77 216.32 128.8C216.32 135.83 210.15 141.55 202.57 141.55C201.83 141.55 201.09 141.49 200.36 141.38V142.3C200.36 153.09 195.86 162.84 188.65 169.8H188.81V194.48C188.81 208 177.81 219 164.29 219H158.83C145.31 219 134.31 208 134.31 194.48V168.56C133.63 167.84 132.97 167.11 132.35 166.34C126.87 159.56 123.86 151.03 123.86 142.3V141.37C123.1 141.49 122.34 141.55 121.57 141.55C113.99 141.55 107.82 135.83 107.82 128.8C107.82 121.77 113.99 116.05 121.57 116.05C122.34 116.05 123.1 116.12 123.86 116.24V106.3C123.86 85.21 141.02 68.05 162.11 68.05C183.2 68.05 200.36 85.21 200.36 106.3V116.22C201.09 116.12 201.83 116.05 202.57 116.05ZM213.82 128.8C213.82 128.38 213.79 127.97 213.73 127.56C213.07 122.49 208.32 118.55 202.57 118.55C201.82 118.55 201.09 118.64 200.36 118.78V125.54C202.9 124.13 207.36 123.26 212.04 127.02C212.27 127.21 212.42 127.46 212.48 127.73C212.56 128.08 212.48 128.47 212.23 128.78C211.98 129.09 211.62 129.25 211.25 129.25C210.98 129.25 210.7 129.16 210.47 128.97C208.39 127.3 206.48 126.81 204.91 126.84C204.71 127.76 204.7 129.53 207.06 130.99C207.64 131.35 207.83 132.12 207.46 132.71C207.23 133.09 206.82 133.3 206.4 133.3C206.17 133.3 205.95 133.24 205.74 133.12C202.99 131.41 202.27 129.17 202.33 127.38C201.36 127.78 200.77 128.26 200.7 128.31C200.6 128.4 200.48 128.46 200.36 128.51V138.83C201.08 138.96 201.82 139.05 202.57 139.05C208.78 139.05 213.82 134.46 213.82 128.8ZM197.86 142.3V106.3C197.86 86.59 181.82 70.55 162.11 70.55C142.4 70.55 126.36 86.59 126.36 106.3V142.3C126.36 150.46 129.17 158.43 134.29 164.76C141.12 173.21 151.26 178.05 162.11 178.05C181.82 178.05 197.86 162.02 197.86 142.3ZM186.31 194.48V171.9C179.71 177.3 171.28 180.55 162.11 180.55C152.94 180.55 143.74 177.13 136.81 171V194.48C136.81 206.62 146.69 216.5 158.83 216.5H164.29C176.43 216.5 186.31 206.62 186.31 194.48ZM123.86 138.82V128.01C123.42 127.76 122.71 127.41 121.8 127.15C121.94 128.98 121.28 131.34 118.4 133.12C118.2 133.24 117.97 133.3 117.75 133.3C117.33 133.3 116.92 133.09 116.68 132.71C116.32 132.12 116.5 131.35 117.09 130.99C119.47 129.52 119.44 127.72 119.22 126.81C117.57 126.85 115.65 127.38 113.67 128.97C113.44 129.16 113.17 129.25 112.89 129.25C112.53 129.25 112.16 129.09 111.92 128.78C111.67 128.47 111.59 128.08 111.67 127.73C111.73 127.46 111.88 127.21 112.11 127.02C116.47 123.51 120.99 124.02 123.86 125.22V118.79C123.11 118.65 122.34 118.55 121.57 118.55C115.83 118.55 111.08 122.49 110.41 127.56C110.35 127.97 110.32 128.38 110.32 128.8C110.32 134.46 115.37 139.05 121.57 139.05C122.35 139.05 123.11 138.96 123.86 138.82Z"
        fill="black"
      />
      <path
        d="M197.86 106.3V142.3C197.86 162.02 181.82 178.05 162.11 178.05C151.26 178.05 141.12 173.21 134.29 164.76C129.17 158.43 126.36 150.46 126.36 142.3V106.3C126.36 86.59 142.39 70.55 162.11 70.55C181.83 70.55 197.86 86.59 197.86 106.3Z"
        fill={props.fillColor}
      />
      <path
        d="M186.31 171.9V194.48C186.31 206.62 176.43 216.5 164.29 216.5H158.83C146.69 216.5 136.81 206.62 136.81 194.48V171C143.74 177.13 152.67 180.55 162.11 180.55C171.55 180.55 179.71 177.3 186.31 171.9Z"
        fill={props.fillColor}
      />
      <path
        d="M123.86 128.01V138.82C123.11 138.96 122.35 139.05 121.57 139.05C115.37 139.05 110.32 134.46 110.32 128.8C110.32 128.38 110.35 127.97 110.41 127.56L111.67 127.73C111.59 128.08 111.67 128.47 111.92 128.78C112.16 129.09 112.53 129.25 112.89 129.25C113.17 129.25 113.44 129.16 113.67 128.97C115.65 127.38 117.57 126.85 119.22 126.81C119.44 127.72 119.47 129.52 117.09 130.99C116.5 131.35 116.32 132.12 116.68 132.71C116.92 133.09 117.33 133.3 117.75 133.3C117.97 133.3 118.2 133.24 118.4 133.12C121.28 131.34 121.94 128.98 121.8 127.15C122.71 127.41 123.42 127.76 123.86 128.01Z"
        fill={props.fillColor}
      />
      <path
        d="M123.86 118.79V125.22C120.99 124.02 116.47 123.51 112.11 127.02C111.88 127.21 111.73 127.46 111.67 127.73L110.41 127.56C111.08 122.49 115.83 118.55 121.57 118.55C122.34 118.55 123.11 118.65 123.86 118.79Z"
        fill={props.fillColor}
      />
      <g opacity="0.6">
        <path
          d="M179.86 175.56C179.56 175.74 179.24 175.91 178.88 176.04C172.05 178.57 162.64 180.24 155.39 178.86C148.95 177.64 140.24 174 135.61 169.04L136.66 192.03C136.66 192.03 164.75 192.65 183.47 174.07C182.33 174.68 181.11 175.17 179.85 175.56H179.86Z"
          fill="black"
        />
      </g>
      <g clipPath="url(#clip0_11_8807)">
        <path
          d="M161.78 143.58C161.09 143.58 160.53 143.02 160.53 142.33V115.25C160.53 114.56 161.09 114 161.78 114C162.47 114 163.03 114.56 163.03 115.25V142.33C163.03 143.02 162.47 143.58 161.78 143.58Z"
          fill="black"
        />
        <g opacity="0.1">
          <path
            d="M158 142.24L160.53 115.25L161.78 143.57H159.22C158.5 143.57 157.93 142.95 158 142.23V142.24Z"
            fill="black"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_11_8807">
          <rect
            width="5.03"
            height="29.58"
            fill="white"
            transform="translate(158 114)"
          />
        </clipPath>
      </defs>
    </AvatarPart>
  );
};

export default Base;
