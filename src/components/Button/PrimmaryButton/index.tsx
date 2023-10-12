import React, { ElementType, ComponentPropsWithoutRef } from "react";
import * as S from "./style";

type ButtonVariants = "dark" | "light";

export type PrimaryButtonProps<T extends ElementType> = {
  label: string;
  variant?: ButtonVariants;
  as?: T;
} & ComponentPropsWithoutRef<T>;

const styles = {
  default: S.ButtonLight,
  dark: S.ButtonDark,
  light: S.ButtonLight,
} as const;

const PrimaryButton = <T extends ElementType = "button" | "a">({
  label,
  variant,
  ...props
}: PrimaryButtonProps<T>) => {
  const Button = variant ? styles[variant] : styles.default;

  return <Button {...props}>{label}</Button>;
};

export default PrimaryButton;
