import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { ICONS_PATH, IMAGES_PATH } from "constants/settings";
import React, { FC } from "react";
import GridBoxItem from "./GridBoxItem";

type FigureProps = {
  title: string;
  text: string;
  picture: string;
  backgroundColor: string;
  info?: any;
};

export const Figure: FC<FigureProps> = ({
  title,
  text,
  picture,
  backgroundColor,
  info,
}) => {
  return (
    <Box background={backgroundColor} pt="80px" pb="50px">
      <Container minH="100%">
        <Flex
          pos="relative"
          justifyContent="space-between"
          flexDir={["column", "column", "row"]}
        >
          <Box>
            <Box
              as="h5"
              fontStyle="normal"
              fontWeight="600"
              fontSize={["20px", "26px", "36px", "40px"]}
              lineHeight="99.5%"
              letterSpacing="-0.04em"
              color="#494949"
              mb="27px"
              maxW="622px"
              whiteSpace="pre-line"
              fontFamily="Blender Pro"
            >
              {title}
            </Box>
            <Box
              maxW="568px"
              fontStyle="normal"
              fontWeight="300"
              fontSize={["16px", "16px", "18px"]}
              lineHeight="1.2"
              letterSpacing="-0.00240557px"
              color="#000000"
              opacity="0.7"
              whiteSpace="pre-line"
            >
              {text}
            </Box>
          </Box>
          <Box
            minH="100%"
            w="500px"
            m={["0 auto", "0 auto", "0"]}
            pos="relative"
          >
            <Image src={`${IMAGES_PATH}/${picture}`} alt="picture draw" />
            {info && (
              <Popover direction="ltr" trigger="hover" size="xl">
                <PopoverTrigger>
                  <Button
                    cursor="pointer"
                    pos="absolute"
                    top="0"
                    right="30%"
                    h="40px"
                    w="40px !important"
                    background={`url(${ICONS_PATH}/info.svg) no-repeat center`}
                    backgroundSize="23px 23px"
                    _hover={{
                      background: `url(${ICONS_PATH}/info.svg) no-repeat center 23px 23px`,
                    }}
                    _active={{
                      background: `url(${ICONS_PATH}/info.svg) no-repeat center 23px 23px`,
                      border: "none",
                    }}
                    _focus={{
                      border: "none",
                    }}
                  ></Button>
                </PopoverTrigger>
                <PopoverContent w="max-content">
                  <PopoverArrow />
                  <PopoverHeader
                    fontStyle="normal"
                    fontWeight="600"
                    fontSize="18px"
                    lineHeight="99.5%"
                    letterSpacing="-0.04em"
                    color="#494949"
                  >
                    Перфосистема - СКОРПИОН
                  </PopoverHeader>
                  <PopoverBody
                    fontWeight="300"
                    fontSize="18px"
                    lineHeight="125%"
                    letterSpacing="-0.00240557px"
                    textAlign="left"
                  >
                    <Grid
                      templateColumns="repeat(5, 150px)"
                      gap="8px"
                      mb="14px"
                    >
                      <GridBoxItem text="Диаметр перфосистемы" num="Ø73" />
                      <GridBoxItem text="Тип заряда" num="СГП" />
                      <GridBoxItem text="Вид заряда" num="Гексоген" />
                      <GridBoxItem
                        text="Диаметр входного отверстия по API 19B, мм"
                        num="9,9"
                      />
                      <GridBoxItem
                        text="Глубина пробития по API 19B, мм"
                        num="846"
                      />
                      <GridBoxItem text="Диаметр перфосистемы" num="Ø89" />
                      <GridBoxItem text="Тип заряда" num="СГП" />
                      <GridBoxItem text="Вид заряда" num="Гексоген" />
                      <GridBoxItem
                        text="Диаметр входного отверстия по API 19B, мм"
                        num="8.84"
                      />
                      <GridBoxItem
                        text="Глубина пробития по API 19B, мм"
                        num="1073"
                      />
                      <GridBoxItem text="Диаметр перфосистемы" num="Ø102" />
                      <GridBoxItem text="Тип заряда" num="СГП" />
                      <GridBoxItem text="Вид заряда" num="Гексоген" />
                      <GridBoxItem
                        text="Диаметр входного отверстия по API 19B, мм"
                        num="12,8"
                      />
                      <GridBoxItem
                        text="Глубина пробития по API 19B, мм"
                        num="1130"
                      />
                    </Grid>
                    <Box
                      fontWeight="300"
                      fontSize="16px"
                      lineHeight="99.5%"
                      letterSpacing="-0.04em"
                    >
                      *Температура не более 24 - при температуре 150 ºС
                    </Box>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            )}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
