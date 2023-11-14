import styled, { css, keyframes } from "styled-components";

export const Container = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 40px auto 120px auto;
  padding: 0 40px;

  @media screen and (max-width: 768px) {
    margin: 40px auto 60px auto;
  }

  @media screen and (max-width: 640px) {
    padding: 0 20px;
  }
`;

const openNavigationStyle = css`
  display: block;
  position: absolute;
  right: 40px;
  top: 50px;

  background: rgba(0, 84, 102, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 12px;
  padding: 20px 40px 20px 20px;
  box-shadow: 0px -1px 4px 0px rgba(255, 255, 255, 0.05) inset;
`;

export const Navigation = styled.nav<{ $isMenuOpen: boolean }>`
  transition: 0.3s ease;

  @media screen and (max-width: 1024px) {
    display: none;
    ${({ $isMenuOpen }) => ($isMenuOpen ? openNavigationStyle : "")}
  }

  @media screen and (max-width: 640px) {
    ${({ $isMenuOpen }) => ($isMenuOpen ? "right: 20px" : "")}
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.base};
  gap: 10px;
  color: ${({ theme }) => theme.colors["neutral-300"]};
  li > a {
    transition: 0.3s;
    padding: 10px 15px;

    &:hover {
      background: rgba(0, 84, 102, 0.05);
      color: ${({ theme }) => theme.colors["accent-300"]};
      border-radius: 8px;
      backdrop-filter: blur(20px);
    }
  }

  @media screen and (max-width: 1024px) {
    display: block;
    font-size: ${({ theme }) => theme.fontSizes.sm};

    li > a {
      padding: 5px 10px;

      &:hover {
        backdrop-filter: none;
      }
    }
    li + li {
      margin-top: 20px;
    }
  }
`;

const openMenuStyle = css`
  div:nth-child(1) {
    transform: translateY(4px) rotateZ(-45deg);
  }

  div:nth-child(2) {
    opacity: 0;
  }

  div:nth-child(3) {
    transform: translateY(-10px) rotateZ(45deg);
  }
`;

export const MenuButton = styled.button<{ $isMenuOpen: boolean }>`
  display: none;
  width: 22px;
  height: 21px;
  cursor: pointer;
  transition: 0.3s ease;
  // mobile icon
  &:hover div {
    background: ${({ theme }) => theme.colors["neutral-400"]};
  }

  div {
    display: block;
    height: 3px;
    width: 100%;
    background: ${({ theme }) => theme.colors["neutral-100"]};
    border-radius: 5px;
    transition: 0.3s ease;
  }

  @media screen and (max-width: 1024px) {
    display: grid;
    align-items: center;
  }

  ${({ $isMenuOpen }) => ($isMenuOpen ? openMenuStyle : "")}
`;
