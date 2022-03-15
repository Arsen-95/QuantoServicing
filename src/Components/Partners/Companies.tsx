import { Box, Container, Flex, Grid, Image } from "@chakra-ui/react";
import React from "react";
import { ICONS_PATH, IMAGES_PATH } from "../../constants/settings";
import Company from "./Company";

const Companies = () => {
  return (
    <Box>
      <Container>
        <Grid
          templateColumns="repeat(4, 1fr)"
          rowGap="10"
          alignItems="center"
          justifyItems="center"
        >
          <Company picture="bbgv.svg" alt="bbgv" />
          <Company picture="ee.svg" alt="ee" />
          <Company picture="sewon.svg" alt="sewon" />
          <Box display="flex" alignItems="center" flexBasis="25%">
            <Image src={`${ICONS_PATH}/medhub.svg`} alt="medhub" mr="14px" />
            <Box
              fontFamily="Cera Pro"
              fontSize="36px"
              fontWeight="700"
              color="#494949"
            >
              MedHub
            </Box>
          </Box>
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
