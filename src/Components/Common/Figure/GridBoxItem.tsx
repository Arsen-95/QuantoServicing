import { Box, GridItem } from "@chakra-ui/react";

type GridBoxItemProps = {
  text: string;
  num: string;
};

const GridBoxItem: React.FC<GridBoxItemProps> = ({ text, num }) => {
  return (
    <GridItem border="1px solid #D9D9D9" pos="relative" p="8px 6px" h="120px">
      <Box
        fontWeight="300"
        fontSize="14px"
        lineHeight="99.5%"
        letterSpacing="-0.04em"
      >
        {text}
      </Box>
      <Box
        fontWeight="300"
        fontSize="20px"
        lineHeight="99.5%"
        letterSpacing="-0.04em"
        pos="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        {num}
      </Box>
    </GridItem>
  );
};

export default GridBoxItem;
