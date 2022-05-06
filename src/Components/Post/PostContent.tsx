import { Box, Image, Text } from "@chakra-ui/react";

import { IMAGES_PATH } from "constants/settings";
import { useEffect, useRef } from "react";

type Props = {
  Texta: string;
};

export const PostContent: React.FC<Props> = ({ Texta }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    ref!.current!.innerHTML = Texta;
  });

  return (
    <Box>
      <Box mb="50px">
        <Image
          src={`${IMAGES_PATH}/gtiSlide3.png`}
          alt="news photo"
          objectFit="cover"
        />
      </Box>
      <Text
        fontSize="18px"
        lineHeight="150%"
        letterSpacing="-0.00267285px"
        color="#B7B7B7"
        opacity="0.76"
        ref={ref}
      ></Text>
    </Box>
  );
};

const Element = ({ children }: any) => {
  return <Box>{children}</Box>;
};
