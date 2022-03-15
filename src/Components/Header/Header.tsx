import { Box, Container, Flex, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { ICONS_PATH, IMAGES_PATH } from "../../constants/settings";
import NavItem from "./NavItem";

const Header = () => {
  return (
    <Box as="header" pos="absolute" w="100%" mt="10">
      <Container>
        <Flex justifyContent="space-between">
          <NextLink href="/" passHref>
            <Link>
              <Image src={`${ICONS_PATH}/logo.svg`} alt="Logo" />
            </Link>
          </NextLink>
          <Box as="nav" display="flex">
            <NavItem href="#" text="О компании" />
            <NavItem href="#" text="Услуги" />
            <NavItem href="#" text="Партнеры" />
            <NavItem href="#" text="Контакты" />
            <NavItem href="#" text="Новости" />
            <NavItem href="#" text="Материалы" />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
