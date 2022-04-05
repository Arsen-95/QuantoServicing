import { Box, Container, Flex, Grid, Text } from "@chakra-ui/react";
import { StatsBox } from "Components/Common/StatsBox";
import React from "react";
import { IMAGES_PATH } from "../../../constants/settings";

export const Stats = () => {
  return (
    <Box py={["50px", "88px"]}>
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
              fontSize={["36px", "50px", "60px", "64px", "76px"]}
              letterSpacing="-2.50267px"
              color="#494949"
              lineHeight={["35px", "50px", "62px"]}
              mb={["20px", "20px", "20px", "72px"]}
              maxW={["220px", "330px", "425px"]}
            >
              наши Результаты говорят сами за себя
            </Text>
            <Text
              fontSize={["10px", "14px", "16px", "18px"]}
              color="#494949"
              letterSpacing="-0.00089095px"
              lineHeight="1.2"
              fontWeight="300px"
              fontFamily="Museo Sans Cyrl"
              mb={["40px", "40px", "40px", "0"]}
            >
              * В период с 2019 по 2022 год
            </Text>
          </Box>
          <Box justifySelf="right" position="relative" flex="1 1 50%">
            <Grid
              gap={["2", "2", "4", "6", "8"]}
              templateColumns="repeat(2, 1fr)"
            >
              <StatsBox
                numSize={["26px", "60px", "96px", "70px", "96px"]}
                textSize={["8px", "12px", "16px", "16px", "18px"]}
                text={`Кол-во заявок по услугам \nза всю историю (шт)`}
                num={4382}
                height={["150px", "210px", "280px", "230px", "294px"]}
                padding="14px"
              />
              <StatsBox
                numSize={["26px", "60px", "96px", "70px", "96px"]}
                textSize={["8px", "12px", "16px", "16px", "18px"]}
                text={`Общее кол-во заявок \nпо ГТИ (шт)`}
                num={3596}
                height={["150px", "210px", "280px", "230px", "294px"]}
                padding="15px"
              />
              <StatsBox
                numSize={["26px", "60px", "96px", "70px", "96px"]}
                textSize={["8px", "12px", "16px", "16px", "18px"]}
                text={`Общее кол-во заявок \nпо ПВР (шт)`}
                num={246}
                height={["150px", "210px", "280px", "230px", "294px"]}
                padding="15px"
              />
              <StatsBox
                numSize={["26px", "60px", "96px", "70px", "96px"]}
                textSize={["8px", "12px", "16px", "16px", "18px"]}
                text={`Общее кол-во заявок \nпо ГИС (шт)`}
                num={540}
                height={["150px", "210px", "280px", "230px", "294px"]}
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
