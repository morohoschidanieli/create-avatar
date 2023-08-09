import { styled } from "styled-components";

interface AvatarWrapperProps {
  wrappershape: "circle" | "rounded" | "square";
  backgroundcolor:
    | "#FF8F7A"
    | "#8AFDE4"
    | "#FFEA8F"
    | "#95A9FF"
    | "#FF9DCA"
    | "#8AFE7A"
    | "#FF9DE5"
    | "#8DF4FF"
    | "#FFB57A"
    | "#95A2FF"
    | "#F491FF"
    | "#8AFF97"
    | "#FF9FAB"
    | "#8AFFC9"
    | "#E491FF"
    | "#8AFF56"
    | "#FF9FD9";
}

export const AvatarWrapper = styled.div<AvatarWrapperProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => {
    switch (props.wrappershape) {
      case "circle":
        return "50%";
      case "rounded":
        return "30px";
      case "square":
      default:
        return "0";
    }
  }};
  background-color: ${(props) => props.backgroundcolor};
  height: 360px;
  width: 360px;
  overflow: hidden;
`;

export const AvatarLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const AvatarPart = styled.svg`
  position: absolute;
`;

export const AvatarActions = styled.div`
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  margin: 50px 0;
  padding: 10px;
  color: white;
  background-color: rgba(164, 178, 193, 0.15);
`;
