import { Box, Container, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import CountUp from "react-countup";
import { IMAGES_PATH } from "../../constants/settings";
import StatsBlock from "./StatsBlock";

const Stats = () => {
  return (
    <Box py="88px">
      <Container>
        <Flex justifyContent="space-between">
          <Box flex="1 1 50%">
            <Text
              textTransform="uppercase"
              fontFamily="Blender Pro"
              fontSize={["40px", "50px", "65px", "70px", "75px"]}
              letterSpacing="-2.50267px"
              color="#494949"
              lineHeight="62px"
              mb="72px"
              maxW="425px"
            >
              наши Результаты говорят сами за себя
            </Text>
            <Text
              fontSize="18px"
              color="#494949"
              letterSpacing="-0.00089095px"
              lineHeight="1.2"
              fontFamily="Museo Sans Cyrl"
            >
              * В период с 2016 по 2022 года
            </Text>
          </Box>
          <Box justifySelf="right" position="relative" flex="1 1 50%">
            <Grid gap="9" templateColumns="repeat(2, 1fr)">
              <StatsBlock text="Пробурено (метров)" number={2560} />
              <StatsBlock
                text="Баланс времени по всем скважинам (часов)"
                number={3596}
              />
              <StatsBlock text="Число оказанных услуг" number={448} />
              <StatsBlock
                text="Числ завершенных по строительству скважин"
                number={35}
              />
            </Grid>
            <Box
              background={`url(${IMAGES_PATH}/map.png) no-repeat center`}
              backgroundSize="75% 60%"
              opacity="0.1"
              position="absolute"
              top="0"
              left="0"
              h="100%"
              w="100%"
            ></Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Stats;
