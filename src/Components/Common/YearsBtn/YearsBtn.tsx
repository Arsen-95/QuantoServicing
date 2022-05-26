import { Box } from "@chakra-ui/react";

type Props = {
  yearsData: number[];
  selectedYear: number;
  setSelectedYear(year: number): void;
};

export const YearsBtn: React.FC<Props> = ({
  yearsData,
  selectedYear,
  setSelectedYear,
}) => {
  return (
    <Box display="flex" flex="1" flexDir="column">
      {yearsData.map((year: number, index: number) => (
        <Box key={year}>
          <Box
            as="button"
            fontFamily="Blender Pro"
            onClick={() => setSelectedYear(year)}
            fontSize={
              selectedYear == year
                ? ["96px", "96px", "56px", "76px", "96px"]
                : ["36px", "36px", "24px", "32px", "36px"]
            }
            lineHeight={selectedYear === year ? "0.9" : "1.5"}
            transition="all 0.4s"
            color={selectedYear === year ? "#FFF" : "#8C949D"}
          >
            {year}
          </Box>
          {index + 1 < yearsData.length && (
            <>
              <Box mb="10px" width="7px" height="1px" bgColor="#8C949D"></Box>
              <Box mb="10px" width="7px" height="1px" bgColor="#8C949D"></Box>
              <Box mb="10px" width="7px" height="1px" bgColor="#8C949D"></Box>
              <Box width="7px" height="1px" bgColor="#8C949D"></Box>
            </>
          )}
        </Box>
      ))}
    </Box>
  );
};
