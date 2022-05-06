import { Box, Image, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

import { IMAGES_PATH } from "constants/settings";

type Props = {
  text: string;
};

export const PostContent: React.FC<Props> = ({ text }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    ref!.current!.innerHTML = text;
  });

  return (
    <Box>
      <Box mb="50px">
        <Image
          src={`${IMAGES_PATH}/pipeline.png`}
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
