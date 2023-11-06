import * as S from "./style";

type LogoProps = {
  href: string;
};

const Logo = ({ href }: LogoProps) => {
  return (
    <a href={href}>
      <S.Logo>Adriel Santos</S.Logo>
    </a>
  );
};

export default Logo;
