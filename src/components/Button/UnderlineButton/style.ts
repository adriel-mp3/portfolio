import styled from "styled-components";

const Button = styled.button`
  color: ${({ theme }) => theme.colors["neutral-300"]};
  border-bottom-style: solid;
  border-color: ${({ theme }) => theme.colors["neutral-300"]};
  transition: 0.3s;
  
  &:hover {
    color: ${({ theme }) => theme.colors["accent-500"]};
    border-color: ${({ theme }) => theme.colors["accent-500"]};
  }
`;

export const ButtonLarge = styled(Button)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  padding-bottom: 8px;
  border-width: 6px;
`;

export const ButtonSmall = styled(Button)`
  font-size: ${({ theme }) => theme.fontSizes.base};
  padding-bottom: 4px;
  border-width: 2px;
`;
