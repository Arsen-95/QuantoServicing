import { background, Box, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React, { FC } from "react";

type ServiceProps = {
  text: string;
  picture: string;
  href: string;
};

const Service: FC<ServiceProps> = ({ text, picture, href }) => {
  return (
    <NextLink href={href} passHref>
      <Link
        display="block"
        p={"13px 10px"}
        background={`url(${picture}) no-repeat`}
        height="102px"
        width="182px"
        fontSize="12"
        lineHeight="16px"
        _notLast={{
          mr: "24px",
        }}
        color="rgba(0, 0, 0, 0.75)"
        letterSpacing="-0.00240557px"
        _hover={{
          color: "#FFF",
        }}
      >
        {text}
      </Link>
    </NextLink>
  );
};

export default Service;
