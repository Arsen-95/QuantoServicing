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
    <Box position="relative" minH="100%" w="100%">
      <Container>
        <Flex>
          <Box
            py="128px"
            flexBasis="46%"
            pos="relative"
            zIndex="10"
            color={["#FFF", "#FFF", "#FFF", "#494949"]}
          >
            <Box
              fontFamily="Museo Sans Cyrl"
              fontStyle="normal"
              fontWeight="300"
              fontSize={["16px", "16px", "18px", "18px"]}
              lineHeight="25px"
              letterSpacing="-0.00089095px"
              mb={6}
            >
              Социальная ответственность
            </Box>
            <Box
              as="h4"
              letterSpacing="-2.50267px"
              fontSize={["54px", "54px", "54px", "70px", "75px"]}
              lineHeight="62px"
              fontWeight="900"
              mb={8}
              fontFamily="Blender Pro"
              textTransform="uppercase"
            >
              {title}
            </Box>
            <Text
              mb={9}
              fontFamily="Museo Sans Cyrl"
              fontSize="14"
              lineHeight="132%"
              maxW={["300px", "334px", "268px"]}
            >
              {text}
            </Text>
          </Box>
          <Box
            position="absolute"
            zIndex={1}
            right="0%"
            bottom="0"
            width={["100%", "100%", "100%", "50%"]}
            minH="100%"
            background={`linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), #C4C4C4 url(${IMAGES_PATH}/${imageUrl}) no-repeat`}
            backgroundSize="cover"
            backgroundPosition="center"
          ></Box>
        </Flex>
      </Container>
    </Box>
  );
};
