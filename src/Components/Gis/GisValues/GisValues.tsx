import { ValuesByYears } from "Components/Common/ValuesByYears";

export const GisValues = () => {
  const data: Record<number, { text: string; num: string; plus?: boolean }[]> =
    {
      2021: [
        { text: "Кол-во отработанных заявок (шт)", num: "345" },
        { text: "Исследованные интервалы (м)", num: "275000" },
        { text: "Открытый/закрытый ствол (шт)", num: "292" },
      ],
      2020: [
        { text: "Кол-во отработанных заявок (шт)", num: "175" },
        { text: "Исследованные интервалы (м)", num: "140000" },
        { text: "Открытый/закрытый ствол (шт)", num: "107/68" },
      ],
      2019: [
        { text: "Кол-во отработанных заявок (шт)", num: "10" },
        { text: "Исследованные интервалы (м)", num: "20000" },
        { text: "Открытый/закрытый ствол (шт)", num: "2/8" },
      ],
    };

  const yearsData = [2019, 2020, 2021];

  return <ValuesByYears data={data} bg="#23242B" yearsData={yearsData} />;
};
