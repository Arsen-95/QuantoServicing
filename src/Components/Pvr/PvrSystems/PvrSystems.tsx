import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { InfoBox } from "./InfoBox";
import { System } from "./System";

export const PvrSystems = () => {
  return (
    <Box bg="#393A47" py={["50px", "70px", "70", "70px", "80px"]}>
      <Container>
        <Flex
          gap="15px"
          mb="40px"
          flexDir={["column", "column", "column", "row"]}
        >
          <System picture="system1.png" text={"Перфосистема – СКОРПИОН"}>
            <InfoBox text="Диаметр перфосистемы" value="Ø73" />
            <InfoBox text="Тип заряда" value="ГП" />
            <InfoBox text="Вид заряда" value="Гексоген" />
            <InfoBox
              text="Диаметр входного отверстия по API 19B, мм"
              value="9,9"
            />
            <InfoBox text="Глубина пробития по API 19B, мм" value="846" />
            <InfoBox text="Диаметр перфосистемы" value="Ø89" />
            <InfoBox text="Тип заряда" value="ГП" />
            <InfoBox text="Вид заряда" value="Гексоген" />
            <InfoBox
              text="Диаметр входного отверстия по API 19B, мм"
              value="8,82"
            />
            <InfoBox text="Глубина пробития по API 19B, мм" value="1 073" />
            <InfoBox text="Диаметр перфосистемы" value="Ø102" />
            <InfoBox text="Тип заряда" value="ГП" />
            <InfoBox text="Вид заряда" value="Гексоген" />
            <InfoBox
              text="Диаметр входного отверстия по API 19B, мм"
              value="12,8"
            />
            <InfoBox text="Глубина пробития по API 19B, мм" value="1 130" />
          </System>

          <System picture="system2.png" text={`Перфосистема – ОРИОН`}>
            <InfoBox text="Диаметр перфосистемы" value="Ø73" />
            <InfoBox text="Тип заряда" value="СГП" />
            <InfoBox text="Вид заряда" value="Октоген" />
            <InfoBox
              text="Диаметр входного отверстия по API 19B, мм"
              value="8,2"
            />
            <InfoBox text="Глубина пробития по API 19B, мм" value="991" />
            <InfoBox text="Диаметр перфосистемы" value="Ø89" />
            <InfoBox text="Тип заряда" value="СГП" />
            <InfoBox text="Вид заряда" value="Октоген" />
            <InfoBox
              text="Диаметр входного отверстия по API 19B, мм"
              value="10,8"
            />
            <InfoBox text="Глубина пробития по API 19B, мм" value="1 042" />
            <InfoBox text="Диаметр перфосистемы" value="Ø102" />
            <InfoBox text="Тип заряда" value="ГП" />
            <InfoBox text="Вид заряда" value="Октоген" />
            <InfoBox
              text="Диаметр входного отверстия по API 19B, мм"
              value="11,5"
            />
            <InfoBox text="Глубина пробития по API 19B, мм" value="1 131" />
          </System>
        </Flex>
        <Text
          fontSize="18px"
          lineHeight="99.5%"
          letterSpacing="-0.04em"
          color="#B7B7B7"
          whiteSpace="pre-line"
          fontWeight="300"
        >
          {`Не более 24 часов \nпри температуре 150 ºС`}
        </Text>
      </Container>
    </Box>
  );
};
