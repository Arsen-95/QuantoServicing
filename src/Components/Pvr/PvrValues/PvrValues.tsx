import { ValuesByYears } from "Components/Common/ValuesByYears";

export const PvrValues = ({ data }: any) => {
  const yearsData = Object.keys(data).map((key: string) => Number(key));

  return <ValuesByYears data={data} bg="#393A47" yearsData={yearsData} />;
};
