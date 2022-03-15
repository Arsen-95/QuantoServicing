import { Box, Flex, GridItem, Image } from "@chakra-ui/react";
import React, { FC } from "react";
import { ICONS_PATH } from "../../constants/settings";

type CompanyProps = {
  picture: string;
  alt: string;
};

const Company: FC<CompanyProps> = ({ picture, alt }) => {
  return (
    <GridItem>
      <Image src={`${ICONS_PATH}/${picture}`} alt={alt} />
    </GridItem>
  );
};

export default Company;
