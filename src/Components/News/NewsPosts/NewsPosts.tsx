import { Box, Container, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Tabs } from "Components/Common/Buttons";
import { PostItem } from "Components/Common/PostItem";
import Pagination from "./Pagination";

export const NewsPosts = () => {
  const { t } = useTranslation("headers");

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
  // const [posts, setPosts] = useState(news);

  return (
    <Box background="#23242B" pt="100px" pb="40px">
      <Container>
        <Tabs
          data={tabsList}
          setEventType={setEventType}
          eventType={eventType}
        />
        <Flex
          maxW={["280px", "280px", "628px", "710px", "1083px"]}
          margin="0 auto"
          flexWrap="wrap"
          gap={["30px", "26px", "28px", "46px"]}
          mb="100px"
        >
          {/* <PostItem /> */}
        </Flex>
        <Pagination />
      </Container>
    </Box>
  );
};
