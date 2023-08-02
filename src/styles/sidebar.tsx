import { styled } from "styled-components";

export const SidebarLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  width: 520px;
  padding: 30px;
  max-height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;

  &:hover {
    overflow-y: scroll;
  }
`;

export const ToggleSidebarLayout = styled.div`
  display: flex;
  height: 100%;
  width: 30px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const ToggleSidebarButton = styled.button`
  height: 100px;
  width: 24px;
  border: 0px;
  cursor: pointer;
  -webkit-border-top-left-radius: 20px;
  -webkit-border-bottom-left-radius: 20px;
  -moz-border-radius-topleft: 20px;
  -moz-border-radius-bottomleft: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const SidebarItemLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 30px;
  color: white;
  flex-wrap: wrap;
`;

export const SidebarItemHeader = styled.h3`
  width: 100%;
`;

export const SidebarItemContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 20px 0;
  flex-wrap: wrap;
`;
