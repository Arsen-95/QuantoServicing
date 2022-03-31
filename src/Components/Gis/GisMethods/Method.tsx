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
import { ICONS_PATH } from "constants/settings";
import React, { FC } from "react";

type MethodProps = {
  methodName: string;
  text?: any;
};

const Method: FC<MethodProps> = ({ methodName, text }) => {
  return (
    <Flex
      position="relative"
      flexBasis="24%"
      border="0.827943px solid #000000"
      alignItems="center"
      justifyContent="center"
      p="82px 52px"
      textAlign="center"
      whiteSpace="pre-line"
    >
      <Box>{methodName}</Box>

      <Popover trigger="hover">
        <PopoverTrigger>
          <Button
            position="relative"
            cursor="pointer"
            pos="absolute"
            top="20px"
            right="20px"
            h="40px"
            w="14px !important"
            background={`url(${ICONS_PATH}/info.svg) no-repeat center`}
            _hover={{
              background: `url(${ICONS_PATH}/info.svg) no-repeat center`,
            }}
            _active={{
              background: `url(${ICONS_PATH}/info.svg) no-repeat center`,
              border: "none",
            }}
            _focus={{
              border: "none",
            }}
          ></Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>{<b>{methodName}</b>}</PopoverHeader>
          <PopoverBody textAlign="left">{text}</PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};

export default Method;
