import styled from "styled-components";

import { device } from "@/styles/mediaQueries";

export const Logo = styled.span`
  color: ${({ theme }) => theme.colors["neutral-100"]};
  font-family: "Poppins";
  font-size: ${({ theme }) => theme.fontSizes["xl"]};
  
  @media ${device.md} {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;
