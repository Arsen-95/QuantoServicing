import { Box } from "@chakra-ui/react";
import { ReactNode, useRef } from "react";

const Year: React.FC<ReactNode> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <Box
        ref={ref}
        fontFamily="Blender Pro"
        fontWeight="900"
        letterSpacing="-0.00267285px"
        text-transform="uppercase"
        mb="5px"
      >
        {children}
      </Box>
    </>
  );
};

export default Year;
