import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 40px auto 120px auto;
  padding: 0 40px;
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing["2xl"]};
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors["neutral-300"]};
  
  li > a {
    transition: 0.3s;
    &:hover {
      color: ${({ theme }) => theme.colors["accent-500"]};
    }
  }
`;
