import { ValuesByYears } from "Components/Common/ValuesByYears";

export const PvrValues = ({ data }: any) => {
  const yearsData: number[] = [];
  data.map((item: any) => {
    if (item.statistics.length !== 0) {
      return yearsData.push(item.related_year);
    }
  });

  return <ValuesByYears data={data} bg="#393A47" yearsData={yearsData} />;
};
