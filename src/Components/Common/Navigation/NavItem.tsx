import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React, { FC } from "react";

type NavProps = {
  href: string;
  text: string;
};

const NavItem: FC<NavProps> = ({ href, text }) => {
  return (
    <NextLink href={href} passHref>
      <Link
        _notLast={{
          mr: "25px",
        }}
        fontSize="14"
        color="#FFF"
        textTransform="uppercase"
        fontFamily="Museo Sans Cyrl"
        fontWeight="600"
        letterSpacing="-0.00185615px"
      >
        {text}
      </Link>
    </NextLink>
  );
};

export default NavItem;
