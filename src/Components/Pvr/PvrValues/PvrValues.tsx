import { ValuesByYears } from "Components/Common/ValuesByYears";

export const PvrValues = () => {
  const data: Record<number, { text: string; num: string; plus?: boolean }[]> =
    {
      2021: [
        { text: "Кол-во отработанных заявок (шт)", num: "246" },
        { text: "Простреленные интервалы (м)", num: "1500", plus: true },
        { text: "Кол-во простреленных зарядов (шт)", num: "30000", plus: true },
      ],
      2020: [
        { text: "Кол-во отработанных заявок (шт)", num: "0" },
        { text: "Исследованные интервалы (м)", num: "0" },
        { text: "Открытый/закрытый ствол (шт)", num: "0" },
      ],
      2019: [
        { text: "Кол-во отработанных заявок (шт)", num: "0" },
        { text: "Простреленные  интервалы (м)", num: "0" },
        { text: "Кол-во простреленных зарядов (шт)", num: "0" },
      ],
    };

  const yearsData = [2021];

  return <ValuesByYears data={data} bg="#393A47" yearsData={yearsData} />;
};
