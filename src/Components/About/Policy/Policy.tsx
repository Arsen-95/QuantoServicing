import { Box, Container, Grid, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import { DownloadFile } from "Components/Common/DownloadFile";

export const Policy = () => {
  const [t] = useTranslation();

  return (
    <Box bg="#2F303B" py="100px">
      <Container>
        <Box
          as="h5"
          fontWeight="600"
          fontSize="50px"
          lineHeight="99.5%"
          letterSpacing="-0.04em"
          mb="35px"
        >
          {t("headers:policy")}
        </Box>
        <Text
          fontWeight="300"
          fontSize="18px"
          lineHeight="22px"
          letterSpacing="-0.00240557px"
          color="#B7B7B7"
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
          <DownloadFile bg="#393A47" fileName="ПБиОСС" fileSize={10.5} />
          <DownloadFile
            bg="#393A47"
            fileName="Кадровая политика"
            fileSize={10.5}
          />
        </Grid>
      </Container>
    </Box>
  );
};
