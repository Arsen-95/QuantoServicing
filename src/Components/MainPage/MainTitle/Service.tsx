import { Box, Link, keyframes } from "@chakra-ui/react";
import { ICONS_PATH } from "constants/settings";
import NextLink from "next/link";
import React, { FC } from "react";

type ServiceProps = {
  text: string;
  picture: string;
  href: string;
  onClick?: any;
};

const Service: FC<ServiceProps> = ({ text, picture, href, onClick }) => {
  return (
    <NextLink href={href} passHref>
      <Link
        onClick={onClick}
        pos="relative"
        display="block"
        p={"13px 10px"}
        background={`url(${picture}) no-repeat #FFF`}
        backgroundPosition="0% 72px"
        height="102px"
        width="182px"
        fontSize="14px"
        lineHeight="16px"
        _notLast={{
          mr: "24px",
        }}
        color="rgba(0, 0, 0, 0.75)"
        letterSpacing="-0.00240557px"
        _hover={{
          color: "#FFF",
          backgroundPosition: "0px",
        }}
        transition="all 0.3s"
        role="group"
      >
        <Box>{text}</Box>
        <Box
          h="15px"
          w="15px"
          bottom="22px"
          right="13px"
          pos="absolute"
          borderRadius="50%"
          background={`url(${ICONS_PATH}/buttonArrowRight.svg) 55% 50% no-repeat #365164`}
          _groupHover={{
            background: `url(${ICONS_PATH}/buttonArrowRight.svg) 55% 50% no-repeat red`,
          }}
          transition="all 0.3s"
        ></Box>
      </Link>
    </NextLink>
  );
};

export default Service;
