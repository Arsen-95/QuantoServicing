import { Box, Container, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import ValueBox from "./ValueBox";

const Values = () => {
  return (
    <Box>
      <Container>
        <Flex>
          <Box flex="1">Years</Box>
          <Box flex="1">
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
              <ValueBox
                text="Количество происледованного интервала"
                num={275000}
              />
              <ValueBox
                text="Количество происледованного интервала"
                num={275000}
              />
              <ValueBox
                text="Количество происледованного интервала"
                num={275000}
              />
              <ValueBox
                text="Количество происледованного интервала"
                num={275000}
              />
              <ValueBox
                text="Количество происледованного интервала"
                num={275000}
              />
              <ValueBox
                text="Количество происледованного интервала"
                num={275000}
              />
              <ValueBox
                text="Количество происледованного интервала"
                num={275000}
              />
              <ValueBox
                text="Количество происледованного интервала"
                num={275000}
              />
              <ValueBox
                text="Количество происледованного интервала"
                num={275000}
              />
            </Grid>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Values;
