import { Box, Link, LinkProps } from "@chakra-ui/react";

import { ICONS_PATH } from "constants/settings";

type FileProps = {
  fileName: string;
  fileSize: number;
  bg: string;
};

export const DownloadFile: React.FC<FileProps & LinkProps> = ({
  fileName,
  fileSize,
  bg,
}) => {
  return (
    <Link
      pos="relative"
      flex="1"
      maxW="410px"
      h="70px"
      background={`url(${ICONS_PATH}/pdfFile.svg) no-repeat 3px 50% ${bg}`}
      p="20px 73px"
    >
      <Box
        fontSize="14px"
        lineHeight="17px"
        letterSpacing="-0.00240557px"
        mb="3px"
      >
        {fileName}
      </Box>
      <Box fontSize="10px" lineHeight="12px" color="#B7B7B7">
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
