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
      border="0.827943px solid #D9D9D9"
      alignItems="center"
      px="15px"
      whiteSpace="pre-line"
      minH="210px"
    >
      <Box
        h={["100px", "180px", "180px", "200px"]}
        display="flex"
        alignItems="center"
        bg={[`none`, `url(${IMAGES_PATH}/${picture}) no-repeat right`]}
        bgSize={["25%", "25%", "20%", "25%", "30%"]}
      >
        <Box
          maxW={["100%", "72%", "72%", "75%", "70%"]}
          fontSize={["12px", "14px", "20px", "16px", "18px"]}
          lineHeight="125%"
          letterSpacing="-0.00240557px"
        >
          {methodName}
        </Box>
      </Box>
      <Text
        fontWeight="300"
        fontSize={["10px", "12px", "16px", "14px", "16px"]}
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
