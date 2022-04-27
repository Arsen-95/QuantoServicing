import { Box, Text } from "@chakra-ui/react";

import { IMAGES_PATH } from "constants/settings";

type MethodProps = {
  methodName: string;
  picture: string;
  text?: any;
};

const Method: React.FC<MethodProps> = ({ methodName, text, picture }) => {
  return (
    <Box
      flexBasis="24%"
      border="0.827943px solid #D9D9D9"
      alignItems="center"
      px="15px"
      whiteSpace="pre-line"
      minH="210px"
    >
      <Box
        h="200px"
        display="flex"
        alignItems="center"
        bg={`url(${IMAGES_PATH}/${picture}) no-repeat center right`}
      >
        <Box
          maxW="63%"
          fontSize="18px"
          lineHeight="125%"
          letterSpacing="-0.00240557px"
        >
          {methodName}
        </Box>
      </Box>
      <Text
        fontWeight="300"
        fontSize="18px"
        lineHeight="150%"
        letterSpacing="-0.00236129px"
        textAlign="left"
        color="#B7B7B7"
        pb="50px"
      >
        {text}
      </Text>
    </Box>
  );
};

export default Method;
