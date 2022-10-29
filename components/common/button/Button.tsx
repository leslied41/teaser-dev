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
  variant: "primary" | "link" | "secondary";
  showDetails?: boolean;
}

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  Component?: string | JSXElementConstructor<any>;
  href?: string;
  className?: string;
  variant: "primary" | "link" | "secondary";
  showDetails?: boolean;
}

type ComponentProps = ButtonProps | AnchorProps;

const Button: FC<ComponentProps> = ({
  Component = "button",
  children,
  className,
  variant,
  showDetails,
  href,
  ...rest
}) => {
  const isEn = useLocale();
  const ClassName = cn(
    "uppercase px-2 bg-transparent border-[1px] text-lg hover:opacity-70",
    {
      ["text-main-color py-1 border-main-color"]: variant === "primary",
      ["inline-block  py-[6px]  border-white text-sm"]: variant === "link",
      ["inline-block  py-[6px] px-2 border-main-color cursor-pointer h-fit"]:
        variant === "secondary",
      ["border-none"]: variant === "primary" && !showDetails,
    },
    className
  );
  return (
    <Component {...rest} className={ClassName} href={href}>
      {children}
    </Component>
  );
};

export default Button;
