import { Box, Container, Flex, Grid, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import { StatsBox } from "Components/Common/StatsBox";

type Props = {
  gti: any;
  gis: any;
  pvr: any;
};

export const Stats: React.FC<Props> = ({ gti, gis, pvr }) => {
  const [t] = useTranslation();

  // const foo = (service: any) => {
  //   let sum = 0;
  //   const keys = Object.keys(service);
  //   keys.map((key: any) => {
  //     service[key].map((i: any) => {
  //       if (i.position === "0") {
  //         sum += parseFloat(i.data);
  //       }
  //     });
  //   });
  //   return sum;
  // };

  const foo = (service: any) => {
    let sum = 0;
    service.map((item: any) => {
      item.statistics.map((stat: any) => {
        if (stat.position === "0") {
          sum += parseFloat(stat.data);
        }
      });
    });
    return sum;
  };

  return (
    <Box bg="#23242B" as="section">
      <Container>
        <Flex
          justifyContent="space-between"
          flexDir={["column", "column", "column", "row"]}
        >
          <Box flex="1 1 50%">
            <Text
              as="h5"
              textTransform="uppercase"
              fontSize={["34px", "50px", "54px", "64px", "76px"]}
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
              {t("common:period")}
            </Text>
          </Box>
          <Box
            justifySelf="right"
            position="relative"
            flex="1 1"
            flexBasis={["auto", "auto", "auto", "50%", "35%"]}
          >
            <Grid
              gap={["2", "2", "4", "6", "8"]}
              templateColumns="repeat(2, 1fr)"
            >
              <StatsBox
                border="1px solid #6D7084"
                numSize={["40px", "60px", "96px", "70px", "80px"]}
                textSize={["8px", "12px", "16px", "16px", "16px"]}
                text={`Кол-во заявок по услугам \nза всю историю (шт)`}
                num={`${foo(gis) + foo(gti) + foo(pvr)}+`}
                height={["150px", "210px", "280px", "230px", "242px"]}
                padding="15px"
                plusSize={["30", "40", "70", "50px", "60px"]}
              />
              <StatsBox
                border="1px solid #6D7084"
                numSize={["40px", "60px", "96px", "70px", "80px"]}
                textSize={["8px", "12px", "16px", "16px", "16px"]}
                text={`Общее кол-во заявок \nпо ГТИ (шт)`}
                num={`${foo(gti)}+`}
                height={["150px", "210px", "280px", "230px", "242px"]}
                padding="15px"
                plusSize={["30", "40", "70", "50px", "60px"]}
              />
              <StatsBox
                border="1px solid #6D7084"
                numSize={["40px", "60px", "96px", "70px", "80px"]}
                textSize={["8px", "12px", "16px", "16px", "16px"]}
                text={`Общее кол-во заявок \nпо ПВР (шт)`}
                num={`${foo(pvr)}+`}
                height={["150px", "210px", "280px", "230px", "242px"]}
                padding="15px"
                plusSize={["30", "40", "70", "50px", "60px"]}
              />
              <StatsBox
                border="1px solid #6D7084"
                numSize={["40px", "60px", "96px", "70px", "80px"]}
                textSize={["8px", "12px", "16px", "16px", "16px"]}
                text={`Общее кол-во заявок \nпо ГИС (шт)`}
                num={`${foo(gis)}+`}
                height={["150px", "210px", "280px", "230px", "242px"]}
                padding="15px"
                plusSize={["30", "40", "70", "50px", "60px"]}
              />
            </Grid>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
