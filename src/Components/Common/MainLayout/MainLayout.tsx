import { Box, Flex } from "@chakra-ui/react";
import React, { FC } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const MainLayout: FC<any> = ({ background, children }) => {
  return (
    <Flex flexDir={"column"} minHeight="100%">
      <Header />
      <Box
        as="main"
        flex="1 0 auto"
        h={"100%"}
        background={background ? `${background}` : "#FFF"}
      >
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};
