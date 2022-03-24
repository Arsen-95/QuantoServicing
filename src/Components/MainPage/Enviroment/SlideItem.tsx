import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { IMAGES_PATH } from "../../../constants/settings";

type SlideProps = {
  title: string;
  text: string;
  imageUrl: string;
};

export const SlideItem: FC<SlideProps> = ({ title, text, imageUrl }) => {
  return (
    <Box position="relative" minH="100%">
      <Container>
        <Flex>
          <Box py="128px" flexBasis="46%">
            <Box
              fontFamily="Museo Sans Cyrl"
              fontStyle="normal"
              fontWeight="300"
              fontSize="18px"
              lineHeight="25px"
              letterSpacing="-0.00089095px"
              color="#494949"
              mb={6}
            >
              Социальная ответственность
            </Box>
            <Box
              as="h4"
              letterSpacing="-2.50267px"
              fontSize="75px"
              lineHeight="62px"
              fontWeight="900"
              mb={8}
              fontFamily="Blender Pro"
              textTransform="uppercase"
              color="#494949"
            >
              {title}
            </Box>
            <Text
              mb={9}
              fontFamily="Museo Sans Cyrl"
              color="rgba(0, 0, 0, 0.75)"
              fontSize="14"
              lineHeight="132%"
              maxW="268px"
            >
              {text}
            </Text>
          </Box>
          <Box
            position="absolute"
            right="0%"
            bottom="0"
            width="50%"
            minH="100%"
            background={`url(${IMAGES_PATH}/${imageUrl}) no-repeat`}
            backgroundSize="cover"
            backgroundPosition="center"
          ></Box>
        </Flex>
      </Container>
    </Box>
  );
};
