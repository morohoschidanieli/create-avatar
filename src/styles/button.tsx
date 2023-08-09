import { styled } from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 0px 10px;
  border: none;
  background-color: rgba(164, 178, 193, 0.15);
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    transform: scale(1.1);
    background-color: white;
    color: #374250;
  }
`;
