import { Box, Container, Grid } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import ServiceItem from "./ServiceItem";

export const ServicesList = () => {
  const { t } = useTranslation();

  return (
    <Box py={["50px", "70px", "70", "70px", "80px"]} bg="#23242B">
      <Container>
        <Grid
          justifyItems="center"
          rowGap="40px"
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(3, 1fr)",
          ]}
        >
          <ServiceItem
            href="/gti"
            name={t("titles:gti")}
            picture="gtiIcon.svg"
          />
          <ServiceItem
            href="/gis"
            name={t("titles:gis")}
            picture="gisIcon.svg"
          />
          <ServiceItem
            href="/pvr"
            name={t("titles:pvr")}
            picture="pvrIcon.svg"
          />
        </Grid>
      </Container>
    </Box>
  );
};
