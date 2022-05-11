import { Box, Container, Flex, Grid } from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "next-i18next";

import { Years } from "Components/Common/Year/Years";
import { StatsBox } from "../StatsBox";

type ValueByYearProps = {
  data: any;
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
    <Box py={["50px", "70px", "70", "70px", "80px"]} bg={bg}>
      <Container>
        <Box
          as="h5"
          fontWeight="600"
          lineHeight="99.5%"
          letterSpacing="-0.04em"
          mb="60px"
          maxW="440px"
        >
          {t("headers:prodValues")}
        </Box>
        <Flex>
          <Box flexBasis="30%" display={["none", "none", "flex"]}>
            <Years onScroll={yearChanger} yearsData={yearsData} />
          </Box>
          <Grid
            flex="1"
            templateColumns={[
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap="4%"
          >
            <Flex
              overflow="hidden"
              display={["flex", "flex", "none"]}
              alignItems="center"
              ml={["10%", "20%"]}
            >
              <Years onScroll={yearChanger} yearsData={yearsData} />
            </Flex>
            {data[year].map((item: any) => (
              <StatsBox
                border="1px solid #B7B7B7"
                key={`${Math.random()}`}
                padding="8px"
                text={item?.data_description}
                num={item?.data}
                height={["156px", "200px", "150px", "200px", "228px"]}
                numSize={["36px", "46px", "30px", "50px", "64px"]}
                textSize={["12px", "px", "12px", "16px", "18px"]}
                plusSize={["24px", "30px", "22px", "38px"]}
              />
            ))}
          </Grid>
        </Flex>
      </Container>
    </Box>
  );
};
