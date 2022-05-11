import { Box, Flex, GridItem, Text } from "@chakra-ui/react";
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
  visibility?: any;
  border: any;
  plusSize?: any;
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
  border,
  plusSize,
}) => {
  const parentRef = useRef<HTMLDivElement>(null);

  const [state, setState] = useState(false);
  const [plusState, setPlusState] = useState(false);
  const numbers = num.split("/");

  const num1 = parseFloat(numbers[0]);
  let num2;
  if (numbers.length === 2) {
    num2 = parseFloat(numbers[1]);
  }

  const handleScroll = useCallback(() => {
    const elem = parentRef.current;
    if (elem) {
      const height = document.body.clientHeight;
      const top = elem?.getBoundingClientRect().top;
      const diff = height - Number(top);

      if (diff > 0) {
        setState(true);
        setTimeout(() => {
          setPlusState(true);
        }, 2000);
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
      border={border}
      h={height}
      position="relative"
      visibility={num1 > 0 ? "visible" : "hidden"}
      opacity={num1 > 0 ? "1" : "0"}
      display={num1 > 0 ? "block" : ["none", "none", "block"]}
      transition="all 1s"
    >
      <Text
        fontWeight="300"
        fontSize={textSize}
        lineHeight="120%"
        letterSpacing="0.00240557px"
        color="#B7B7B7"
        maxW={textWidth && textWidth}
        whiteSpace="pre-line"
      >
        {text}
      </Text>
      {state && (
        <Flex
          gap="4px"
          w="100%"
          textAlign="center"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          letterSpacing="-3.00267px"
          textTransform="uppercase"
          color="#B7B7B7"
          fontSize={numSize}
          justifyContent="center"
        >
          <CountUp
            decimals={num1 >= 1 ? 0 : 2}
            duration={2}
            end={num1}
            separator=" "
          />
          {numbers[0]?.includes("+") && (
            <Box
              as="span"
              fontSize={plusSize}
              color="#0057FF"
              opacity={plusState ? 1 : 0}
              transform={plusState ? "translateY(0%)" : "translateY(20%)"}
              transition="all 0.5s"
            >
              +
            </Box>
          )}
          {num2 && (
            <Box as="span">
              /
              <CountUp
                decimals={num2 >= 1 ? 0 : 2}
                duration={2}
                end={num2}
                separator=" "
              />
              {numbers[1]?.includes("+") && (
                <Box
                  as="span"
                  fontSize={plusSize}
                  color="#0057FF"
                  opacity={plusState ? 1 : 0}
                  transform={plusState ? "translateY(0%)" : "translateY(20%)"}
                  transition="all 0.5s"
                >
                  +
                </Box>
              )}
            </Box>
          )}
        </Flex>
      )}
    </GridItem>
  );
};
