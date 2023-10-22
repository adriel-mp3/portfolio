import styled, { css } from "styled-components";

type ButtonSizes = "small" | "large";

type UnderlineButton = {
  $size?: ButtonSizes;
};

const BUTTON_SIZES = {
  default: css`
    font-size: ${({ theme }) => theme.fontSizes.base};
    padding-bottom: 4px;
    border-width: 2px;
  `,
  small: css`
    font-size: ${({ theme }) => theme.fontSizes.base};
    padding-bottom: 4px;
    border-width: 2px;
  `,
  large: css`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    padding-bottom: 8px;
    border-width: 6px;
  `,
};

export const UnderlineButton = styled.button<UnderlineButton>`
  ${(props) =>
    props.$size ? BUTTON_SIZES[props.$size] : BUTTON_SIZES["default"]}
  cursor: pointer;
  color: ${({ theme }) => theme.colors["neutral-300"]};
  border-bottom-style: solid;
  border-color: ${({ theme }) => theme.colors["neutral-300"]};
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors["accent-500"]};
    border-color: ${({ theme }) => theme.colors["accent-500"]};
  }
`;
