import { StatsBox } from "Components/Common/StatsBox";
import { ValuesByYears } from "Components/Common/ValuesByYears";
import React, { useState } from "react";

export const GtiValues = () => {
  const data: Record<
    number,
    { text: string; num: number; num2?: number; plus?: boolean }[]
  > = {
    2021: [
      { text: "Кол-во завершенных скважин (шт)", num: 35 },
      { text: "Наработка (сут)", num: 3540 },
      { text: "Коэффицент эксплуатации станции (д.е.)", num: 0.79 },
    ],
    2020: [
      { text: "Кол-во завершенных скважин (шт)", num: 42 },
      { text: "Наработка (сут)", num: 3385 },
      { text: "Коэффицент эксплуатации станции (д.е.)", num: 0.77 },
    ],
    2019: [
      { text: "Кол-во завершенных скважин (шт)", num: 27 },
      { text: "Наработка, сут", num: 2632 },
      { text: "Коэффицент эксплуатации станции, д.е.", num: 0.6 },
    ],
  };

  const yearsData = [2019, 2020, 2021];

  return <ValuesByYears data={data} yearsData={yearsData} />;
};
