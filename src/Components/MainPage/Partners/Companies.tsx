import { Box, Container, Grid } from "@chakra-ui/react";
import React from "react";
import Company from "./Company";

const Companies = () => {
  return (
    <Box>
      <Container>
        <Grid
          templateColumns="repeat(4, 1fr)"
          rowGap="10"
          columnGap={["40px", "40px", "30px", "20px"]}
          alignItems="center"
          justifyItems="center"
        >
          <Company picture="bbgv.svg" alt="bbgv" />
          <Company picture="eriell.svg" alt="ee" />
          <Company picture="sewon.svg" alt="sewon" />
          <Company picture="medhub.svg" alt="medhub" />

          <Company picture="krohne.svg" alt="krohne" />
          <Company picture="surhan.svg" alt="surhan" />
          <Company picture="ee.svg" alt="ee" />
          <Company picture="jumo.svg" alt="jumo" />
        </Grid>
      </Container>
    </Box>
  );
};

export default Companies;
