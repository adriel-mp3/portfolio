import React from "react";
import * as S from "./style";

const Header = () => {
  
  return (
    <S.Container>
      <span>Adriel Santos</span>
      <nav>
        <S.NavList>
          <li>
            <a href="#">Projetos</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </S.NavList>
      </nav>
    </S.Container>
  );
};

export default Header;
