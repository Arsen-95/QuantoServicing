import { Box, Container, Flex, Grid } from "@chakra-ui/react";
import { DownloadFile } from "Components/Common/DownloadFile";
import React from "react";

export const DocumentsList = () => {
  return (
    <Box py="100px" bg="#EDEFF0">
      <Container>
        <Box
          as="h5"
          fontStyle="normal"
          fontWeight="900"
          fontSize="40px"
          lineHeight="30px"
          letterSpacing="-0.00240557px"
          color="rgba(0, 0, 0, 0.75)"
          mb={5}
        >
          Файлы
        </Box>
        <Box
          fontWeight="300"
          fontSize="14px"
          lineHeight="16px"
          letterSpacing="-0.00240557px"
          color="#000000"
          mb="30px"
        >
          Документы общедоступного пользования
        </Box>
        <Grid gap={6} templateColumns="repeat(3, 1fr)">
          <DownloadFile fileName="Кадровая политика" fileSize={10.5} />
          <DownloadFile fileName="Кадровая политика" fileSize={10.5} />
          <DownloadFile fileName="Кадровая политика" fileSize={10.5} />
          <DownloadFile fileName="Кадровая политика" fileSize={10.5} />
          <DownloadFile fileName="Кадровая политика" fileSize={10.5} />
          <DownloadFile fileName="Кадровая политика" fileSize={10.5} />
        </Grid>
      </Container>
    </Box>
  );
};
