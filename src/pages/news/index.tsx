import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { dehydrate, QueryClient, useQuery } from "react-query";

import { HeadTags } from "Components/Common/HeadTags";
import { MainLayout } from "Components/Common/MainLayout";
import { NewsPosts } from "Components/News/NewsPosts";
import { NewsTitle } from "Components/News/NewsTitle/NewsTitle";
import { request } from "query/queries";
import { events, news } from "query/path";
import { useRouter } from "next/router";

const Page = () => {
  const { locale } = useRouter();

  const { data: newsPosts } = useQuery("news", () => request(locale, news));
  const { data: eventsPosts } = useQuery("events", () =>
    request(locale, events)
  );

  return (
    <>
      <HeadTags
        siteTitle="Новости"
        descriptionContent="Новости Quanto Servicing"
        titleContent="Новости Quanto Servicing"
      />
      <MainLayout>
        <NewsTitle />
        <NewsPosts news={newsPosts} events={eventsPosts} />
      </MainLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("news", () => request(locale, news));
  await queryClient.prefetchQuery("events", () => request(locale, events));

  return {
    props: {
      ...(await serverSideTranslations(locale || "", [
        "headers",
        "navigation",
        "titles",
        "common",
        "footer",
        "months",
      ])),
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Page;
