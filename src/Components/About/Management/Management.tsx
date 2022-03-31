import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import Manager from "./Manager";

export const Management = () => {
  return (
    <Box py="100px">
      <Container>
        <Box
          fontFamily="Museo Sans Cyrl"
          fontStyle="normal"
          fontWeight="600"
          fontSize="40px"
          lineHeight="99.5%"
          letterSpacing="-0.04em"
          color="#494949"
          mb="70px"
        >
          Руководство
        </Box>
        <Flex justifyContent="space-between" gap="40px">
          <Manager name="Набиев Парвиз Туракулович" position="Директор" />{" "}
          <Manager
            name="Мамаджанов Тимур Алишерович"
            position="Главный инженер"
          />
          <Manager
            name="Турдыбаев Абдувасик АБдувалиевич"
            position="Главный геолог"
          />
          <Manager
            name="Худайбергенов Хамза Серсенбаевич"
            position="Первый заместитель"
          />
        </Flex>
      </Container>
    </Box>
  );
};
