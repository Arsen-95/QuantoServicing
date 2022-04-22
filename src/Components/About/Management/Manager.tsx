import { Box, Flex, Link } from "@chakra-ui/react";

type ManagerProps = {
  name: string;
  position: string;
  email: string;
  number: number;
};

const Manager: React.FC<ManagerProps> = ({ name, position, email }) => {
  return (
    <>
      <Flex py="44px" w="100%" alignItems="center">
        <Box>
          <Box
            fontWeight="300"
            fontSize="18px"
            lineHeight="14px"
            letterSpacing="-0.00199167px"
            color="#494949"
            mb="10px"
          >
            {position}
          </Box>
          <Box
            fontWeight="600"
            fontSize="26px"
            lineHeight="130%"
            letterSpacing="-0.04em"
            mb="10px"
            whiteSpace="pre-line"
          >
            {name.split(" ").join(`\n`)}
          </Box>
          <Box
            fontWeight="300"
            fontSize="18px"
            lineHeight="14px"
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
