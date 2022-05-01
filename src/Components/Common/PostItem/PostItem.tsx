import { Box, Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

import { IMAGES_PATH } from "../../../constants/settings";

type ItemProps = {
  post: any;
};

export const PostItem: React.FC<ItemProps> = ({ post }) => {
  const arr = post.description.split(" ");
  const words = arr.length;
  let time = words / 150;
  if (time < 1) {
    time = 1;
  }

  return (
    <NextLink href="/newsItem" passHref>
      <Link _hover={{ textDecor: "none" }}>
        <Box
          cursor="pointer"
          flexDirection="column"
          p={["14px", "30px 20px 40px 30px"]}
          background={`url(${post.image}) no-repeat`}
          w={["280px", "280px", "300px", "330px"]}
          h={["320px", "330px", "400px", "450px"]}
          pos="relative"
        >
          <Text
            as="h5"
            fontWeight="900"
            fontSize="30px"
            lineHeight="100%"
            letterSpacing="-0.0017819px"
            color="#FFF"
            mb="30px"
          >
            {post.title}
          </Text>
          <Flex
            color="#B0B0B0"
            fontSize="18px"
            lineHeight="132%"
            letterSpacing="-0.0017819px"
            justifyContent="space-between"
          >
            <Box>12 декабря</Box>
            <Box>{time} минут для чтения</Box>
          </Flex>
          <Box
            h="230px"
            background="#393939"
            mixBlendMode="overlay"
            pos="absolute"
            top="0px"
            left="0px"
            right="0px"
          ></Box>
        </Box>
      </Link>
    </NextLink>
  );
};
