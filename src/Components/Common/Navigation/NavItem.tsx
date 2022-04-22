import { Link, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";

type NavProps = {
  href: any;
  text: string;
};

const NavItem: React.FC<NavProps & LinkProps> = ({ href, text, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <Link
        _notLast={{
          mr: "25px",
        }}
        letterSpacing="-0.00185615px"
        _hover={{
          textDecor: "none",
        }}
        p="5px"
        fontSize="14px"
        {...props}
      >
        {text}
      </Link>
    </NextLink>
  );
};

export default NavItem;
