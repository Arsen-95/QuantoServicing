import { Box, Container, Grid, Table, Td, Tr } from "@chakra-ui/react";
import React from "react";
import Company from "./Company";
import cl from "./table.module.css";

const Companies = () => {
  return (
    // <Box>
    //   <Container>
    //     <Grid
    //       templateColumns="repeat(4, 1fr)"
    //       rowGap="10"
    //       columnGap={["40px", "40px", "30px", "20px"]}
    //       alignItems="center"
    //       justifyItems="center"
    //     >
    //       <Company picture="bbgv.svg" alt="bbgv" />
    //       <Company picture="eriell.svg" alt="ee" />
    //       <Company picture="sewon.svg" alt="sewon" />
    //       <Company picture="medhub.svg" alt="medhub" />

    //       <Company picture="krohne.svg" alt="krohne" />
    //       <Company picture="surhan.svg" alt="surhan" />
    //       <Company picture="ee.svg" alt="ee" />
    //       <Company picture="jumo.svg" alt="jumo" />
    //     </Grid>
    //   </Container>
    // </Box>
    <Box>
      <Table className={cl.border}>
        <Tr h="120px">
          <Td>
            <Company picture="bbgv.svg" alt="bbgv" />
          </Td>
          <Td>
            <Company picture="eriell.svg" alt="ee" />
          </Td>
          <Td>
            <Company picture="sewon.svg" alt="sewon" />
          </Td>
          <Td>
            <Company picture="medhub.svg" alt="medhub" />
          </Td>
        </Tr>
        <Tr h="120px">
          <Td>
            <Company picture="krohne.svg" alt="krohne" />
          </Td>
          <Td>
            <Company picture="surhan.svg" alt="surhan" />
          </Td>
          <Td>
            <Company picture="ee.svg" alt="ee" />
          </Td>
          <Td>
            <Company picture="jumo.svg" alt="jumo" />
          </Td>
        </Tr>
      </Table>
    </Box>
  );
};

export default Companies;
