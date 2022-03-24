import { Box, Container, Flex, Grid, Text } from "@chakra-ui/react";
import { YearPicker } from "Components/Common/Picker";
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
              fontSize="24px"
              lineHeight="29px"
              letterSpacing="-0.00240557px"
              color="#494949"
            >
              <Box>ГТИ</Box>
              <Box>ГИС</Box>
              <Box>ПВР</Box>
            </Flex>
          </Box>
          <Box flex="1" ml="20px">
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
            <Grid templateColumns="repeat(3, 1fr)" gap="10">
              <StatsBox
                padding="8px"
                text="Количество происледованного интервала"
                num={275000}
                numSize={["20px", "24px", "28px", "32px", "36px"]}
                textSize="12px"
                height="150px"
              />
              <StatsBox
                padding="8px"
                text="Количество происледованного интервала"
                num={275000}
                numSize={["20px", "24px", "28px", "32px", "36px"]}
                textSize="12px"
                height="150px"
              />
              <StatsBox
                padding="8px"
                text="Количество происледованного интервала"
                num={275000}
                numSize={["20px", "24px", "28px", "32px", "36px"]}
                textSize="12px"
                height="150px"
              />
              <StatsBox
                padding="8px"
                text="Количество происледованного интервала"
                num={275000}
                numSize={["20px", "24px", "28px", "32px", "36px"]}
                textSize="12px"
                height="150px"
              />
              <StatsBox
                padding="8px"
                text="Количество происледованного интервала"
                num={275000}
                numSize={["20px", "24px", "28px", "32px", "36px"]}
                textSize="12px"
                height="150px"
              />
              <StatsBox
                padding="8px"
                text="Количество происледованного интервала"
                num={275000}
                numSize={["20px", "24px", "28px", "32px", "36px"]}
                textSize="12px"
                height="150px"
              />
              <StatsBox
                padding="8px"
                text="Количество происледованного интервала"
                num={275000}
                numSize={["20px", "24px", "28px", "32px", "36px"]}
                textSize="12px"
                height="150px"
              />
              <StatsBox
                padding="8px"
                text="Количество происледованного интервала"
                num={275000}
                numSize={["20px", "24px", "28px", "32px", "36px"]}
                textSize="12px"
                height="150px"
              />
              <StatsBox
                padding="8px"
                text="Количество происледованного интервала"
                num={275000}
                numSize={["20px", "24px", "28px", "32px", "36px"]}
                textSize="12px"
                height="150px"
              />
            </Grid>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
