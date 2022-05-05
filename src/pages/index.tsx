import type { GetServerSideProps, NextPage } from "next";
import { memo } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { useRouter } from "next/router";

import { events, gisStats, gtiStats, news, pvrStats } from "query/path";
import { MainLayout } from "Components/Common/MainLayout";
import { Stats } from "Components/MainPage/Stats";
import { MainTitle } from "Components/MainPage/MainTitle";
import { Values } from "Components/MainPage/ValuesByYears";
import { Partners } from "Components/MainPage/Partners";
import { Cooperation } from "Components/MainPage/Cooperation";
import { HeadTags } from "Components/Common/HeadTags";
import { MainNews } from "Components/MainPage/MainNews";
import { MainSlider } from "Components/MainPage/MainSlider";
import { request } from "query/queries";
import { group } from "console";

const Home: NextPage = () => {
  const { locale, query } = useRouter();
  const { data: gti } = useQuery("gti", () => request(locale, gtiStats));
  const { data: gis } = useQuery("gis", () => request(locale, gisStats));
  const { data: pvr } = useQuery("pvr", () => request(locale, pvrStats));
  const { data: newsPosts } = useQuery("news", () => request(locale, news));
  const { data: eventsPosts } = useQuery("events", () =>
    request(locale, events)
  );

  const { data } = useQuery("post", () => request(locale, `${news}2/`));

  console.log(data);

  const values = [gti, gis, pvr];
  const valuesData: any = {};
  values.map((value) => {
    const keys = Object.keys(value);
    return keys.map((key) => {
      if (key in valuesData) {
        valuesData[key] = [...valuesData[key], ...value[key]];
      } else {
        valuesData[key] = value[key];
      }
    });
  }, {});

  return (
    <>
      <HeadTags
        siteTitle="Quanto Website"
        titleContent="Quanto Servicing"
        descriptionContent="Quanto oil and gas"
      />
      <MainLayout>
        <MainTitle />
        <Stats gti={gti} gis={gis} pvr={pvr} />
        <Values values={valuesData} />
        <MainSlider />
        <MainNews news={newsPosts} events={eventsPosts} />
        <Partners />
        <Cooperation />
      </MainLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("gis", () => request(locale, gisStats));
  await queryClient.prefetchQuery("gti", () => request(locale, gtiStats));
  await queryClient.prefetchQuery("pvr", () => request(locale, pvrStats));
  await queryClient.prefetchQuery("news", () => request(locale, news));
  await queryClient.prefetchQuery("events", () => request(locale, events));
  return {
    props: {
      ...(await serverSideTranslations(locale || "ru", [
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

export default memo(Home);
