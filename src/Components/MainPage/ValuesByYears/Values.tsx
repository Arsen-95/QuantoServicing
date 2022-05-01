import { Box, Container, Flex, Grid, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "next-i18next";

import { StatsBox } from "Components/Common/StatsBox";
import { Years } from "Components/Common/Year/Years";

export const Values = ({ values }: any) => {
  const { t } = useTranslation();

  // const values: Record<
  //   number,
  //   { data_description: string; data: string; plus?: boolean }[]
  // > = {
  //   2021: [
  //     { data_description: "Кол-во завершенных скважин (шт)", data: "35" },
  //     { data_description: "Наработка (сут)", data: "3540" },
  //     {
  //       data_description: "Коэффицент эксплуатации станции (д.е.)",
  //       data: "0.79",
  //     },
  //     { data_description: "Кол-во отработанных заявок (шт)", data: "345" },
  //     { data_description: "Исследованные интервалы (м)", data: "275000" },
  //     { data_description: "Открытый/закрытый ствол (шт)", data: "292/53" },
  //     { data_description: "Кол-во отработанных заявок (шт)", data: "246" },
  //     {
  //       data_description: "Простреленные интервалы (м)",
  //       data: "1500",
  //       plus: true,
  //     },
  //     {
  //       data_description: "Кол-во простреленных зарядов (шт)",
  //       data: "30000",
  //       plus: true,
  //     },
  //   ],
  //   2020: [
  //     { data_description: "Кол-во завершенных скважин (шт)", data: "42" },
  //     { data_description: "Наработка (сут)", data: "3385" },
  //     {
  //       data_description: "Коэффицент эксплуатации станции (д.е.)",
  //       data: "0.77",
  //     },
  //     { data_description: "Кол-во отработанных заявок (шт)", data: "175" },
  //     { data_description: "Исследованные интервалы (м)", data: "140000" },
  //     { data_description: "Открытый/закрытый ствол (шт)", data: "107/68" },
  //     { data_description: "Кол-во отработанных заявок (шт)", data: "0" },
  //     { data_description: "Исследованные интервалы (м)", data: "0" },
  //     { data_description: "Открытый/закрытый ствол (шт)", data: "0" },
  //   ],
  //   2019: [
  //     { data_description: "Кол-во завершенных скважин (шт)", data: "27" },
  //     { data_description: "Наработка, сут", data: "2632" },
  //     {
  //       data_description: "Коэффицент эксплуатации станции, д.е.",
  //       data: "0.6",
  //     },
  //     { data_description: "Кол-во отработанных заявок (шт)", data: "10" },
  //     { data_description: "Исследованные интервалы (м)", data: "20000" },
  //     { data_description: "Открытый/закрытый ствол (шт)", data: "2/8" },
  //     { data_description: "Кол-во отработанных заявок (шт)", data: "0" },
  //     { data_description: "Простреленные  интервалы (м)", data: "0" },
  //     { data_description: "Кол-во простреленных зарядов (шт)", data: "0" },
  //   ],
  // };

  const names = {
    0: "ГТИ",
    3: "ГИС",
    6: "ПВР",
  };

  const [year, setYear] = useState(2019);
  const yearChanger = (year: number): any => {
    setYear(year);
  };

  const yearsData = [2019, 2020, 2021];

  return (
    <Box bgColor="#393A47" py={["50px", "75px"]}>
      <Container>
        <Flex mb={["60px", "60px", "35px"]}>
          <Flex flex="1" minW={["150px", "220px", "200px", "200px", "300px"]}>
            <Box
              display={["block", "block", "none"]}
              mt="-40px"
              pl={["0", "20"]}
            >
              <Years onScroll={yearChanger} yearsData={yearsData} />
            </Box>
          </Flex>
          <Box
            mt="70px"
            flexBasis="68.5%"
            textAlign={["center", "center", "left"]}
            display={["block", "block", "grid"]}
            gridTemplateColumns={[
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
            ]}
            gap={["5", "8", "8", "10", "20"]}
          >
            <Box gridColumn={["1", "1/4", "1/4", "2/4"]}>
              <Box
                fontWeight="600"
                fontSize={["18px", "20px", "22px", "26px"]}
                lineHeight="25px"
                letterSpacing="0.00240557px"
                color="#FFF"
                mb="3"
              >
                {t("headers:values")}
              </Box>
              <Text
                fontWeight="300"
                fontSize={["12px", "14px", "16px", "18px"]}
                lineHeight="22px"
                letterSpacing="-0.00089095px"
                color="#B7B7B7"
              >
                {t("common:valuesText")}
              </Text>
            </Box>
          </Box>
        </Flex>

        <Flex>
          <Box
            flex="1"
            display={["none", "none", "flex"]}
            minW={["auto", "200px", "200px", "200px", "300px"]}
            overflow="hidden"
          >
            <Years onScroll={yearChanger} yearsData={yearsData} />
          </Box>

          <Grid
            m="0 auto"
            flexBasis={["100%", "75%", "68.5%"]}
            templateColumns={[
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
            ]}
            templateRows={[
              "repeat(3, 1fr)",
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap={["5", "8", "8", "10", "20"]}
          >
            {values[year].map((item: any, index: any) => (
              <>
                {index % 3 === 0 && (
                  <Flex
                    justifyContent={["center", "center", "start", "end"]}
                    alignItems={["center", "center", "start", "start"]}
                    background={[
                      index === 0
                        ? "#614738"
                        : index === 3
                        ? "#365164"
                        : index === 6
                        ? "#772F2A"
                        : "none",
                      index === 0
                        ? "#614738"
                        : index === 3
                        ? "#365164"
                        : index === 6
                        ? "#772F2A"
                        : "none",
                      "none",
                    ]}
                    gridColumn={["1", "1", "1/4", "1"]}
                    transition="all 1s"
                    fontFamily="Blender Pro"
                    fontWeight="900"
                    fontSize={["38px", "38px", "20px", "22px", "24px"]}
                    lineHeight="29px"
                    letterSpacing="-0.00240557px"
                    color={"#FFF"}
                  >
                    {names[index as keyof typeof names]}
                  </Flex>
                )}
                <StatsBox
                  border="1px solid #B7B7B7"
                  padding="8px"
                  text={item?.data_description}
                  num={item?.data}
                  numSize={["30", "32", "32", "34", "36"]}
                  textSize="12px"
                  height={["150px", "150px", "145px", "150px"]}
                  plusSize={["18", "20", "24", "26"]}
                />
              </>
            ))}
          </Grid>
        </Flex>
      </Container>
    </Box>
  );
};
