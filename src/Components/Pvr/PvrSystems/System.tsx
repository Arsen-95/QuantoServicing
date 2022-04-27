import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import { IMAGES_PATH } from "constants/settings";
import { InfoBox } from "./InfoBox";

type Props = {
  picture: string;
  text: string;
};

export const System: React.FC<Props> = ({ picture, text, children }) => {
  return (
    <Box flexBasis="50%">
      <Flex
        h="328px"
        justifyContent="space-between"
        alignItems="center"
        p="0 100px 0 35px"
        border="1px solid #B7B7B7"
        mb="30px"
      >
        <Box fontSize="32px" letterSpacing="-0.04em" whiteSpace="pre-line">
          {text}
        </Box>
        <Box>
          <Image src={`${IMAGES_PATH}/${picture}`} alt="system picture" />
        </Box>
      </Flex>
      <Grid gridTemplateColumns="repeat(5, 1fr)" gap="1%">
        {children}
      </Grid>
    </Box>
  );
};
