import { Box, Button, Container, Flex } from "@chakra-ui/react";
import { Tabs } from "Components/Common/Buttons";
import { useTranslation } from "next-i18next";
import { useState } from "react";

import Posts from "./Posts";

export const MainNews = () => {
  const [t] = useTranslation("headers");

  const tabsList = [
    {
      title: t("news"),
      titleEvent: "news",
    },
    {
      title: t("events"),
      titleEvent: "events",
    },
  ];

  const [event, setEvent] = useState("news");

  return (
    <Box bgColor="#393A47" py={["50px", "100px"]} pb={["90px", "100px"]}>
      <Container>
        <Box
          as="h5"
          textTransform="uppercase"
          color="#FFF"
          letterSpacing="-2.50267px"
          fontWeight="900"
          fontSize={["35px", "50px", "50px", "75px"]}
          lineHeight="62px"
          mb={["20px", "20px", "20px", "50px"]}
        >
          {t("news")}
        </Box>
        <Tabs data={tabsList} event={event} setEvent={setEvent} />
        <Posts />
      </Container>
    </Box>
  );
};
