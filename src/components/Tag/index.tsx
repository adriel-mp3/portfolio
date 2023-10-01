import React from "react";
import * as S from "./style";

export type TagProps = {
  name: string;
  as?: string;
};

const Tag = ({ name, as }: TagProps) => {
  return <S.Tag as={as}>{name}</S.Tag>;
};

export default Tag;
