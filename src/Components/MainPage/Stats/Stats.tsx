import { Box, Container, Flex, Grid, Text } from "@chakra-ui/react";
import { StatsBox } from "Components/Common/StatsBox";
import React from "react";
import { IMAGES_PATH } from "../../../constants/settings";

export const Stats = () => {
  return (
    <Box py="88px">
      <Container>
        <Flex
          justifyContent="space-between"
          flexDir={["column", "column", "column", "row"]}
        >
          <Box flex="1 1 50%">
            <Text
              as="h5"
              textTransform="uppercase"
              fontFamily="Blender Pro"
              fontSize={["56px", "60px", "66px", "70px", "76px"]}
              letterSpacing="-2.50267px"
              color="#494949"
              lineHeight="62px"
              mb={["20px", "20px", "20px", "72px"]}
              maxW="425px"
            >
              наши Результаты говорят сами за себя
            </Text>
            <Text
              fontSize="18px"
              color="#494949"
              letterSpacing="-0.00089095px"
              lineHeight="1.2"
              fontWeight="300px"
              fontFamily="Museo Sans Cyrl"
              mb={["40px", "40px", "40px", "0"]}
            >
              * В период с 2019 по 2022 года
            </Text>
          </Box>
          <Box justifySelf="right" position="relative" flex="1 1 50%">
            <Grid gap="9" templateColumns="repeat(2, 1fr)">
              <StatsBox
                numSize={["52px", "70px", "86px", "76px", "96px"]}
                textSize={["12px", "14px", "16px", "16px", "18px"]}
                text="Пробурено (метров)"
                num={2560}
                height={["160px", "230px", "280px", "230px", "294px"]}
                padding="15px"
              />
              <StatsBox
                numSize={["52px", "70px", "86px", "76px", "96px"]}
                textSize={["12px", "14px", "16px", "16px", "18px"]}
                text="Баланс времени по всем скважинам (часов)"
                num={3596}
                height={["160px", "230px", "280px", "230px", "294px"]}
                padding="15px"
              />
              <StatsBox
                numSize={["52px", "70px", "86px", "76px", "96px"]}
                textSize={["12px", "14px", "16px", "16px", "18px"]}
                text="Число оказанных услуг"
                num={448}
                height={["160px", "230px", "280px", "230px", "294px"]}
                padding="15px"
              />
              <StatsBox
                numSize={["52px", "70px", "86px", "76px", "96px"]}
                textSize={["12px", "14px", "16px", "16px", "18px"]}
                text="Числ завершенных по строительству скважин"
                num={35}
                height={["160px", "230px", "280px", "230px", "294px"]}
                padding="15px"
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
