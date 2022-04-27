import {
  Box,
  Button,
  Container,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import { ICONS_PATH, IMAGES_PATH } from "constants/settings";

export const PvrVariants = () => {
  const { t } = useTranslation();

  return (
    <Box pt="95px" pb="125px" bg="#23242B">
      <Container>
        <Box
          as="h5"
          fontWeight="600"
          fontSize="50px"
          lineHeight="99.5%"
          letterSpacing="-0.04em"
          maxW="500px"
          mb="60px"
          pos="relative"
        >
          <Box>{t("headers:pvrVariants")}</Box>
        </Box>
        <Flex
          gap="45px"
          fontSize="32px"
          lineHeight="124%"
          letterSpacing="-0.00240557px"
        >
          <Flex
            flexDir="column"
            bg={`url(${IMAGES_PATH}/cabel.png) no-repeat right`}
            p="117px 15px 15px"
            h="330px"
            border="1px solid #737477"
            flex="1"
          >
            <Box maxW="210px" flex="1">
              Перфорация на кабеле
            </Box>
            <Box
              maxW="273px"
              fontSize="18px"
              lineHeight="125%"
              letterSpacing="-0.00240557px"
              color="#B7B7B7"
            >
              Применяемые диаметры перфораторов: Ø73, Ø89, Ø102
            </Box>
          </Flex>
          <Flex
            bg={`url(${IMAGES_PATH}/pipe.png) no-repeat right`}
            flexDir="column"
            p="117px 15px 15px"
            h="330px"
            border="1px solid #737477"
            flex="1"
          >
            <Box maxW="210px" flex="1">
              Перфорация на трубах
            </Box>
            <Box
              maxW="273px"
              fontSize="18px"
              lineHeight="125%"
              letterSpacing="-0.00240557px"
              color="#B7B7B7"
            >
              Применяемые диаметры перфораторов: Ø73, Ø89, Ø102
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
