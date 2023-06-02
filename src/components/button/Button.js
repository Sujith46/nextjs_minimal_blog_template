import { styled } from "styled-components";

const Button = styled.button`
  border: none;
  padding: 12px 16px;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  cursor: pointer;
  font-size: 12px;
  text-transform: uppercase;
  transition: all 0.3 ease;

  &:active {
    scale: 0.96;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: #0c134f;
  color: white;
`;
