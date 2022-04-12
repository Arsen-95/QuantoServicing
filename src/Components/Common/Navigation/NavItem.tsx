import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React, { FC } from "react";

type NavProps = {
  href: any;
  text: string;
  fontSize?: any;
  onClick?: any;
  color?: any;
  uppercase?: boolean;
};

const NavItem: FC<NavProps> = ({
  href,
  text,
  fontSize = "14px",
  onClick,
  color,
  uppercase = true,
}) => {
  return (
    <NextLink href={href} passHref>
      <Link
        _notLast={{
          mr: "25px",
        }}
        fontSize={fontSize}
        color={color}
        fontFamily="Museo Sans Cyrl"
        // fontWeight="600"
        letterSpacing="-0.00185615px"
        onClick={onClick}
        _hover={{
          textDecor: "none",
        }}
        p="5px"
        textTransform={uppercase ? "uppercase" : "none"}
      >
        {text}
      </Link>
    </NextLink>
  );
};

export default NavItem;
