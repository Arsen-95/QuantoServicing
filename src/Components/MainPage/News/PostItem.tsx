import { Box, Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { IMAGES_PATH } from "../../../constants/settings";

type ItemProps = {
  text: string;
  picture: string;
};

const PostItem: FC<ItemProps> = ({ text, picture }) => {
  return (
    <Flex
      flexDirection="column"
      p="20px 20px 40px 20px"
      background={`url(${IMAGES_PATH}/${picture}) no-repeat`}
      maxW="330px"
      h="450px"
    >
      <Text
        color="#FFF"
        fontFamily="Museo Sans Cyrl"
        fontWeight="300"
        fontSize="14px"
        flex="1 0 auto"
      >
        {text}
      </Text>
      <Flex justifyContent="space-between" alignItems="flex-end">
        <Box
          fontSize="72px"
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
          //   alignSelf="end"
          whiteSpace="pre-line"
        >
          {`FEB \n2022`}
        </Box>
      </Flex>
    </Flex>
  );
};

export default PostItem;
