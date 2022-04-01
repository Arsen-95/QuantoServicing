import { Box, Container, Flex } from "@chakra-ui/react";
import { IMAGES_PATH } from "constants/settings";
import React from "react";
import Manager from "./Manager";

export const Management = () => {
  return (
    <Box
      py="100px"
      bg={`url(${IMAGES_PATH}/management.png) no-repeat right center`}
    >
      <Container>
        <Box
          as="h5"
          fontStyle="normal"
          fontWeight="600"
          fontSize="40px"
          lineHeight="99.5%"
          letterSpacing="-0.04em"
          color="#494949"
          mb="60px"
        >
          Руководство
        </Box>
        <Box
          h="1px"
          maxW="660px"
          bg="linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 80.15%)"
        ></Box>
        <Manager
          name="Набиев Парвиз Туракулович"
          position="Директор"
          email="nabiev.p@quantoservicing.com"
          number={1}
        />
        <Manager
          name="Худайбергенов Хамза Серсенбаевич"
          position="Заместитель директора"
          email="nabiev.p@quantoservicing.com"
          number={2}
        />
        <Manager
          name="Мамаджанов Тимур Алишерович"
          position="Главный инженер"
          email="nabiev.p@quantoservicing.com"
          number={3}
        />
        <Manager
          name="Турдыбаев Абдувасик АБдувалиевич"
          position="Главный геолог"
          email="nabiev.p@quantoservicing.com"
          number={4}
        />
        <Manager
          name="Чернова Татьяна Витальевна"
          position="Главный бухгалтер"
          email="nabiev.p@quantoservicing.com"
          number={5}
        />
      </Container>
    </Box>
  );
};