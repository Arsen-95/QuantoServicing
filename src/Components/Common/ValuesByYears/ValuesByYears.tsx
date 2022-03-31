import { Box, Container, Flex, Grid } from "@chakra-ui/react";
import { StatsBox } from "Components/Common/StatsBox";
import { Years } from "Components/Common/Year/Years";
import React, { FC } from "react";

export const ValuesByYears: FC<any> = ({ children }) => {
  return (
    <Box pt="50px" pb="80px">
      <Container>
        <Box
          fontWeight="600"
          fontSize="40px"
          lineHeight="99.5%"
          letterSpacing="-0.04em"
          color="#494949"
          mb="60px"
          maxW="382px"
        >
          Производственные показатели
        </Box>
        <Flex>
          <Box flexBasis="30%" display="flex">
            <Years />
          </Box>
          <Grid flex="1" pt="50px" templateColumns="repeat(3, 1fr)" gap="6%">
            {children}
          </Grid>
        </Flex>
      </Container>
    </Box>
  );
};
