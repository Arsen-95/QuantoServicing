import { Box, Container, Flex, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import { ICONS_PATH } from "../../../constants/settings";
import { Burger } from "../Burger";
import { BurgerMenu } from "../BurgerMenu";
import { Navigation } from "../Navigation";

type HeaderProps = {
  pt: string | string[];
};

export const Header: FC<HeaderProps> = ({ pt }) => {
  const [menu, setMenu] = useState(false);
  const { pathname } = useRouter();
  const color = pathname === "/newsItem" ? "#000" : "#FFF";

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
              <Image
                w="115px"
                src={
                  pathname === "/newsItem"
                    ? `${ICONS_PATH}/logoBlack.svg`
                    : `${ICONS_PATH}/logo.svg`
                }
                alt="Logo"
              />
            </Link>
          </NextLink>
          <Box display="flex">
            <Navigation flexDir="row" lang={true} color={color} />
            <Burger menu={menu} setMenu={setMenu} />
          </Box>
        </Flex>
      </Container>
      <BurgerMenu menu={menu} setMenu={setMenu} />
    </Box>
  );
};
