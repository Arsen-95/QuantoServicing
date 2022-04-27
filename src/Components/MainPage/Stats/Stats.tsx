import { Box, Container, Flex, Grid, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import { StatsBox } from "Components/Common/StatsBox";

export const Stats = () => {
  const [t] = useTranslation();

  return (
    <Box py={["50px", "88px"]} bg="#23242B">
      <Container>
        <Flex
          justifyContent="space-between"
          flexDir={["column", "column", "column", "row"]}
        >
          <Box flex="1 1 50%">
            <Text
              as="h5"
              textTransform="uppercase"
              fontSize={["36px", "50px", "60px", "64px", "76px"]}
              letterSpacing="-2.50267px"
              color="#FFF"
              lineHeight={["35px", "50px", "62px"]}
              mb={["20px", "20px", "20px", "44px"]}
              maxW={["220px", "330px", "425px"]}
            >
              {t("headers:results")}
            </Text>
            <Text
              fontSize={["10px", "14px", "16px", "18px"]}
              color="#B7B7B7"
              letterSpacing="-0.00089095px"
              lineHeight="1.2"
              fontWeight="300px"
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
                border="1px solid #6D7084"
                numSize={["26px", "60px", "96px", "70px", "96px"]}
                textSize={["8px", "12px", "16px", "16px", "18px"]}
                text={`Кол-во заявок по услугам \nза всю историю (шт)`}
                num="438"
                height={["150px", "210px", "280px", "230px", "294px"]}
                padding="14px"
              />
              <StatsBox
                border="1px solid #6D7084"
                numSize={["26px", "60px", "96px", "70px", "96px"]}
                textSize={["8px", "12px", "16px", "16px", "18px"]}
                text={`Общее кол-во заявок \nпо ГТИ (шт)`}
                num="359"
                height={["150px", "210px", "280px", "230px", "294px"]}
                padding="15px"
              />
              <StatsBox
                border="1px solid #6D7084"
                numSize={["26px", "60px", "96px", "70px", "96px"]}
                textSize={["8px", "12px", "16px", "16px", "18px"]}
                text={`Общее кол-во заявок \nпо ПВР (шт)`}
                num="246"
                height={["150px", "210px", "280px", "230px", "294px"]}
                padding="15px"
              />
              <StatsBox
                border="1px solid #6D7084"
                numSize={["26px", "60px", "96px", "70px", "96px"]}
                textSize={["8px", "12px", "16px", "16px", "18px"]}
                text={`Общее кол-во заявок \nпо ГИС (шт)`}
                num="540"
                height={["150px", "210px", "280px", "230px", "294px"]}
                padding="15px"
              />
            </Grid>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
