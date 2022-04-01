import { Box, Flex, Link } from "@chakra-ui/react";
import { ICONS_PATH } from "constants/settings";
import NextLink from "next/link";
import React, { FC } from "react";

type ItemProps = {
  name: string;
  picture: string;
  href?: any;
  onClick?: any;
};

const ServiceItem: FC<ItemProps> = ({ name, picture, href, onClick }) => {
  return (
    <Flex
      whiteSpace="pre-line"
      flex="1"
      flexDir="column"
      maxW="300px"
      pl="78px"
      background={`url(${ICONS_PATH}/${picture}) no-repeat 0 7px`}
    >
      <Box
        flex="1"
        fontFamily="Blender Pro"
        fontStyle="normal"
        fontWeight="900"
        fontSize="25px"
        lineHeight="30px"
        textTransform="uppercase"
        color="rgba(0, 0, 0, 0.75)"
        mb="18px"
      >
        {name}
      </Box>
      <NextLink href={href ? href : "#"} passHref>
        <Link
          maxW="112px"
          fontWeight="600"
          fontSize="14px"
          lineHeight="17px"
          letterSpacing="-0.00133319px"
          color="#494949"
          border="1px solid #494949"
          p="10px 25px"
          _hover={{
            bg: "#365164",
            color: "#FFF",
          }}
          transition="all 0.2s"
          onClick={onClick ? onClick : "none"}
        >
          Открыть
        </Link>
      </NextLink>
    </Flex>
  );
};

export default ServiceItem;
