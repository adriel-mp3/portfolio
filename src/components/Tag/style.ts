import styled from "styled-components";

import { device } from "@/styles/mediaQueries";

export const Tag = styled.span`
  display: block;
  width: fit-content;
  border-radius: 1.25rem;
  padding: 0.38rem 0.75rem;
  background: ${({ theme }) => theme.colors["accent-100"]};
  color: ${({ theme }) => theme.colors["accent-500"]};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  @media ${device.md} {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;
