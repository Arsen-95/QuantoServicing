import { Box, Container, Flex, Image } from "@chakra-ui/react";
import { IMAGES_PATH } from "constants/settings";
import React, { FC } from "react";

type FigureProps = {
  title: string;
  text: string;
  picture: string;
  backgroundColor: string;
};

export const Figure: FC<FigureProps> = ({
  title,
  text,
  picture,
  backgroundColor,
}) => {
  return (
    <Box background={backgroundColor} pt="80px" pb="50px">
      <Container minH="100%">
        <Flex
          pos="relative"
          justifyContent="space-between"
          flexDir={["column", "column", "row"]}
        >
          <Box>
            <Box
              as="h3"
              fontStyle="normal"
              fontWeight="600"
              fontSize={["20px", "26px", "36px", "40px"]}
              lineHeight="99.5%"
              letterSpacing="-0.04em"
              color="#494949"
              mb="27px"
              maxW="622px"
            >
              {title}
            </Box>
            <Box
              maxW="568px"
              fontStyle="normal"
              fontWeight="300"
              fontSize={["16px", "16px", "18px"]}
              lineHeight="1.2"
              letterSpacing="-0.00240557px"
              color="#000000"
              opacity="0.7"
              whiteSpace="pre-line"
            >
              {text}
            </Box>
          </Box>
          <Box minH="100%" w="500px" m={["0 auto", "0 auto", "0"]}>
            <Image src={`${IMAGES_PATH}/${picture}`} alt="picture draw" />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
