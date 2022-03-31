import { StatsBox } from "Components/Common/StatsBox";
import { ValuesByYears } from "Components/Common/ValuesByYears";
import React from "react";

export const PvrValues = () => {
  return (
    <ValuesByYears>
      <StatsBox
        text="Количество выполненных заявок"
        textSize="18px"
        height="228px"
        numSize="64px"
        num={346}
        plus={true}
        padding="10px"
        textWidth="145px"
      />
      <StatsBox
        text="Количество исследованных интервалов"
        textSize="18px"
        height="228px"
        numSize="64px"
        num={1800}
        padding="10px"
        textWidth="145px"
      />
      <StatsBox
        text="Выполненный комплекс открытый/закрытый ствол"
        textSize="18px"
        height="228px"
        numSize="64px"
        num={30000}
        plus={true}
        padding="10px"
        textWidth="225px"
      />
    </ValuesByYears>
  );
};
