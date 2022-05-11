import { ValuesByYears } from "Components/Common/ValuesByYears";

export const GisValues = ({ data }: any) => {
  const yearsData: number[] = [];
  data.map((item: any) => {
    if (item.statistics.length !== 0) {
      return yearsData.push(item.related_year);
    }
  });

  return <ValuesByYears data={data} bg="#23242B" yearsData={yearsData} />;
};
