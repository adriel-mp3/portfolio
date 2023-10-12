import React, { ElementType, ComponentPropsWithoutRef } from "react";
import * as S from "./style";

type ButtonSizes = "small" | "large";

type UnderlineButton<T extends ElementType> = {
  label: string;
  size?: ButtonSizes;
  as?: T;
} & ComponentPropsWithoutRef<T>;

const sizes = {
  default: S.ButtonSmall,
  small: S.ButtonSmall,
  large: S.ButtonLarge,
} as const;

const UnderlineButton = <T extends ElementType = "button" | "a">({
  label,
  size,
  ...props
}: UnderlineButton<T>): JSX.Element => {
  const Button = size ? sizes[size] : sizes.default;
  return <Button {...props}>{label}</Button>;
};

export default UnderlineButton;
