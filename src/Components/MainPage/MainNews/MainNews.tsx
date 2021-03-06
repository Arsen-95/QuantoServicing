import { Box, Container } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

import { Tabs } from "Components/Common/Buttons";
import Posts from "./Posts";

type Props = {
  news: any;
  events: any;
};

export const MainNews: React.FC<Props> = ({ news, events }) => {
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
  const [eventType, setEventType] = useState("news");
  const [posts, setPosts] = useState(news);

  useEffect(() => {
    if (eventType === "news") {
      setPosts(news);
    } else {
      setPosts(events);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventType]);

  return (
    <Box
      bgColor="#393A47"
      py={["50px", "70px", "70px", "70px", "80px"]}
      pb={["90px", "70px", "auto"]}
      as="section"
    >
      <Container>
        <Box
          as="h5"
          textTransform="uppercase"
          letterSpacing="-2.50267px"
          fontWeight="900"
          fontSize={["34px", "50px", "54px", "64px", "76px"]}
          lineHeight="62px"
          mb={["20px", "20px", "20px", "50px"]}
        >
          {t("blog")}
        </Box>
        <Tabs
          data={tabsList}
          eventType={eventType}
          setEventType={setEventType}
        />
        <Posts posts={posts} eventType={eventType} />
      </Container>
    </Box>
  );
};
