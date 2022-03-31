import { Box, Flex, Link } from "@chakra-ui/react";
import { ICONS_PATH } from "constants/settings";
import React, { FC } from "react";

type FileProps = {
  fileName: string;
  fileSize: number;
};

export const DownloadFile: FC<FileProps> = ({ fileName, fileSize }) => {
  return (
    <Link
      download
      pos="relative"
      flex="1"
      maxW="411px"
      h="70px"
      background={`url(${ICONS_PATH}/pdfFile.svg) no-repeat 3px 50% #FFF`}
      fontFamily="Museo Sans Cyrl"
      p="20px 73px"
    >
      <Box
        fontWeight="400"
        fontSize="14px"
        lineHeight="17px"
        letterSpacing="-0.00240557px"
        color="#000000"
      >
        {fileName}
      </Box>
      <Box fontSize="10px" lineHeight="12px">
        {fileSize} мб
      </Box>
      <Box
        w="12px"
        h="12px"
        pos="absolute"
        top="50%"
        right="20px"
        transform="translate(0, -50%)"
        background={`url(${ICONS_PATH}/download.svg) no-repeat`}
      ></Box>
    </Link>
  );
};
