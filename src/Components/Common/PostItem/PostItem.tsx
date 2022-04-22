import { Box, Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

import { IMAGES_PATH } from "../../../constants/settings";

type ItemProps = {
  text: string;
  picture: string;
};

export const PostItem: React.FC<ItemProps> = ({ text, picture }) => {
  return (
    <NextLink href="/newsItem" passHref>
      <Link _hover={{ textDecor: "none" }}>
        <Flex
          cursor="pointer"
          flexDirection="column"
          p={["14px", "20px 20px 40px 20px"]}
          background={`url(${IMAGES_PATH}/${picture}) no-repeat`}
          maxW={["280px", "280px", "300px", "330px"]}
          h={["320px", "330px", "400px", "450px"]}
        >
          <Text
            color="#FFF"
            fontWeight="300"
            fontSize="14px"
            lineHeight="132%"
            flex="1 0 auto"
          >
            {text}
          </Text>
          <Flex justifyContent="space-between" alignItems="flex-end">
            <Box
              fontSize={["40px", "72px", "72px", "72px"]}
              lineHeight="62px"
              fontFamily="Arial"
              color="#FFF"
              letterSpacing="-0.06em"
            >
              18
            </Box>
            <Box
              fontFamily="Arial"
              fontSize="18px"
              lineHeight="113%"
              color="#FFF"
              whiteSpace="pre-line"
            >
              {`FEB \n2022`}
            </Box>
          </Flex>
        </Flex>
      </Link>
    </NextLink>
  );
};
