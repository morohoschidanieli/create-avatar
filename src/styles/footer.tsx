import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #44484c;
  font-size: 14px;
  font-weight: bold;
  height: 20px;
  padding: 14px 0;
  width: 100%;
`;

export const FooterLink = styled.a`
  color: inherit;
  padding: 0 3px;
  text-decoration: none;

  &:hover {
    color: white;
    transition: all 0.2s ease-in;
  }
`;
