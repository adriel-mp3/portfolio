import * as S from "./style";

interface LogoProps {
  href: string;
}

export const Logo = ({ href }: LogoProps) => {
  return (
    <a href={href}>
      <S.Logo>Adriel Santos</S.Logo>
    </a>
  );
};
