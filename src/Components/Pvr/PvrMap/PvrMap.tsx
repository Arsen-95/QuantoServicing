import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import { IMAGES_PATH } from "constants/settings";
import React from "react";

export const PvrMap = () => {
  return (
    <Box py="80px">
      <Container>
        <Box
          as="h5"
          fontWeight="900"
          fontSize="50px"
          lineHeight="105%"
          letterSpacing="-0.04em"
          maxW="650px"
        >
          Активность деятельности компании в регионах
        </Box>
        <Flex justifyContent="end">
          <Box border="1px solid rgba(73, 73, 73, 0.5)" p="32px" maxW="277px">
            <Definition bg="#106199" text="- от 40 до 70 заявок" />
            <Definition bg="#1D7CBE" text="- от 20 до 40 заявок" />
            <Definition bg="#4597D0" text="- от 10 до 20 заявок" />
            <Definition bg="#95B8D0" text="- от 0 до 10 заявок" />
          </Box>
        </Flex>
        <Box>
          <Image src={`${IMAGES_PATH}/pvrMap.png`} alt="map" />
        </Box>
      </Container>
    </Box>
  );
};

type Props = {
  bg: string;
  text: string;
};

const Definition: React.FC<Props> = ({ bg, text }) => {
  return (
    <Flex
      _notLast={{
        mb: "24px",
      }}
    >
      <Box w="27px" h="27px" bg={bg} mr="12px"></Box>
      <Text
        fontWeight="300"
        fontSize="18px"
        lineHeight="99.5%"
        letterSpacing="-0.00240557px"
        color="#B7B7B7"
      >
        {text}
      </Text>
    </Flex>
  );
};
