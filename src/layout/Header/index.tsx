import { Logo } from "@/components/Logo";

import type { HeaderLinksType } from "@/utils/headerLinks";

import * as S from "./style";

type HeaderProps = {
  headerLinks: HeaderLinksType[];
};

const Header = ({ headerLinks }: HeaderProps) => {
  return (
    <S.Container>
      <Logo href="#" />
      <nav>
        <S.NavLinks>
          {headerLinks.map((link) => (
            <li>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </S.NavLinks>
      </nav>
    </S.Container>
  );
};

export default Header;
