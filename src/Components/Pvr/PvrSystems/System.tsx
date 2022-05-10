import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import { IMAGES_PATH } from "constants/settings";

type Props = {
  picture: string;
  text: string;
};

export const System: React.FC<Props> = ({ picture, text, children }) => {
  return (
    <Box
      flexBasis="50%"
      _first={{
        mb: "40px",
      }}
    >
      <Flex
        h={["164px", "328px", "328px", "328px", "328px"]}
        justifyContent="space-between"
        alignItems="center"
        p={[
          "0 35px 0 35px",
          "0 50px 0 35px",
          "0 50px 0 35px",
          "0 50px 0 35px",
          "0 100px 0 35px",
        ]}
        border="1px solid #B7B7B7"
        mb="30px"
      >
        <Box
          fontSize={["20px", "26px", "30px", "32px", "32px"]}
          letterSpacing="-0.04em"
          maxW={["160px", "55%", "100%", "60%", "60%"]}
        >
          {text}
        </Box>
        <Box h="90%">
          <Image
            src={`${IMAGES_PATH}/${picture}`}
            alt="system picture"
            h="100%"
          />
        </Box>
      </Flex>
      <Grid gridTemplateColumns="repeat(5, 1fr)" gap="1%">
        {children}
      </Grid>
    </Box>
  );
};
