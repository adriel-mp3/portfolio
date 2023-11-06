import styled from "styled-components";

export const Logo = styled.span`
  color: ${({ theme }) => theme.colors["neutral-100"]};
  font-family: "Poppins";
  font-size: ${({ theme }) => theme.fontSizes["xl"]};
  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;
