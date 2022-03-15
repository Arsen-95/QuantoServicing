import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { IMAGES_PATH } from "../../constants/settings";

const Enviroment = () => {
  return (
    <Box pt="100px" position="relative">
      <Container>
        <Flex>
          <Box py="128px" flexBasis="46%">
            <Box
              as="h4"
              letterSpacing="-2.50267px"
              fontSize="75px"
              lineHeight="62px"
              fontWeight="900"
              mb={8}
              fontFamily="Blender Pro"
              textTransform="uppercase"
              color="#494949"
            >
              Защита окружающей среды
            </Box>
            <Text
              mb={9}
              fontFamily="Museo Sans Cyrl"
              color="rgba(0, 0, 0, 0.75)"
              fontSize="14"
              lineHeight="132%"
              maxW="268px"
            >
              Мы осознаем, что производственный процесс по бурению скважин и их
              обслуживанию в целом представляет потенциальную угрозу для природы
              и признаем свою ответственность перед обществом и будущими
              поколениями за сохранность окружающей среды, бережное отношение к
              флоре и фауне, рациональное использование природных ресурсов.
            </Text>
          </Box>
          <Box position="absolute" right="0" h="695px">
            <Image
              src={`${IMAGES_PATH}/enviroment.png`}
              alt="desert"
              w="100%"
              h="100%"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Enviroment;
