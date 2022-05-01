import { ValuesByYears } from "Components/Common/ValuesByYears";

export const GtiValues = ({ data }: any) => {
  const yearsData = Object.keys(data).map((key: string) => Number(key));

  return <ValuesByYears data={data} yearsData={yearsData} bg="#393A47" />;
};
