import { Box, Flex, Grid, Table, Tbody, Td, Tr } from "@chakra-ui/react";

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
            <Company picture="gazli.svg" alt="gazli" />
          </Flex>
          <Flex px="18px" minH="120px" border="0.546876px solid #D9D9D9">
            <Company picture="geofizika.svg" alt="geofizika" />
          </Flex>
          <Flex px="18px" minH="120px" border="0.546876px solid #D9D9D9">
            <Company picture="seg.svg" alt="seg" />
          </Flex>
          <Flex px="18px" minH="120px" border="0.546876px solid #D9D9D9">
            <Company picture="bbgv.svg" alt="bbgv" />
          </Flex>

          <Flex px="18px" minH="120px" border="0.546876px solid #D9D9D9">
            <Company picture="eriell.svg" alt="eriell" />
          </Flex>
          <Flex px="18px" minH="120px" border="0.546876px solid #D9D9D9">
            <Company picture="surhan.svg" alt="surhan" />
          </Flex>
          <Flex px="18px" minH="120px" border="0.546876px solid #D9D9D9">
            <Company picture="ee.svg" alt="krohne" />
          </Flex>
          <Flex px="18px" minH="120px" border="0.546876px solid #D9D9D9">
            <Company picture="grdc.svg" alt="grdc" />
          </Flex>
        </Grid>
      </Box>
      <Box display={["none", "block"]}>
        <Table className={cl.border}>
          <Tbody>
            <Tr h="120px">
              <Td>
                <Company picture="gazli.svg" alt="gazli" />
              </Td>
              <Td>
                <Company picture="geofizika.svg" alt="geofizika" />
              </Td>
              <Td>
                <Company picture="seg.svg" alt="seg" />
              </Td>
              <Td>
                <Company picture="bbgv.svg" alt="bbgv" />
              </Td>
            </Tr>
            <Tr h="120px">
              <Td>
                <Company picture="eriell.svg" alt="eriell" />
              </Td>
              <Td>
                <Company picture="surhan.svg" alt="surhan" />
              </Td>
              <Td>
                <Company picture="ee.svg" alt="ee" />
              </Td>
              <Td>
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
