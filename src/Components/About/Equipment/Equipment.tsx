import { Box, Container, Flex, List, ListItem, Text } from "@chakra-ui/react";

import { IMAGES_PATH } from "constants/settings";

export const Equipment = () => {
  return (
    <Box py="100px">
      <Container>
        <Box as="h5" fontSize={["20px", "26px", "36px", "50px"]} mb="40px">
          Оборудование
        </Box>
        <Text
          maxW="390px"
          fontSize="18px"
          lineHeight="100%"
          letterSpacing="-0.0017819px"
          color="#B7B7B7"
          mb="50px"
        >
          Оборудование компании Quanto является самым передовым на рынке и
          представлено в виде следующих наименований
        </Text>
        <Flex
          gap={["8px", "20px"]}
          flexDir={["column", "column", "column", "column", "row"]}
          alignItems="center"
        >
          <Flex flexBasis="50%" gap={["8px", "20px"]}>
            <Item
              title="Приборы, эксплуатируемые на геофизическом кабеле"
              picture="equipment1.png"
            >
              <ListItem>К1А-723 МИН-ГК</ListItem>
              <ListItem>К3А-723 МТ</ListItem>
              <ListItem>ПФ8-80Т</ListItem>
              <ListItem>ПФ-73 МТ</ListItem>
              <ListItem>АКТ-73Ц</ListItem>
              <ListItem>КСАТ РК7К</ListItem>
              <ListItem>ВИКИЗ</ListItem>
              <ListItem>МИН-ГК60</ListItem>
            </Item>
            <Item title="Автономно-кабельне приборы" picture="equipment2.png">
              <ListItem>АКС 5БК</ListItem>
              <ListItem>АКС 5ИК-ПС</ListItem>
              <ListItem>АКС Ин-Рез</ListItem>
              <ListItem>АКС Инкл-ГК</ListItem>
              <ListItem>АКС АК</ListItem>
              <ListItem>АКС МАК-МП</ListItem>
              <ListItem>АКС КомбиРК</ListItem>
              <ListItem>АКС ГГК-ЛП</ListItem>
              <ListItem>АКС ПФ6</ListItem>
              <ListItem>АКС МК-БМК</ListItem>
            </Item>
          </Flex>
          <Flex flexBasis="50%" gap={["8px", "20px"]}>
            <Item
              title="Геофизические приборы используемые при ПВР"
              picture="equipment3.png"
            >
              <ListItem>ГК, ЛМ, Т-76</ListItem>
              <ListItem>КСАТ АКПШ4</ListItem>
              <ListItem>КСАТ 5Т</ListItem>
              <ListItem>КСАТ 12</ListItem>
              <ListItem>АКС АК</ListItem>
            </Item>
            <Item title="Автоспецтехника " picture="equipment4.png">
              <ListItem>ПКС-5Г</ListItem>
              <ListItem mb="10px">ПКС-5М</ListItem>
              <ListItem mb="10px">
                ЛПС лаборатории перфораторных станции. ПКС подьемников
                каротажных станции
              </ListItem>
              <ListItem
                fontSize={["8px", "10px", "12px", "14px"]}
                letterSpacing="-0.00240557px"
              >
                ЛПС и ПКС выпуска{" "}
                <Box as="span" color="#5790FF">
                  2019+
                </Box>{" "}
                на базе КАМАЗ 43118 (6Х6) в соответствии с индивидуальными
                техническими условиями компании и требованиями международных
                стандартов
              </ListItem>
            </Item>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

type ItemProps = {
  title: string;
  picture: string;
};

const Item: React.FC<ItemProps> = ({ title, children, picture }) => {
  return (
    <Box
      w={["100%", "210px", "350px", "400px", "302px"]}
      h={["350px", "500px", "570px", "620px", "650px"]}
      border="1px solid #D9D9D9"
      p={["20px 5px 0", "30px 10px 0", "60px 12px 0"]}
      bg={`url(${IMAGES_PATH}/${picture}) no-repeat`}
      bgSize={["50%", "60%", "60%", "70%"]}
      bgPos="bottom 20px right"
    >
      <Text
        fontSize={["12px", "16px", "16px", "16px", "20px"]}
        lineHeight="100%"
        letterSpacing="-0.0017819px"
        mb="30px"
        maxW={["100%", "70%"]}
      >
        {title}
      </Text>
      <List
        fontWeight="300"
        whiteSpace="pre-line"
        lineHeight="116%"
        fontSize={["10px", "14px", "14px", "18px", "18px"]}
      >
        {children}
      </List>
    </Box>
  );
};
