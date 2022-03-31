import { Box, Container, Flex } from "@chakra-ui/react";
import { PostItem } from "Components/Common/PostItem";
import React from "react";
import Pagination from "./Pagination";

export const NewsPosts = () => {
  return (
    <Box background="#FAFAFA" pt="100px" pb="40px">
      <Container>
        <Flex
          fontFamily="Blender Pro"
          fontStyle="normal"
          fontWeight="900"
          fontSize="14px"
          lineHeight="132%"
          letterSpacing="-0.0017819px"
          color="#494949"
          mb="50px"
        >
          <Box
            _hover={{
              color: "#FFF",
              background: "#365164",
            }}
            cursor="pointer"
            p="10px 20px"
            mr="20px"
            background="#F2F2F2"
            transition="all 0.2s"
          >
            Новости
          </Box>
          <Box
            _hover={{
              color: "#FFF",
              background: "#365164",
            }}
            cursor="pointer"
            p="10px 20px"
            background="#F2F2F2"
            transition="all 0.2s"
          >
            События
          </Box>
        </Flex>
        <Flex
          maxW="1083px"
          margin="0 auto"
          flexWrap="wrap"
          gap="46px"
          mb="100px"
        >
          <PostItem
            picture="post1.png"
            text="Социальное обеспечение работника, включая социальное страхование, – это одно из основных обязательств, которое берет на себя работодатель. "
          />
          <PostItem
            picture="post1.png"
            text="Социальное обеспечение работника, включая социальное страхование, – это одно из основных обязательств, которое берет на себя работодатель. "
          />
          <PostItem
            picture="post1.png"
            text="Социальное обеспечение работника, включая социальное страхование, – это одно из основных обязательств, которое берет на себя работодатель. "
          />
          <PostItem
            picture="post1.png"
            text="Социальное обеспечение работника, включая социальное страхование, – это одно из основных обязательств, которое берет на себя работодатель. "
          />
          <PostItem
            picture="post1.png"
            text="Социальное обеспечение работника, включая социальное страхование, – это одно из основных обязательств, которое берет на себя работодатель. "
          />
          <PostItem
            picture="post1.png"
            text="Социальное обеспечение работника, включая социальное страхование, – это одно из основных обязательств, которое берет на себя работодатель. "
          />
          <PostItem
            picture="post1.png"
            text="Социальное обеспечение работника, включая социальное страхование, – это одно из основных обязательств, которое берет на себя работодатель. "
          />
          <PostItem
            picture="post1.png"
            text="Социальное обеспечение работника, включая социальное страхование, – это одно из основных обязательств, которое берет на себя работодатель. "
          />
          <PostItem
            picture="post1.png"
            text="Социальное обеспечение работника, включая социальное страхование, – это одно из основных обязательств, которое берет на себя работодатель. "
          />
          <PostItem
            picture="post1.png"
            text="Социальное обеспечение работника, включая социальное страхование, – это одно из основных обязательств, которое берет на себя работодатель. "
          />
          <PostItem
            picture="post1.png"
            text="Социальное обеспечение работника, включая социальное страхование, – это одно из основных обязательств, которое берет на себя работодатель. "
          />
        </Flex>
        <Pagination />
      </Container>
    </Box>
  );
};
