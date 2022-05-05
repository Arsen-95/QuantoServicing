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

  const { data } = useQuery("post", () =>
    request(locale, `${news}${query.id}`)
  );

  return (
    <>
      <HeadTags
        siteTitle="Новости нефтегазовой сферы Quanto"
        titleContent="Quanto Servicing"
        descriptionContent="Quanto oil and gas"
      />
      <MainLayout>
        <Container pt="176px">
          <Flex flexDir="column">
            <PostTitle title={data.title} />
            <OtherPosts posts={[]} />
          </Flex>
          <PostContent text={data.description} />
        </Container>
      </MainLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  query,
  resolvedUrl,
}) => {
  const queryClient = new QueryClient();
  if (resolvedUrl.includes("news")) {
    await queryClient.prefetchQuery("post", () =>
      request(locale, `${news}${query.id}`)
    );
  }
  if (resolvedUrl.includes("events")) {
    await queryClient.prefetchQuery("posts", () =>
      request(locale, `${events}${query.id}`)
    );
  }
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
