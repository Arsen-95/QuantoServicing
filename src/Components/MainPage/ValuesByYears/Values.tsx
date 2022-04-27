import { Box, Container, Flex, Grid, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "next-i18next";

import { StatsBox } from "Components/Common/StatsBox";
import { Years } from "Components/Common/Year/Years";

export const Values = () => {
  const { t } = useTranslation();

  const data: Record<number, { text: string; num: string; plus?: boolean }[]> =
    {
      2021: [
        { text: "Кол-во завершенных скважин (шт)", num: "35" },
        { text: "Наработка (сут)", num: "3540" },
        { text: "Коэффицент эксплуатации станции (д.е.)", num: "0.79" },
        { text: "Кол-во отработанных заявок (шт)", num: "345" },
        { text: "Исследованные интервалы (м)", num: "275000" },
        { text: "Открытый/закрытый ствол (шт)", num: "292/53" },
        { text: "Кол-во отработанных заявок (шт)", num: "246" },
        { text: "Простреленные интервалы (м)", num: "1500", plus: true },
        { text: "Кол-во простреленных зарядов (шт)", num: "30000", plus: true },
      ],
      2020: [
        { text: "Кол-во завершенных скважин (шт)", num: "42" },
        { text: "Наработка (сут)", num: "3385" },
        { text: "Коэффицент эксплуатации станции (д.е.)", num: "0.77" },
        { text: "Кол-во отработанных заявок (шт)", num: "175" },
        { text: "Исследованные интервалы (м)", num: "140000" },
        { text: "Открытый/закрытый ствол (шт)", num: "107/68" },
        { text: "Кол-во отработанных заявок (шт)", num: "0" },
        { text: "Исследованные интервалы (м)", num: "0" },
        { text: "Открытый/закрытый ствол (шт)", num: "0" },
      ],
      2019: [
        { text: "Кол-во завершенных скважин (шт)", num: "27" },
        { text: "Наработка, сут", num: "2632" },
        { text: "Коэффицент эксплуатации станции, д.е.", num: "0.6" },
        { text: "Кол-во отработанных заявок (шт)", num: "10" },
        { text: "Исследованные интервалы (м)", num: "20000" },
        { text: "Открытый/закрытый ствол (шт)", num: "2/8" },
        { text: "Кол-во отработанных заявок (шт)", num: "0" },
        { text: "Простреленные  интервалы (м)", num: "0" },
        { text: "Кол-во простреленных зарядов (шт)", num: "0" },
      ],
    };

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

        <Flex justifyContent="center">
          <Box
            flex="1"
            display={["none", "none", "flex"]}
            minH="100%"
            minW={["auto", "200px", "200px", "200px", "300px"]}
          >
            <Years onScroll={yearChanger} yearsData={yearsData} />
          </Box>

          <Grid
            flexBasis={["100%", "68.5%"]}
            templateColumns={[
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
            ]}
            gap={["5", "8", "8", "10", "20"]}
          >
            {data[year].map((item: any, index) => (
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
                    visibility={item.num > 0 ? "visible" : "hidden"}
                    opacity={item.num > 0 ? "1" : "0"}
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
                  text={item?.text}
                  num={item?.num}
                  plus={item?.plus}
                  numSize={["30px", "32px", "32px", "34px", "36px"]}
                  textSize="12px"
                  height={["150px", "150px", "145px", "150px"]}
                />
              </>
            ))}
          </Grid>
        </Flex>
      </Container>
    </Box>
  );
};
