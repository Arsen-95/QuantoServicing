import {
  Box,
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { ICONS_PATH, IMAGES_PATH } from "constants/settings";
import React, { FC } from "react";

type MethodProps = {
  methodName: string;
  picture: string;
  text?: any;
};

const Method: FC<MethodProps> = ({ methodName, text, picture }) => {
  return (
    <Flex
      position="relative"
      flexBasis="24%"
      border="0.827943px solid #D9D9D9"
      alignItems="center"
      px="15px"
      whiteSpace="pre-line"
      minH="210px"
      bg={`url(${IMAGES_PATH}/${picture}) no-repeat center right 20px`}
    >
      <Box
        maxW="60%"
        fontStyle="normal"
        fontWeight="400"
        fontSize="18px"
        lineHeight="125%"
        letterSpacing="-0.00240557px"
      >
        {methodName}
      </Box>

      <Popover trigger="hover">
        <PopoverTrigger>
          <Button
            cursor="pointer"
            pos="absolute"
            top="0"
            right="0"
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
          <PopoverHeader
            fontWeight="300"
            fontSize="18px"
            lineHeight="125%"
            letterSpacing="-0.00240557px"
          >
            {<b>{methodName}</b>}
          </PopoverHeader>
          <PopoverBody
            fontWeight="300"
            fontSize="18px"
            lineHeight="125%"
            letterSpacing="-0.00240557px"
            textAlign="left"
          >
            {text}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};

export default Method;
