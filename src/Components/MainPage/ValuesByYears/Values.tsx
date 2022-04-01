import { Box, Container, Flex, Grid, Text } from "@chakra-ui/react";
import { StatsBox } from "Components/Common/StatsBox";
import { Years } from "Components/Common/Year/Years";
import React from "react";

export const Values = () => {
  return (
    <Box bgColor="#FAFAFA" py="75px">
      <Container>
        <Flex alignItems="center">
          <Box flex="1" display="flex" justifyContent="space-between">
            <Years />
            <Flex
              flexDir="column"
              justifyContent="space-between"
              fontFamily="Blender Pro"
              fontStyle="normal"
              fontWeight="900"
              fontSize={["16px", "18px", "20px", "22px", "24px"]}
              lineHeight="29px"
              letterSpacing="-0.00240557px"
              color="#494949"
              display={["none", "none", "none", "flex"]}
            >
              <Box>ГТИ</Box>
              <Box>ГИС</Box>
              <Box>ПВР</Box>
            </Flex>
          </Box>
          <Box flex={["2", "4", "4", "1"]} ml={["0", "0", "0", "20px"]}>
            <Box
              fontFamily="Museo Sans Cyrl"
              fontStyle="normal"
              fontWeight="600"
              fontSize="25px"
              lineHeight="25px"
              letterSpacing="0.00240557px"
              color="#494949"
              mb="3"
            >
              Показатели
            </Box>
            <Text
              fontFamily="Museo Sans Cyrl"
              fontWeight="300"
              fontSize="18px"
              lineHeight="22px"
              letterSpacing="-0.00089095px"
              color="#494949"
              mb="50px"
            >
              Из года в год мы увеличиваем объемы
            </Text>
            <Grid templateColumns="repeat(3, 1fr)" gap={["5", "8", "8", "10"]}>
              <Box
                display={["block", "block", "block", "none"]}
                fontFamily="Blender Pro"
                fontStyle="normal"
                fontWeight="900"
                fontSize="20px"
                lineHeight="24px"
                letterSpacing="-0.00240557px"
                color="#494949"
                gridColumn="1/4"
              >
                ГТИ
              </Box>
              <StatsBox
                padding="8px"
                text="Количество завершенных скважин, шт"
                num={65}
                numSize={["20px", "24px", "26px", "32px", "36px"]}
                textSize="12px"
                height={["150px", "150px", "145px", "150px"]}
              />
              <StatsBox
                padding="8px"
                text="Наработка, сут"
                num={3540}
                numSize={["20px", "24px", "26px", "32px", "36px"]}
                textSize="12px"
                height={["150px", "150px", "145px", "150px"]}
              />
              <StatsBox
                padding="8px"
                text="Коэффициент эксплуатации, д.е."
                num={340}
                numSize={["20px", "24px", "26px", "32px", "36px"]}
                textSize="12px"
                height={["150px", "150px", "145px", "150px"]}
              />
              <Box
                fontFamily="Blender Pro"
                fontStyle="normal"
                fontWeight="900"
                fontSize="20px"
                lineHeight="24px"
                letterSpacing="-0.00240557px"
                color="#494949"
                gridColumn="1/4"
                display={["block", "block", "block", "none"]}
              >
                ГИС
              </Box>
              <StatsBox
                padding="8px"
                text="Количество отработанных заявок, шт"
                num={175}
                numSize={["20px", "24px", "26px", "32px", "36px"]}
                textSize="12px"
                height={["150px", "150px", "145px", "150px"]}
              />
              <StatsBox
                padding="8px"
                text="Исследованные интервалы, м"
                num={140000}
                numSize={["20px", "24px", "26px", "32px", "36px"]}
                textSize="12px"
                height={["150px", "150px", "145px", "150px"]}
              />
              <StatsBox
                padding="8px"
                text="Открытый/закрытый ствол, шт"
                num={107}
                num2={68}
                numSize={["20px", "24px", "26px", "32px", "36px"]}
                textSize="12px"
                height={["150px", "150px", "145px", "150px"]}
              />
              <Box
                display={["block", "block", "block", "none"]}
                fontFamily="Blender Pro"
                fontStyle="normal"
                fontWeight="900"
                fontSize="20px"
                lineHeight="24px"
                letterSpacing="-0.00240557px"
                color="#494949"
                gridColumn="1/4"
              >
                ПВР
              </Box>
              <StatsBox
                padding="8px"
                text="Количество отработанных заявок, шт"
                num={246}
                numSize={["20px", "24px", "26px", "32px", "36px"]}
                textSize="12px"
                height={["150px", "150px", "145px", "150px"]}
              />
              <StatsBox
                padding="8px"
                text="Простреленный интервал, м"
                num={1500}
                plus={true}
                numSize={["20px", "24px", "26px", "32px", "36px"]}
                textSize="12px"
                height={["150px", "150px", "145px", "150px"]}
              />
              <StatsBox
                padding="8px"
                text="Количество происледованных зарядов, шт"
                num={30000}
                plus={true}
                numSize={["20px", "24px", "26px", "32px", "36px"]}
                textSize="12px"
                height={["150px", "150px", "145px", "150px"]}
              />
            </Grid>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
