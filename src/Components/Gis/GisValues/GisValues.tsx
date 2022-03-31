import { StatsBox } from "Components/Common/StatsBox";
import { ValuesByYears } from "Components/Common/ValuesByYears";
import React from "react";

export const GisValues = () => {
  return (
    <ValuesByYears>
      <StatsBox
        text="Количество выполненных заявок"
        textSize="18px"
        height="228px"
        numSize="64px"
        num={345}
        plus={true}
        padding="10px"
        textWidth="145px"
      />
      <StatsBox
        text="Количество исследованных интервалов"
        textSize="18px"
        height="228px"
        numSize="64px"
        num={275000}
        padding="10px"
        textWidth="145px"
      />
      <StatsBox
        text="Выполненный комплекс открытый/закрытый ствол"
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
