import { styled } from "styled-components";

export const CodeWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: red;
  height: calc(100% - 100px);
  width: calc(100% - 100px);
  z-index: 1;
`;
