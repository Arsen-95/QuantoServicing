import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import { DownloadFile } from "Components/Common/DownloadFile";

export const PvrDocs = () => {
  const { t } = useTranslation();

  return (
    <Box pt="50px" pb="150px" background="#FAFAFA">
      <Container>
        <Box
          as="h5"
          fontWeight="600"
          fontSize="40px"
          lineHeight="99.5%"
          letterSpacing="-0.04em"
          color="rgba(0, 0, 0, 0.75)"
          mb="35px"
        >
          {t("headers:documents")}
        </Box>
        <Text
          fontWeight="300"
          fontSize="18px"
          lineHeight="22px"
          letterSpacing="-0.00240557px"
          color="#000000"
          opacity="0.7"
          maxW="572px"
          mb="55px"
        >
          Наша компания имеет лицензию на реализацию, транспортировку и хранение
          взрывчатых материалов, а также разрешения на право производства работ
          с взрывчатыми материалами и допуск специальной автотехники (ЛПС) к
          перевозке взрывчатых материалов.
        </Text>
        <Flex gap="6">
          <DownloadFile fileName="Лицензия на ПВР" fileSize={10} />
        </Flex>
      </Container>
    </Box>
  );
};
