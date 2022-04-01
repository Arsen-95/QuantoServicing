import type { NextPage } from "next";
import { memo } from "react";
import { MainLayout } from "Components/Common/MainLayout";
import { Stats } from "Components/MainPage/Stats";
import { MainTitle } from "Components/MainPage/MainTitle";
import { Values } from "Components/MainPage/ValuesByYears";
import { Enviroment } from "Components/MainPage/Enviroment";
import { Partners } from "Components/MainPage/Partners";
import { Cooperation } from "Components/MainPage/Cooperation";
import { HeadTags } from "Components/Common/HeadTags";
import { MainNews } from "Components/MainPage/MainNews";

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
        <Enviroment />
        <MainNews />
        <Partners />
        <Cooperation />
      </MainLayout>
    </>
  );
};

export default memo(Home);
