import { Box, GridItem, Text } from "@chakra-ui/react";
import { useCallback, useEffect, useRef, useState } from "react";

import CountUp from "react-countup";

type ValueProps = {
  text: string;
  num: string;
  height: string | {};
  numSize: any;
  textSize: any;
  padding: string;
  textWidth?: string;
  flexBasis?: string;
  plus?: any;
  visibility?: any;
};

export const StatsBox: React.FC<ValueProps> = ({
  text,
  num,
  height,
  numSize,
  textSize,
  padding,
  textWidth,
  flexBasis,
  plus = false,
}) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState(false);

  const numbers = num.split("/");
  const [num1, num2] = numbers;

  const handleScroll = useCallback(() => {
    const elem = parentRef.current;
    if (elem) {
      const height = document.body.clientHeight;
      const top = parentRef.current?.getBoundingClientRect().top;
      const elementHeight = elem.clientHeight - elem.clientHeight * 0.4;
      const diff = height - Number(top);

      if (diff > 0 && diff >= Number(elementHeight)) {
        setState(true);
      }
    }
  }, []);

  useEffect(() => {
    handleScroll();
    if (window) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (state) {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [state, handleScroll]);

  return (
    <GridItem
      flexBasis={flexBasis && flexBasis}
      ref={parentRef}
      p={padding}
      border="1px solid #D9D9D9"
      h={height}
      position="relative"
      visibility={+num1 > 0 ? "visible" : "hidden"}
      opacity={+num1 > 0 ? "1" : "0"}
      display={+num1 > 0 ? "block" : ["none", "none", "block"]}
      transition="all 1s"
    >
      <Text
        fontWeight="300"
        fontSize={textSize}
        lineHeight="120%"
        letterSpacing="0.00240557px"
        color="#494949"
        maxW={textWidth && textWidth}
        whiteSpace="pre-line"
      >
        {text}
      </Text>
      {state && (
        <Box
          w="100%"
          textAlign="center"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          letterSpacing="-3.00267px"
          textTransform="uppercase"
          color="#8C949D"
          fontSize={numSize}
        >
          <CountUp
            decimals={+num1 >= 1 ? 0 : 2}
            duration={2}
            end={+num1}
            separator=" "
            suffix={plus ? "+" : ""}
          />
          {num2 && (
            <Box as="span">
              /
              <CountUp
                decimals={+num2 >= 1 ? 0 : 2}
                duration={2}
                end={+num2}
                separator=" "
                suffix={plus ? "+" : ""}
              />
            </Box>
          )}
        </Box>
      )}
    </GridItem>
  );
};
