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
    <Box background={backgroundColor} as="section">
      <Container minH="100%">
        <Flex
          pos="relative"
          justifyContent="space-between"
          alignItems="center"
          flexDir={["column", "column", "column", "row"]}
        >
          <Box
            flexBasis={["auto", "auto", "auto", "44%"]}
            mb={["30px", "40px", "50px"]}
          >
            <Box
              as="h5"
              fontWeight="600"
              lineHeight="99.5%"
              letterSpacing="-0.04em"
              mb={["25px", "25px", "30px", "30px", "44px"]}
              maxW="622px"
              whiteSpace="pre-line"
            >
              {title}
            </Box>
            <Box
              maxW={["auto", "auto", "auto", "568px"]}
              fontWeight="300"
              fontSize={["14px", "16px", "18px"]}
              lineHeight="1.2"
              letterSpacing="-0.00240557px"
              color="#B7B7B7"
              opacity="0.7"
              whiteSpace="pre-line"
            >
              {text}
            </Box>
          </Box>
          <Box flexBasis="40%">
            <Image src={`${IMAGES_PATH}/${picture}`} alt="picture draw" />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
