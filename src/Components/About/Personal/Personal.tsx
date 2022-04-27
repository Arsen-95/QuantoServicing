import { Box, Container, Flex } from "@chakra-ui/react";

import { StatsBox } from "Components/Common/StatsBox";

export const Personal = () => {
  return (
    <Box pb="100px" pt="50px">
      <Container>
        <Box
          as="h5"
          fontWeight="600"
          fontSize="40px"
          lineHeight="99.5%"
          letterSpacing="-0.04em"
          color="#49494"
          mb="35px"
        >
          Количество персонала
        </Box>
        <Box
          maxW="400px"
          fontWeight="300"
          fontSize="18px"
          lineHeight="22px"
          letterSpacing="-0.00185615px"
          color="#000000"
          opacity="0.7"
          mb="50px"
        >
          Компания Quanto Servicing предоставляет информацию по количеству
          персонала:
        </Box>
        <Flex justifyContent="center" columnGap="74px" gridAutoColumns="164px">
          <StatsBox
            border="1px solid black"
            flexBasis="164px"
            height="150px"
            num="40"
            numSize="36px"
            padding="6px 8px"
            text="Сотрудников к концу 2019г"
            textSize="12px"
            textWidth="84px"
          />
          <StatsBox
            border="1px solid black"
            flexBasis="164px"
            height="150px"
            num="56"
            numSize="36px"
            padding="6px 8px"
            text="Сотрудников к концу 2020г"
            textSize="12px"
            textWidth="84px"
          />
          <StatsBox
            border="1px solid black"
            flexBasis="164px"
            height="150px"
            num="97"
            numSize="36px"
            padding="6px 8px"
            text="Сотрудников к концу 2021г"
            textSize="12px"
            textWidth="84px"
          />
        </Flex>
      </Container>
    </Box>
  );
};
