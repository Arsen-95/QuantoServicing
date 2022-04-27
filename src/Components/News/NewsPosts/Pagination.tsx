import { Box, Flex } from "@chakra-ui/react";

const Pagination = () => {
  return (
    <Flex justifyContent="center">
      <Box
        as="button"
        textTransform="uppercase"
        fontFamily="Blender Pro"
        fontWeight="900"
        fontSize="14px"
        lineHeight="132%"
        letterSpacing="-0.0017819px"
        color="#B7B7B7"
        border="1px solid #B7B7B7"
        p="10px"
        _hover={{
          bg: "#393A47",
          color: "#FFF",
        }}
        transition="all 0.3s"
      >
        Посмотреть еще
      </Box>
    </Flex>
  );
};

export default Pagination;
