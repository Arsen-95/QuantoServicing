import { Box, Flex, Grid, Table, Tbody, Td, Tr } from "@chakra-ui/react";

import Company from "./Company";
import cl from "./table.module.css";

const Companies = () => {
  return (
    <>
      <Box display={["block", "none"]}>
        <Grid templateColumns="repeat(2, 1fr)" gap="10px">
          <Flex
            w="100%"
            justifyContent="center"
            h="100%"
            minH="120px"
            border="0.546876px solid #D9D9D9"
          >
            <Company picture="gazli.svg" alt="gazli" />
          </Flex>
          <Flex
            w="100%"
            justifyContent="center"
            h="100%"
            minH="120px"
            border="0.546876px solid #D9D9D9"
          >
            <Company picture="geofizika.svg" alt="geofizika" />
          </Flex>
          <Flex
            w="100%"
            justifyContent="center"
            h="100%"
            minH="120px"
            border="0.546876px solid #D9D9D9"
          >
            <Company picture="seg.svg" alt="seg" />
          </Flex>
          <Flex
            w="100%"
            justifyContent="center"
            h="100%"
            minH="120px"
            border="0.546876px solid #D9D9D9"
          >
            <Company picture="bbgv.svg" alt="bbgv" />
          </Flex>

          <Flex
            w="100%"
            justifyContent="center"
            h="100%"
            minH="120px"
            border="0.546876px solid #D9D9D9"
          >
            <Company picture="eriell.svg" alt="eriell" />
          </Flex>
          <Flex
            w="100%"
            justifyContent="center"
            h="100%"
            minH="120px"
            border="0.546876px solid #D9D9D9"
          >
            <Company picture="surhan.svg" alt="surhan" />
          </Flex>
          <Flex
            w="100%"
            justifyContent="center"
            h="100%"
            minH="120px"
            border="0.546876px solid #D9D9D9"
          >
            <Company picture="ee.svg" alt="krohne" />
          </Flex>
          <Flex
            w="100%"
            justifyContent="center"
            h="100%"
            minH="120px"
            border="0.546876px solid #D9D9D9"
          >
            <Company picture="grdc.svg" alt="grdc" />
          </Flex>
        </Grid>
      </Box>
      <Box display={["none", "block"]}>
        <Table className={cl.border}>
          <Tbody>
            <Tr h="120px">
              <Td w="24%">
                <Company picture="gazli.svg" alt="gazli" />
              </Td>
              <Td w="24%">
                <Company picture="geofizika.svg" alt="geofizika" />
              </Td>
              <Td w="24%">
                <Company picture="seg.svg" alt="seg" />
              </Td>
              <Td w="24%">
                <Company picture="bbgv.svg" alt="bbgv" />
              </Td>
            </Tr>
            <Tr h="120px">
              <Td w="24%">
                <Company picture="eriell.svg" alt="eriell" />
              </Td>
              <Td w="24%">
                <Company picture="surhan.svg" alt="surhan" />
              </Td>
              <Td w="24%">
                <Company picture="ee.svg" alt="ee" />
              </Td>
              <Td w="24%">
                <Company picture="grdc.svg" alt="grdc" />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

export default Companies;
