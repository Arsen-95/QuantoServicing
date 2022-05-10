import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import { IMAGES_PATH } from "constants/settings";

export const PvrMap = () => {
  return (
    <Box as="section">
      <Container>
        <Box
          as="h5"
          fontWeight="900"
          lineHeight="105%"
          letterSpacing="-0.04em"
          maxW={["280px", "320px", "450px", "450px", "600px"]}
          mb="20px"
        >
          Активность деятельности компании в регионах
        </Box>
        <Flex justifyContent="end" mb={["20px", "20px", "0px"]}>
          <Box
            border="1px solid rgba(73, 73, 73, 0.5)"
            p={["14px", "20px", "24px", "28px", "32px"]}
            maxW="277px"
          >
            <Definition bg="#106199" text="- от 40 до 70 заявок" />
            <Definition bg="#1D7CBE" text="- от 20 до 40 заявок" />
            <Definition bg="#4597D0" text="- от 10 до 20 заявок" />
            <Definition bg="#95B8D0" text="- от 0 до 10 заявок" />
          </Box>
        </Flex>
        <Box>
          <Image margin="0 auto" src={`${IMAGES_PATH}/pvrMap.png`} alt="map" />
        </Box>
      </Container>
    </Box>
  );
};

type Props = {
  bg: string;
  text: string;
};

const Definition: React.FC<Props> = ({ bg, text }) => {
  return (
    <Flex
      _notLast={{
        mb: "24px",
      }}
    >
      <Box
        w={["16px", "18px", "20px", "24px", "28px"]}
        h={["16px", "18px", "20px", "24px", "28px"]}
        bg={bg}
        mr="12px"
      ></Box>
      <Text
        fontWeight="300"
        fontSize={["10px", "10px", "14px", "16px", "18px"]}
        lineHeight="99.5%"
        letterSpacing="-0.00240557px"
        color="#B7B7B7"
      >
        {text}
      </Text>
    </Flex>
  );
};
