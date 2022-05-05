import { Box, Container, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Tabs } from "Components/Common/Buttons";
import { PostItem } from "Components/Common/PostItem";
import Pagination from "./Pagination";

type Props = {
  news: any;
  events: any;
};

export const NewsPosts: React.FC<Props> = ({ news, events }) => {
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
  const [posts, setPosts] = useState(events);

  useEffect(() => {
    if (eventType === "news") {
      setPosts(news);
    } else {
      setPosts(events);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventType]);

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
          {posts.map((post: any) => (
            <PostItem post={post} key={post.id} />
          ))}
        </Flex>
        <Pagination />
      </Container>
    </Box>
  );
};
