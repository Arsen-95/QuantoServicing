import {
  Box,
  Container,
  Flex,
  Grid,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";

import { IMAGES_PATH } from "constants/settings";

export const Equipment = () => {
  return (
    <Box as="section" bg="#393A47">
      <Container>
        <Box as="h5" mb={["25px", "25px", "30px", "30px", "44px"]}>
          Оборудование
        </Box>
        <Text
          maxW="390px"
          fontSize={["14px", "14px", "16px", "18px"]}
          lineHeight="100%"
          letterSpacing="-0.0017819px"
          color="#B7B7B7"
          mb="50px"
        >
          Компания располагает самым современным передовым оборудованием, с
          которым может ознакомиться любой заказчик
        </Text>
        <Grid
          gridTemplateColumns={[
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={["10px", "10px", "10px", "15px", "20px"]}
        >
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
          <Item
            title="Геофизические приборы, используемые при ПВР"
            picture="equipment3.png"
          >
            <ListItem>ГК, ЛМ, Т-76</ListItem>
            <ListItem>КСАТ АКПШ4</ListItem>
            <ListItem>КСАТ 5Т</ListItem>
            <ListItem>КСАТ 12</ListItem>
            <ListItem>АКС АК</ListItem>
          </Item>
          <Item title="Автоспецтехника" picture="equipment4.png">
            <ListItem>ПКС-5Г</ListItem>
            <ListItem mb="10px">ПКС-5М</ListItem>
            <ListItem mb="10px">
              ЛПС лаборатории перфораторных станции. ПКС подьемников каротажных
              станции
            </ListItem>
            <ListItem
              fontSize={["10px", "14px", "12px", "14px"]}
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
        </Grid>
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
      w="100%"
      h={["380px", "550px", "570px", "650px", "650px"]}
      border="1px solid #D9D9D9"
      p={["0px 5px 0", "0px 10px 0", "0px 15px 0"]}
      bg={`url(${IMAGES_PATH}/${picture})  no-repeat`}
      bgSize={["50%", "60%", "60%", "70%"]}
      bgPos="bottom 20px right"
    >
      <Flex h={["80px", "120px", "150px", "120px"]} alignItems="center">
        <Text
          fontSize={["12px", "18px", "14px", "16px", "20px"]}
          lineHeight="100%"
          letterSpacing="-0.0017819px"
        >
          {title}
        </Text>
      </Flex>
      <List
        fontWeight="300"
        whiteSpace="pre-line"
        lineHeight="116%"
        fontSize={["10px", "16px", "14px", "16px", "18px"]}
      >
        {children}
      </List>
    </Box>
  );
};
