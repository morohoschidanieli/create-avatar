import { styled } from "styled-components";
import extractRgbFromHex from "utils/hexToRgb";

interface ColorProps {
  color: string;
  selected: Boolean;
}

export const ColorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 38px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`;

export const CenterColor = styled.div<ColorProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  transition: all 0.2s;
  box-shadow: ${(props) =>
    props.selected
      ? `inset 0px 0px 0px 4px rgba(${extractRgbFromHex(props.color)}, 0.4)`
      : "gray"};

  &:before {
    display: block;
    content: "";
    width: 18px;
    height: 18px;

    background-color: ${(props) => (props.color ? props.color : "gray")};
    border: 4px solid #1d2227;
    box-shadow: ${(props) =>
      props.selected ? "inset 0px 0px 0px 3px " + props.color : "gray"};
    border-radius: 50%;
  }
`;
