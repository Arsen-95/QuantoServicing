import { Box, Container, Flex, Image } from "@chakra-ui/react";

import { IMAGES_PATH } from "constants/settings";

type FigureProps = {
  title: string;
  text: string;
  picture: string;
  backgroundColor: string;
};

export const Figure: React.FC<FigureProps> = ({
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
              as="h5"
              fontWeight="600"
              fontSize={["20px", "26px", "36px", "50px"]}
              lineHeight="99.5%"
              letterSpacing="-0.04em"
              mb="27px"
              maxW="622px"
              whiteSpace="pre-line"
            >
              {title}
            </Box>
            <Box
              maxW="568px"
              fontWeight="300"
              fontSize={["16px", "16px", "18px"]}
              lineHeight="1.2"
              letterSpacing="-0.00240557px"
              color="#B7B7B7"
              opacity="0.7"
              whiteSpace="pre-line"
            >
              {text}
            </Box>
          </Box>
          <Box
            minH="100%"
            w="500px"
            m={["0 auto", "0 auto", "0"]}
            pos="relative"
          >
            <Image src={`${IMAGES_PATH}/${picture}`} alt="picture draw" />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
