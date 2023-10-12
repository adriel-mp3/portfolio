import styled from "styled-components";

const Button = styled.button`
  display: block;
  max-width: fit-content;
  padding: 12px 24px;
  border-radius: 7px;
  font-family: "Fira Sans";
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.base};
  letter-spacing: 0.05rem;
  transition: 0.3s;
  cursor: pointer;
`;

export const ButtonDark = styled(Button)`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors["neutral-400"]};
`;

export const ButtonLight = styled(Button)`
  background: ${({ theme }) => theme.colors["accent-100"]};
  color: ${({ theme }) => theme.colors["neutral-400"]};

  &:hover {
    filter: brightness(120%);
  }
`;
