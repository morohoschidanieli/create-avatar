import { breakpoints } from "@constants";
import { styled } from "styled-components";

export const Button = styled.button(
  ({ theme }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 0px 10px;
  border: none;
  background-color: ${theme.color.primary};
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.4s;

  @media (min-width: ${breakpoints.mobile}) {
    &:hover {
      transform: scale(1.1);
      background-color: white;
      color: #374250;
    }
  }
`
);
