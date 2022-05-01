import { Box, Container, Flex, Grid } from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "next-i18next";

import { Years } from "Components/Common/Year/Years";
import { StatsBox } from "../StatsBox";

type ValueByYearProps = {
  data: Record<number, { text: string; num: string; plus?: boolean }[]>;
  yearsData: number[];
  bg: string;
};

export const ValuesByYears: React.FC<ValueByYearProps> = ({
  data,
  yearsData,
  bg,
}) => {
  const [year, setYear] = useState(yearsData[0]);
  const yearChanger = (e: any): any => {
    setYear(e);
  };

  const { t } = useTranslation();

  return (
    <Box pt="50px" pb="80px" bg={bg}>
      <Container>
        <Box
          as="h5"
          fontWeight="600"
          fontSize="50px"
          lineHeight="99.5%"
          letterSpacing="-0.04em"
          mb="60px"
          maxW="440px"
        >
          {t("headers:prodValues")}
        </Box>
        <Flex>
          <Box flexBasis="30%" display="flex">
            <Years onScroll={yearChanger} yearsData={yearsData} />
          </Box>
          <Grid flex="1" pt="50px" templateColumns="repeat(3, 1fr)" gap="6%">
            {data[year].map((item: any) => (
              <StatsBox
                border="1px solid #B7B7B7"
                key={`${Math.random()}`}
                padding="8px"
                text={item?.text}
                num={item?.num}
                height="228px"
                numSize={["36px", "36px", "46px", "64px"]}
                textSize={["12px", "14px", "16px", "18px"]}
              />
            ))}
          </Grid>
        </Flex>
      </Container>
    </Box>
  );
};
