import { Box, GridItem, Text } from "@chakra-ui/react";
import React, { FC, useEffect, useRef, useState } from "react";
import { useCountUp } from "react-countup";

type ValueProps = {
  text: string;
  num: number;
  height: string;
  numSize: any;
  textSize: any;
  padding: string;
};

export const StatsBox: FC<ValueProps> = ({
  text,
  num,
  height,
  numSize,
  textSize,
  padding,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState(false);
  const { start } = useCountUp({
    ref: ref,
    separator: " ",
    start: 0,
    end: num,
    delay: 0,
    duration: 1,
    startOnMount: false,
  });

  const handleScroll = () => {
    const height = document.body.clientHeight;
    const top = parentRef.current?.getBoundingClientRect().top;
    const elementHeight = parentRef.current?.clientHeight;
    const diff = height - Number(top);

    if (diff > 0 && diff >= Number(elementHeight)) {
      setState(true);
    }
  };

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (state) {
      start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <GridItem
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
        lineHeight="14px"
        letterSpacing="0.00240557px"
        color="#494949"
      >
        {text}
      </Text>
      <Box
        ref={ref}
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
      />
    </GridItem>
  );
};
