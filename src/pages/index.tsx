import type { GetStaticProps, NextPage } from "next";
import { memo } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { MainLayout } from "Components/Common/MainLayout";
import { Stats } from "Components/MainPage/Stats";
import { MainTitle } from "Components/MainPage/MainTitle";
import { Values } from "Components/MainPage/ValuesByYears";
import { Partners } from "Components/MainPage/Partners";
import { Cooperation } from "Components/MainPage/Cooperation";
import { HeadTags } from "Components/Common/HeadTags";
import { MainNews } from "Components/MainPage/MainNews";
import { MainSlider } from "Components/MainPage/MainSlider";

const Home: NextPage = () => {
  return (
    <>
      <HeadTags
        siteTitle="Quanto Website"
        titleContent="Quanto Servicing"
        descriptionContent="Quanto oil and gas"
      />
      <MainLayout>
        <MainTitle />
        <Stats />
        <Values />
        <MainSlider />
        <MainNews />
        <Partners />
        <Cooperation />
      </MainLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "", [
        "headers",
        "navigation",
        "titles",
        "common",
        "footer",
      ])),
    },
  };
};

export default memo(Home);
