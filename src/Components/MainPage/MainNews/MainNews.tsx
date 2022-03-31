import { Box, Button, color, Container, Flex } from "@chakra-ui/react";
import React from "react";
import Posts from "./Posts";

export const MainNews = () => {
  return (
    <Box bgColor="#FAFAFA" pt="97px" pb="109px">
      <Container>
        <Box
          textTransform="uppercase"
          color="#494949"
          letterSpacing="-2.50267px"
          fontFamily="Blender Pro"
          fontStyle="normal"
          fontWeight="900"
          fontSize={["35px", "50px", "50px", "75px"]}
          lineHeight="62px"
          mb={["20px", "20px", "20px", "50px"]}
        >
          новости
        </Box>
        <Flex mb="42px">
          <Button
            textTransform="uppercase"
            fontSize="14px"
            lineHeight={1}
            mr="9px"
            color="#494949"
            background="#F2F2F2"
            py="10px"
            px="20px"
            borderRadius="none"
            _hover={{
              bg: "#365164",
              color: "#FFF",
            }}
            transition="all 0.2s"
          >
            Новости
          </Button>
          <Button
            textTransform="uppercase"
            fontSize="14px"
            lineHeight={1}
            color="#494949"
            background="#F2F2F2"
            py="10px"
            px="20px"
            borderRadius="none"
            _hover={{
              bg: "#365164",
              color: "#FFF",
            }}
            transition="all 0.2s"
          >
            События
          </Button>
        </Flex>
        <Posts />
      </Container>
    </Box>
  );
};
