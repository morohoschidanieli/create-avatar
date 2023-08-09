import { styled } from "styled-components";

interface SidebarAvatarPartProps {
  active: Boolean;
}

export const SidebarLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  width: 420px;
  padding: 20px;
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
  height: 70px;
  width: 20px;
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
  padding: 20px;
  color: white;
  flex-wrap: wrap;
`;

export const SidebarItemHeader = styled.h4`
  width: 100%;
`;

export const SidebarItemContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: calc(100% - 11px);
  flex-wrap: wrap;
`;

export const SidebarAvatarParts = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
`;

export const SidebarAvatarPart = styled.div<SidebarAvatarPartProps>`
  position: relative;
  background-color: ${(props) => (props.active ? "#44484c" : "#2c323a")};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 40px;
  height: 40px;
  margin: 4px;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;

  &:hover {
    background-color: #44484c;
  }
`;

export const SidebarItemColor = styled.h4`
  margin-bottom: 0;
`;

export const SidebarBodyColor = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
