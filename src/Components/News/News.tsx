import { Box, Button, Container, Flex } from "@chakra-ui/react";
import React from "react";
import Posts from "./Posts";

const News = () => {
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
          fontSize="75px"
          lineHeight="62px"
          mb="50px"
        >
          новости
        </Box>
        <Flex mb="42px">
          <Button
            textTransform="uppercase"
            fontSize="14px"
            mr="9px"
            color="#494949"
            background="#F2F2F2"
            borderRadius="25px"
            py="10px"
            px="20px"
          >
            news
          </Button>
          <Button
            textTransform="uppercase"
            fontSize="14px"
            mr="9px"
            color="#494949"
            background="#F2F2F2"
            borderRadius="25px"
            py="10px"
            px="20px"
          >
            events
          </Button>
          <Button
            textTransform="uppercase"
            fontSize="14px"
            color="#494949"
            background="#F2F2F2"
            borderRadius="25px"
            py="10px"
            px="20px"
          >
            in the media
          </Button>
        </Flex>
        <Posts />
      </Container>
    </Box>
  );
};

export default News;
