import { Box, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useTranslation } from "next-i18next";

import { ICONS_PATH } from "constants/settings";

type ItemProps = {
  name: string;
  picture: string;
  href?: string;
  onClick?: any;
};

const ServiceItem: React.FC<ItemProps> = ({ name, picture, href, onClick }) => {
  const { t } = useTranslation();

  return (
    <Flex
      whiteSpace="pre-line"
      flex="1"
      flexDir="column"
      maxW="300px"
      pl="78px"
      background={`url(${ICONS_PATH}/${picture}) no-repeat 0 7px`}
    >
      <Box
        as="h5"
        flex="1"
        fontWeight="900"
        fontSize={["20px", "20px", "25px"]}
        lineHeight="30px"
        textTransform="uppercase"
        mb="18px"
        maxW="210px"
      >
        {name}
      </Box>
      <NextLink href={href ? href : "#"} passHref>
        <Link
          maxW="112px"
          fontWeight="600"
          fontSize="14px"
          lineHeight="17px"
          letterSpacing="-0.00133319px"
          color="#B7B7B7"
          border="1px solid #494949"
          p="10px 25px"
          _hover={{
            bg: "#000",
            color: "#FFF",
          }}
          transition="all 0.2s"
          onClick={onClick ? onClick : "none"}
        >
          {t("common:open")}
        </Link>
      </NextLink>
    </Flex>
  );
};

export default ServiceItem;
