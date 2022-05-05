import { Box, Image, Text } from "@chakra-ui/react";

import { IMAGES_PATH } from "constants/settings";
import { string } from "yup";

type Props = {
  text: string;
};

export const PostContent: React.FC<Props> = ({ text }) => {
  return (
    <Box>
      <Box mb="50px" maxW="670px">
        <Image src={`${IMAGES_PATH}/gtiSlide3.png`} alt="news photo" />
      </Box>
      <Text
        maxW="670px"
        whiteSpace="pre-wrap"
        fontWeight="300"
        fontSize="18px"
        lineHeight="150%"
        letterSpacing="-0.00267285px"
        color="#111111"
        opacity="0.76"
        mb="100px"
      >
        {/* {text} */}
      </Text>
    </Box>
  );
};
