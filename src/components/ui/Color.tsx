import * as React from "react";
import { CenterColor, ColorWrapper } from "@styles/color";

export interface ColorProps {
  color: string;
  selected: Boolean;
}

const Color = ({ color, selected = false }: ColorProps) => {
  return (
    <ColorWrapper>
      <CenterColor color={color} selected={selected} />
    </ColorWrapper>
  );
};

export default Color;
