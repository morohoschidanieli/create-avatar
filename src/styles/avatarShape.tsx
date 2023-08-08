import { styled } from "styled-components";

export interface BaseShapeProps {
  selected: boolean;
}

const BaseShape = styled.div<BaseShapeProps>`
  height: 24px;
  width: 24px;
  background-color: ${(props) => (props.selected ? "#303961" : "gray")};
  margin-right: 16px;
  cursor: pointer;
  transition: all 0.4s;
`;

export const Square = styled(BaseShape)``;

export const Circle = styled(BaseShape)`
  border-radius: 50%;
`;

export const Rounded = styled(BaseShape)`
  border-radius: 30%;
`;
