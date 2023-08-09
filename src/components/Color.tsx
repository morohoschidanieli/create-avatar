/* React */
import * as React from "react";

/* Styles */
import { CenterColor, ColorWrapper } from "../styles/color";

/* Props interface */
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
