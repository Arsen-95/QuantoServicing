import { Box, Container, Flex, Grid, Icon, Text } from "@chakra-ui/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";

import { StatsBox } from "Components/Common/StatsBox";
import { Years } from "Components/Common/Year/Years";
import { YearsBtn } from "Components/Common/YearsBtn";
var WheelIndicator = require("wheel-indicator");
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll,
} from "react-locomotive-scroll";
// @ts-ignore-start
import LocomotiveScroll from "locomotive-scroll";
// @ts-ignore-end

export const Values = ({ values }: any) => {
  // var WheelIndicator = require("wheel-indicator");
  const { t } = useTranslation();

  const names = {
    0: "ГТИ",
    3: "ГИС",
    6: "ПВР",
  };

  const [year, setYear] = useState(2019);
  const yearChanger = useCallback((year: number) => {
    setYear(year);
  }, []);

  const yearsData = [2019, 2020, 2021];
  const [selectedYear, setSelectedYear]: any = useState(yearsData[0]);

  // useEffect(() => {
  //   let indicator = new WheelIndicator({
  //     elem: document.querySelector("body"),
  //     callback: function (e: any) {
  //       let direction = e.direction;
  //       console.log(direction);
  //       if (
  //         direction === "down" &&
  //         selectedYear < yearsData[yearsData.length - 1]
  //       ) {
  //         setSelectedYear((old: number) => old + 1);
  //       } else if (direction === "up" && selectedYear != yearsData[0]) {
  //         setSelectedYear((old: number) => old - 1);
  //       }
  //     },
  //   });
  //   indicator.turnOff();

  //   const test = new IntersectionObserver(
  //     (entries) => {
  //       entries.map((entry) => {
  //         if (
  //           entry.isIntersecting &&
  //           selectedYear !== yearsData[yearsData.length - 1]
  //         ) {
  //           indicator.turnOn();
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.9,
  //     }
  //   );

  //   const el: any = document.querySelector("#test");
  //   test.observe(el);
  //   console.log(selectedYear);
  //   return () => {
  //     indicator.destroy();
  //   };
  // }, [selectedYear]);
  // const containerRef = useRef(null);
  // useEffect(() => {
  //   let scroll: any;
  //   // @ts-ignore-end
  //   import("locomotive-scroll").then((locomotiveModule) => {
  //     scroll = new locomotiveModule.default({
  //       el: containerRef.current,
  //       smooth: true,
  //       smoothMobile: false,
  //       resetNativeScroll: true,
  //     });
  //   });
  //   setInterval(() => {
  //     console.log(scroll.update());
  //   }, 500);
  //   // `useEffect`'s cleanup phase
  //   return () => scroll.destroy();
  // });

  const containerRef = useRef(null);
  const tra = useLocomotiveScroll();
  // @ts-ignore-end

  return (
    <Box
      as="main"
      bgColor="#393A47"
      py={["30px", "30px", "50px", "75px"]}
      overflow="hidden"
      ref={containerRef}
    >
      <Container>
        <Flex mb={["60px", "60px", "35px"]}>
          <Flex
            flex="1"
            minW={["150px", "220px", "200px", "200px", "300px"]}
            alignItems="center"
          >
            <Box
              display={["block", "block", "none"]}
              pl={["0", "20"]}
              h={["156px", "165px"]}
              overflow="hidden"
            >
              <Years onScroll={yearChanger} yearsData={yearsData} />
            </Box>
          </Flex>
          <Box
            flexBasis={["100%", "75%", "67%", "67%", "57.11%"]}
            textAlign={["center", "center", "left"]}
            display={["block", "block", "grid"]}
            gridTemplateColumns={[
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
            ]}
            gap={["5", "8", "8", "5", "25px"]}
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
            // h="300px"
            display={["none", "none", "flex"]}
            minW={["auto", "200px", "200px", "200px", "300px"]}
            // overflow="hidden"
          >
            <Years onScroll={yearChanger} yearsData={yearsData} />
          </Box>
          {/* <Box display={["none", "none", "flex"]} flex="1">
                <YearsBtn
                  yearsData={yearsData}
                  selectedYear={selectedYear}
                  setSelectedYear={setSelectedYear}
                />
              </Box> */}

          <Grid
            m="0 auto"
            flexBasis={["100%", "75%", "67%", "67%", "57.11%"]}
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
            gap={["5", "8", "8", "5", "25px"]}
          >
            {values[selectedYear].map((item: any, index: any) => (
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
                  text={item?.description}
                  num={item?.data}
                  numSize={["30", "32", "32", "34", "36"]}
                  textSize={["10px", "12px"]}
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
