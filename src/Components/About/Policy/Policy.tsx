import { Box, Container, Flex, Grid, Text } from "@chakra-ui/react";
import { DownloadFile } from "Components/Common/DownloadFile";
import React from "react";

export const Policy = () => {
  return (
    <Box background="#FAFAFA" py="100px">
      <Container>
        <Box
          as="h5"
          fontStyle="normal"
          fontWeight="600"
          fontSize="40px"
          lineHeight="99.5%"
          letterSpacing="-0.04em"
          color="rgba(0, 0, 0, 0.75)"
          mb="35px"
        >
          Политика компании
        </Box>
        <Text
          fontFamily="Museo Sans Cyrl"
          fontStyle="normal"
          fontWeight="300"
          fontSize="18px"
          lineHeight="22px"
          letterSpacing="-0.00240557px"
          color="#000000"
          opacity="0.7"
          mb="50px"
          maxW="434px"
        >
          В целях эффективного предоставления услуг потребителям и устойчивого и
          стабильного развития компании внедрены и функционируют корпоративные
          политики
        </Text>
        <Grid
          gap={6}
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
        >
          <DownloadFile fileName="Кадровая политика" fileSize={10.5} />
          <DownloadFile fileName="Политика безопасности" fileSize={10.5} />
          <DownloadFile fileName="Техническая политика" fileSize={10.5} />
        </Grid>
      </Container>
    </Box>
  );
};
