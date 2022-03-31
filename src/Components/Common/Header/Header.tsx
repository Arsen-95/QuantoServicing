import { Box, Container, Flex, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";
import { ICONS_PATH } from "../../../constants/settings";
import { Burger } from "../Burger";
import { BurgerMenu } from "../BurgerMenu";
import { Navigation } from "../Navigation";

export const Header = ({ pt }: any) => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const body: any = document.querySelector("body");
    if (menu && body) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "visible";
    }
  }, [menu]);

  return (
    <Box as="header" pos="absolute" zIndex={50} w="100%" pt={pt} top="0">
      <Container>
        <Flex justifyContent="space-between" alignItems="center">
          <NextLink href="/" passHref>
            <Link py="5px">
              <Image src={`${ICONS_PATH}/logo.svg`} alt="Logo" />
            </Link>
          </NextLink>
          <Box display="flex">
            <Navigation flexDir="row" lang={true} />
            <Burger menu={menu} setMenu={setMenu} />
          </Box>
        </Flex>
      </Container>
      <BurgerMenu menu={menu} setMenu={setMenu} />
    </Box>
  );
};
