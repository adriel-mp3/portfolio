import { Logo } from "@/components/Logo";

import { useHeader } from "@/hooks/useHeader";

import type { HeaderLinksType } from "@/utils/headerLinks";

import * as S from "./style";

interface HeaderProps {
  headerLinks: HeaderLinksType[];
}

const Header = ({ headerLinks }: HeaderProps) => {
  const { isMenuOpen, isViewportMobile, toggleMenu, smoothScrollToSection } =
    useHeader();

  return (
    <S.Container>
      <Logo href="#" />
      <S.MenuButton
        $isMenuOpen={isMenuOpen}
        onClick={toggleMenu}
        type="button"
        aria-label={isMenuOpen ? "Abrir Menu" : "Fechar Menu"}
        aria-haspopup="true"
        aria-controls="menu"
        aria-expanded={isMenuOpen && isViewportMobile}
      >
        <div></div>
        <div></div>
        <div></div>
      </S.MenuButton>
      <S.Navigation $isMenuOpen={isMenuOpen && isViewportMobile}>
        <S.NavLinks>
          {headerLinks.map((link) => (
            <li key={link.id}>
              <a onClick={smoothScrollToSection} href={link.href} id={link.id}>
                {link.label}
              </a>
            </li>
          ))}
        </S.NavLinks>
      </S.Navigation>
    </S.Container>
  );
};

export default Header;
