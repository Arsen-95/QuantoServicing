import {
  Box,
  Button,
  Container,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { ICONS_PATH, IMAGES_PATH } from "constants/settings";
import React from "react";

export const PvrVariants = () => {
  return (
    <Box pt="95px" pb="125px">
      <Container>
        <Box
          as="h5"
          fontStyle="normal"
          fontWeight="600"
          fontSize="40px"
          lineHeight="99.5%"
          letterSpacing="-0.04em"
          color="#494949"
          maxW="400px"
          mb="60px"
          pos="relative"
        >
          <Box>Виды прострелочно-взрывных работ</Box>
          <Popover trigger="hover">
            <PopoverTrigger>
              <Button
                cursor="pointer"
                pos="absolute"
                bottom="-3px"
                right="15%"
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
            <PopoverContent>
              <PopoverArrow />
              <PopoverBody
                fontFamily="Museo Sans Cyrl"
                fontWeight="300"
                fontSize="18px"
                lineHeight="125%"
                letterSpacing="-0.00240557px"
                textAlign="left"
              >
                Применяемые диаметры перфораторов: <b>Ø73, Ø89, Ø102</b>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
        <Flex
          gap="45px"
          fontStyle="normal"
          fontWeight="400"
          fontSize="32px"
          lineHeight="124%"
          letterSpacing="-0.00240557px"
        >
          <Box
            bg={`url(${IMAGES_PATH}/cabel.png) no-repeat right`}
            p="117px 15px"
            border="1px solid #8B8B8B"
            flex="1"
          >
            <Box maxW="210px">Перфорация на кабеле</Box>
          </Box>
          <Box
            bg={`url(${IMAGES_PATH}/pipe.png) no-repeat right`}
            p="117px 15px"
            border="1px solid #8B8B8B"
            flex="1"
          >
            <Box maxW="210px">Перфорация на трубах</Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
