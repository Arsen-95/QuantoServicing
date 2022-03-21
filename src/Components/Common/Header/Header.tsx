import { Box, Container, Flex, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { ICONS_PATH } from "../../../constants/settings";
import { Navigation } from "../Navigation";

export const Header = () => {
  return (
    <Box as="header" pos="absolute" w="100%" mt="10">
      <Container>
        <Flex justifyContent="space-between" alignItems="center">
          <NextLink href="/" passHref>
            <Link>
              <Image src={`${ICONS_PATH}/logo.svg`} alt="Logo" />
            </Link>
          </NextLink>
          <Navigation />
        </Flex>
      </Container>
    </Box>
  );
};
