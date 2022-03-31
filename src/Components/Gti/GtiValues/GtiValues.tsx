import { Box, Container, Flex, Grid } from "@chakra-ui/react";
import { StatsBox } from "Components/Common/StatsBox";
import { ValuesByYears } from "Components/Common/ValuesByYears";
import React from "react";

export const GtiValues = () => {
  return (
    <ValuesByYears>
      <StatsBox
        text="Количество завершенных скважин, шт"
        textSize="18px"
        height="228px"
        numSize="64px"
        num={345}
        plus={true}
        padding="10px"
        textWidth="145px"
      />
      <StatsBox
        text="Наработка, сут"
        textSize="18px"
        height="228px"
        numSize="64px"
        num={275000}
        padding="10px"
        textWidth="145px"
      />
      <StatsBox
        text="Коэффициент эксплуатации скважины"
        textSize="18px"
        height="228px"
        numSize="64px"
        num={292}
        num2={100}
        padding="10px"
        textWidth="225px"
      />
    </ValuesByYears>
  );
};
