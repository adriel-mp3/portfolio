import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1600px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing["2xl"]};

  span {
    color: ${({ theme }) => theme.colors["neutral-100"]};
    font-family: "Playfair Display";
    font-size: ${({ theme }) => theme.fontSizes["xl"]};
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing["2xl"]};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights["semiBold"]};
  color: ${({ theme }) => theme.colors["neutral-300"]};

  li > a {
    transition: 0.3s;
    &:hover {
      color: ${({ theme }) => theme.colors["accent-500"]};
    }
  }
`;
