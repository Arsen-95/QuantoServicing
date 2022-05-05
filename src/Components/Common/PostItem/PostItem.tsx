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

  const minutes = ["минута", "минуты", "минут"];
  function num_word(value: number, words: string[]) {
    value = Math.abs(value) % 100;
    let num = value % 10;
    if (value > 10 && value < 20) return words[2];
    if (num > 1 && num < 5) return words[1];
    if (num == 1) return words[0];
    return words[2];
  }

  return (
    <NextLink href={`/post/${post.id}`} passHref>
      <Link _hover={{ textDecor: "none" }} _focus={{ border: "none" }}>
        <Box
          cursor="pointer"
          flexDirection="column"
          background={`url(${IMAGES_PATH}/post1.png) no-repeat`}
          w={["280px", "320px", "320px", "330px"]}
          h={["320px", "350px", "400px", "450px"]}
          pos="relative"
        >
          <Flex
            h="230px"
            background="#393939"
            mixBlendMode="hard-light"
            p={["14px", "30px 20px 40px 30px"]}
            flexDir="column"
          >
            <Text
              as="h5"
              fontWeight="900"
              fontSize="30px"
              lineHeight="100%"
              letterSpacing="-0.0017819px"
              color="#FFF"
              mb="30px"
              flex="1"
            >
              {post.title}
            </Text>
            <Flex
              color="#B0B0B0"
              fontSize={["14px", "16px", "14px", "18px"]}
              lineHeight="132%"
              letterSpacing="-0.0017819px"
              justifyContent="space-between"
            >
              <Box>12 декабря</Box>
              <Box textAlign="right">
                {time} {num_word(time, minutes)} для чтения
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Link>
    </NextLink>
  );
};
