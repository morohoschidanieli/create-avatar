import { breakpoints } from "@constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

interface SidebarAvatarPartProps {
  active: Boolean;
}

export const SidebarWrapper = styled.aside`
  width: auto;
  display: flex;

  @media screen and (max-width: ${breakpoints.mobile}) {
    position: absolute;
    right: 0;
    height: 100%;
    width: auto;
  }
`;

export const SidebarLayout = styled.div(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  width: 420px;
  padding: 20px;
  max-height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;

  &:hover {
    overflow-y: scroll;
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    width: 310px;
    background-color: ${theme.color.sidebarBackgroundColorMobile};
    overflow-y: scroll;
  }
`
);

export const ToggleSidebarLayout = styled.div`
  display: flex;
  height: 100%;
  width: 20px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const ToggleSidebarButton = styled.button(
  ({ theme }) => `
  height: 70px;
  width: 20px;
  border: 0px;
  cursor: pointer;
  background-color:${theme.color.sidebarButtonColor};
  -webkit-border-top-left-radius: 20px;
  -webkit-border-bottom-left-radius: 20px;
  -moz-border-radius-topleft: 20px;
  -moz-border-radius-bottomleft: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  transition: all 0.2s ease-in-out;

  @media (min-width: ${breakpoints.mobile}) {
    &:hover {
      transform: scale(1.1);
      margin-right: 2px;
    }
  }
`
);

export const ToggleSidebarIcon = styled(FontAwesomeIcon)(
  ({ theme }) => `
  color:${theme.color.sidebarBackgroundColorMobile}
`
);

export const SidebarItemLayout = styled.div(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 20px;
  color: ${theme.color.text};
  flex-wrap: wrap;
`
);

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

export const SidebarAvatarPart = styled.div<SidebarAvatarPartProps>(
  ({ theme, active }) => `
  position: relative;
  background-color: ${
    active ? theme.color.shapeColorActive : theme.color.shapeColor
  };
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

  @media (min-width: ${breakpoints.mobile}) {
    &:hover {
      background-color: ${theme.color.shapeColorActive};
    }
  }
`
);

export const SidebarItemColor = styled.h4`
  margin-bottom: 0;
`;

export const SidebarBodyColor = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
