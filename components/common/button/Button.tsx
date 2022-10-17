import React, {
  FC,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  JSXElementConstructor,
} from "react";
import { useLocale } from "../../../hooks";
import cn from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Component?: string | JSXElementConstructor<any>;
  href?: string;
  className?: string;
  variant: "primary" | "link";
  showDetails: boolean;
}

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  Component?: string | JSXElementConstructor<any>;
  href?: string;
  className?: string;
  variant: "primary" | "link";
  showDetails?: boolean;
}

type ComponentProps = ButtonProps | AnchorProps;

const Button: FC<ComponentProps> = ({
  Component = "button",
  children,
  className,
  variant,
  showDetails,
  ...rest
}) => {
  const isEn = useLocale();
  const ClassName = cn(
    "uppercase px-2 bg-transparent border-[1px] text-lg",
    {
      ["text-main-color py-1 border-main-color"]: variant === "primary",
      ["inline-block  py-[6px]  border-white"]: variant === "link",
      ["border-none"]: variant === "primary" && !showDetails,
      ["text-lg-1"]: !isEn,
    },
    className
  );
  return (
    <Component {...rest} className={ClassName}>
      {children}
    </Component>
  );
};

export default Button;
