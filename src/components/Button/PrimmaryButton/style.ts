import styled, { css } from "styled-components";

type ButtonVariants = "dark" | "light";

export type PrimaryButtonProps = {
  $variant?: ButtonVariants;
};

const BUTTON_VARIANTS = {
  default: css`
    background: ${({ theme }) => theme.colors["accent-100"]};
    color: ${({ theme }) => theme.colors["neutral-400"]};
  `,
  light: css`
    background: ${({ theme }) => theme.colors["accent-100"]};
    color: ${({ theme }) => theme.colors["neutral-400"]};
  `,
  dark: css`
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors["neutral-400"]};
  `,
};

export const PrimaryButton = styled.button<PrimaryButtonProps>`
  ${(props) =>
    props.$variant
      ? BUTTON_VARIANTS[props.$variant]
      : BUTTON_VARIANTS["default"]}

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

  &:hover {
    filter: brightness(120%);
  }
`;
