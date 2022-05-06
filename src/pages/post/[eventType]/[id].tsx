import { Box, Container, Flex } from "@chakra-ui/react";
import { HeadTags } from "Components/Common/HeadTags";
import { MainLayout } from "Components/Common/MainLayout";
import { OtherPosts } from "Components/Post/OtherPosts";
import { PostContent } from "Components/Post/PostContent";
import { PostTitle } from "Components/Post/PostTitle";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { events, news } from "query/path";
import { request } from "query/queries";
import { dehydrate, QueryClient, useQuery } from "react-query";

const Page = () => {
  const { query, locale } = useRouter();

  const { data: post } = useQuery("post", () =>
    request(locale, `${query.eventType}/${query.id}/`)
  );
  const { data: posts } = useQuery("posts", () =>
    request(locale, `${query.eventType}/`)
  );

  return (
    <>
      <HeadTags
        siteTitle="Новости нефтегазовой сферы Quanto"
        titleContent="Quanto Servicing"
        descriptionContent="Quanto oil and gas"
      />
      <MainLayout>
        <Box bg="#23242B" pt="176px" pb="90px">
          <Container display="flex" gap="100px">
            <Box>
              <PostTitle title={post.title} />
              <OtherPosts posts={posts} eventType={query.eventType} />
            </Box>
            <PostContent Texta={post.description} />
          </Container>
        </Box>
      </MainLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  query,
}) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("post", () =>
    request(locale, `${query.eventType}/${query.id}/`)
  );
  await queryClient.prefetchQuery("posts", () =>
    request(locale, `${query.eventType}/`)
  );

  return {
    props: {
      ...(await serverSideTranslations(locale || "", [
        "headers",
        "navigation",
        "titles",
        "common",
        "footer",
      ])),
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Page;