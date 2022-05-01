import { ValuesByYears } from "Components/Common/ValuesByYears";

export const GisValues = ({ data }: any) => {
  const yearsData = Object.keys(data).map((key: string) => Number(key));

  return <ValuesByYears data={data} bg="#23242B" yearsData={yearsData} />;
};
