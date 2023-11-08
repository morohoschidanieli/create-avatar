import { breakpoints } from "@constants";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 10px 0;
  color: white;
`;

export const ChangeThemeButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 10px;
`;

export const GithubButton = styled.a`
  cursor: pointer;
  text-decoration: none;
  border: none;
  padding: 10px;
  margin: 0 10px;
  border-radius: 10px;
  background: ${({ theme }) => theme.color.primary};
  color: white;
  transition: all 0.4s;

  @media (min-width: ${breakpoints.mobile}) {
    &:hover {
      transform: scale(1.1);
      background-color: white;
      color: #374250;
    }
  }
`;
