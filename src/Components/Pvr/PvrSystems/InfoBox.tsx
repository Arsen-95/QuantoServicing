import { Box, GridItem, Text } from "@chakra-ui/react";

type InfoBoxProps = {
  text: string;
  value: string;
};

export const InfoBox: React.FC<InfoBoxProps> = ({ text, value }) => {
  return (
    <GridItem
      border="1px solid #B7B7B7"
      pos="relative"
      h="110px"
      p="6px 8px"
      color="#B7B7B7"
    >
      <Text fontSize="12px" lineHeight="99.5%" letterSpacing="-0.04em">
        {text}
      </Text>
      <Box
        pos="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        fontSize="20px"
      >
        {value}
      </Box>
    </GridItem>
  );
};
