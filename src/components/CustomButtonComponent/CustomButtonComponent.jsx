import { styled } from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background: #fff;
  box-shadow: 0 0 17px 0 rgba(16, 40, 73, 0.09);
  width: 120px;
  height: 40px;
  font-family: Neucha, sans-serif;
  margin: 1rem;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
    transform: translate3d(0, 2px, 0);
  }

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
  }
`;
