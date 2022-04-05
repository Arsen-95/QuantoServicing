import { Box, Container, Flex, Grid, Table, Td, Tr } from "@chakra-ui/react";
import React from "react";
import Company from "./Company";
import cl from "./table.module.css";

const Companies = () => {
  return (
    <>
      <Box display={["block", "none"]}>
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap="10px"
          alignItems="center"
          justifyItems="center"
        >
          <Flex px="18px" minH="120px" border="0.546876px solid #D9D9D9">
            <Company picture="bbgv.svg" alt="bbgv" />
          </Flex>
          <Flex px="18px" minH="120px" border="0.546876px solid #D9D9D9">
            <Company picture="eriell.svg" alt="ee" />
          </Flex>
          <Flex px="18px" minH="120px" border="0.546876px solid #D9D9D9">
            <Company picture="sewon.svg" alt="sewon" />
          </Flex>
          <Flex px="18px" minH="120px" border="0.546876px solid #D9D9D9">
            <Company picture="medhub.svg" alt="medhub" />
          </Flex>

          <Flex px="18px" minH="120px" border="0.546876px solid #D9D9D9">
            <Company picture="krohne.svg" alt="krohne" />
          </Flex>
          <Flex px="18px" minH="120px" border="0.546876px solid #D9D9D9">
            <Company picture="surhan.svg" alt="surhan" />
          </Flex>
          <Flex px="18px" minH="120px" border="0.546876px solid #D9D9D9">
            <Company picture="ee.svg" alt="krohne" />
          </Flex>
          <Flex px="18px" minH="120px" border="0.546876px solid #D9D9D9">
            <Company picture="jumo.svg" alt="krohne" />
          </Flex>
        </Grid>
      </Box>
      <Box display={["none", "block"]}>
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
    </>
  );
};

export default Companies;
