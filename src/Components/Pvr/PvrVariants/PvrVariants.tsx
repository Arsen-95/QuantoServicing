import { Box, Container, Flex } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import { IMAGES_PATH } from "constants/settings";

export const PvrVariants = () => {
  const { t } = useTranslation();

  return (
    <Box bg="#23242B" as="section">
      <Container>
        <Box
          as="h5"
          fontWeight="600"
          lineHeight="99.5%"
          letterSpacing="-0.04em"
          maxW="500px"
          mb={["25px", "25px", "36px", "40px", "44px"]}
          pos="relative"
        >
          {t("headers:pvrVariants")}
        </Box>
        <Flex
          gap={["20px", "25px", "15px", "45px"]}
          lineHeight="124%"
          letterSpacing="-0.00240557px"
          flexDir={["column", "column", "row"]}
        >
          <Variant title="Перфорация на кабеле" picture="cabel" />
          <Variant title="Перфорация на трубах" picture="pipe" />
        </Flex>
      </Container>
    </Box>
  );
};

type VariantProps = {
  title: string;
  picture: string;
};

const Variant: React.FC<VariantProps> = ({ title, picture }) => {
  return (
    <Flex
      flexDir="column"
      bg={`url(${IMAGES_PATH}/${picture}.png) no-repeat right`}
      bgSize={["35%", "contain", "40%"]}
      p={["40px 15px 15px", "40px 15px 20px"]}
      h={["160px", "180", "190px", "250px", "330px"]}
      border="1px solid #737477"
      flex={["auto", "auto", "1"]}
    >
      <Box
        maxW={["210px", "100%", "140px", "190px", "210px"]}
        flex="1"
        fontSize={["14px", "20px", "20px", "28px", "32px"]}
        lineHeight="1.25"
      >
        {title}
      </Box>
      <Box
        maxW={["190px", "64%", "64%", "273px"]}
        fontSize={["12px", "12px", "14px", "16px", "18px"]}
        lineHeight="125%"
        letterSpacing="-0.00240557px"
        color="#B7B7B7"
      >
        Применяемые диаметры перфораторов: Ø73, Ø89, Ø102
      </Box>
    </Flex>
  );
};
