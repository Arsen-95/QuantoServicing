import { Box, Flex, Link } from "@chakra-ui/react";
import React, { FC } from "react";

type ManagerProps = {
  name: string;
  position: string;
  email: string;
  number: number;
};

const Manager: FC<ManagerProps> = ({ name, position, number, email }) => {
  return (
    <>
      <Flex py="44px" w="100%" alignItems="center">
        <Box
          mr="46px"
          fontStyle="normal"
          fontWeight="600"
          fontSize="78px"
          lineHeight="99.5%"
          textAlign="center"
          letterSpacing="-0.04em"
          color="rgba(0, 0, 0, 0.75)"
        >
          {number}
        </Box>
        <Box>
          <Box
            fontWeight="300"
            fontSize="10.7633px"
            lineHeight="13px"
            letterSpacing="-0.00199167px"
            color="#494949"
            mb="10px"
          >
            {position}
          </Box>
          <Box
            fontStyle="normal"
            fontWeight="600"
            fontSize="16px"
            lineHeight="99.5%"
            letterSpacing="-0.04em"
            mb="10px"
            whiteSpace="pre-line"
          >
            {name.split(" ").join(`\n`)}
          </Box>
          <Box
            fontStyle="normal"
            fontWeight="300"
            fontSize="10.7633px"
            lineHeight="13px"
            letterSpacing="-0.00199167px"
            color="#494949"
          >
            <Link href={`mailto:${email}`}>{email}</Link>
          </Box>
        </Box>
      </Flex>
      <Box
        h="1px"
        maxW="660px"
        bg="linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 80.15%)"
      ></Box>
    </>
  );
};

export default Manager;
