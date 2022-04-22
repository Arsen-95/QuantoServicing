import { Box } from "@chakra-ui/react";

type PaginationItemProps = {
  name: string;
};

const PaginationItem: React.FC<PaginationItemProps> = ({ name }) => {
  return (
    <Box
      _hover={{
        color: "#FFFFFF",
        background: "#365164",
      }}
      p="10px"
      fontFamily="Blender Pro"
      fontWeight="900"
      fontSize="14px"
      lineHeight="132%"
      letterSpacing="-0.0017819px"
      color="#365164"
      background="#F2F2F2"
      transition="all 0.2s"
    >
      {name}
    </Box>
  );
};

export default PaginationItem;
