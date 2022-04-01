import { Box, Image, Text } from "@chakra-ui/react";
import { IMAGES_PATH } from "constants/settings";
import React from "react";

export const NewsItemContent = () => {
  return (
    <Box>
      <Box mb="50px" maxW="670px">
        <Image src={`${IMAGES_PATH}/gtiSlide3.png`} alt="news photo" />
      </Box>
      <Text
        maxW="670px"
        whiteSpace="pre-wrap"
        fontWeight="300"
        fontSize="18px"
        lineHeight="150%"
        letterSpacing="-0.00267285px"
        color="#111111"
        opacity="0.76"
        mb="100px"
      >
        {`
         Head of Noyabrsk Alexey Romanov had a meeting with Naftagaz-Drilling Managing Director Artyom Vlasov. First of all, the Mayor asked to give his congratulations on the professional day—Oil Industry Workers’ Day—and his wishes for production achievements and family welfare to the company’s team. But the main topic was the Excellence Centre that had been set up at the company some time ago.
         By now, the necessary infrastructure has been fully provided at the company’s production facilities.  In August 2021, the Department for Education of the Yamalo-Nenets Autonomous Area has issued to the Centre a state license for professional and further education activities. Plans call for the implementation of vocational training programmes, further education programmes in oil and gas well drilling, rigging-up operations, well construction supervising, occupational safety, industrial safety, environmental safety, basic fire safety, first aid administration, defensive driving in winter, safe practices for employees with little experience.
         The Excellence Centre will mainly focus on the training of NaftaGaz personnel to guarantee that the company is not dependent on educational outsourcing for advanced training of personnel with necessary competences and in numbers needed. Then, projects to meet demands of other companies will be implemented.
         This summer a trilateral cooperation agreement was signed between the city administration, NaftaGaz-Drilling and Noyabrsk Professional and Information Technologies College. This agreement purports to improve the quality of education and vocational training of personnel in Noyabrsk, to develop and introduce effective types of cooperation in training and employment of graduates. Therefore, NGD Excellence Centre expects to use students in skill practicing activities.
         During the meeting, NaftaGaz’ production plans and involvement in social initiatives in the community were also discussed.`}
      </Text>
    </Box>
  );
};
