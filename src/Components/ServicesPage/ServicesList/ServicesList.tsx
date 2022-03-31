import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import ServiceItem from "./ServiceItem";

export const ServicesList = () => {
  return (
    <Box py="100px">
      <Container>
        <Flex justifyContent="space-between">
          <ServiceItem
            href="/gti"
            name="геолого-технологические исследования"
            picture="gtiIcon.svg"
          />
          <ServiceItem
            href="/gis"
            name="геофизические исследования скважин"
            picture="gisIcon.svg"
          />
          <ServiceItem
            href="/pvr"
            name={`прострелочно-взрывные \nработы`}
            picture="pvrIcon.svg"
          />
        </Flex>
      </Container>
    </Box>
  );
};
