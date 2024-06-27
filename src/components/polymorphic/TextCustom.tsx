import { ComponentProps, ElementType, ReactNode } from "react";

type TextCustomOwnProps<E extends ElementType> = {
  children?: ReactNode;
  as?: E;
};

type TextCustomProps<E extends ElementType> = TextCustomOwnProps<E> &
  Omit<ComponentProps<E>, keyof TextCustomOwnProps<E>>;

const TextCustom = <E extends ElementType>({
  children,
  as,
  ...rest
}: TextCustomProps<E>) => {
  const Component = as || "div";
  return <Component {...rest}>{children}</Component>;
};

export default TextCustom;
