import { styled } from "styled-components";

export const AvatarWrapper = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: white;
  height: 320px;
  width: 320px;
`;

export const AvatarLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const AvatarPart = styled.svg`
  position: absolute;
  left: 0;
`;
