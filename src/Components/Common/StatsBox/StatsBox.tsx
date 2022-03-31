import { Box, GridItem, Text } from "@chakra-ui/react";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

type ValueProps = {
  text: string;
  num: number;
  height: string | {};
  numSize: any;
  textSize: any;
  padding: string;
  textWidth?: string;
  flexBasis?: string;
  plus?: any;
  num2?: any;
};

export const StatsBox: FC<ValueProps> = ({
  text,
  num,
  height,
  numSize,
  textSize,
  padding,
  textWidth,
  flexBasis,
  plus,
  num2,
}) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState(false);

  const handleScroll = useCallback(() => {
    const height = document.body.clientHeight;
    const top = parentRef.current?.getBoundingClientRect().top;
    const elementHeight = parentRef.current?.clientHeight;
    const diff = height - Number(top);

    if (diff > 0 && diff >= Number(elementHeight)) {
      setState(true);
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
    >
      <Text
        fontFamily="Museo Sans Cyrl"
        fontStyle="normal"
        fontWeight="300"
        fontSize={textSize}
        lineHeight="120%"
        letterSpacing="0.00240557px"
        color="#494949"
        maxW={textWidth && textWidth}
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
            duration={1}
            end={num}
            separator=" "
            suffix={plus ? "+" : ""}
          />
          {num2 && (
            <Box as="span">
              /
              <CountUp
                duration={1}
                end={num2}
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
