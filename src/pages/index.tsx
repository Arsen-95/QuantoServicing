import type { NextPage } from "next";
import Head from "next/head";
import { MainLayout } from "Components/Common/MainLayout";
import { News } from "Components/MainPage/News";
import { Stats } from "Components/MainPage/Stats";
import { Title } from "Components/MainPage/Title";
import { Values } from "Components/MainPage/ValuesByYears";
import { Enviroment } from "Components/MainPage/Enviroment";
import { Partners } from "Components/MainPage/Partners";
import { Cooperation } from "Components/MainPage/Cooperation";
import { Years } from "Components/Common/Year/Years";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Quanto website</title>
        <meta name="keywords" content="Quanto"></meta>
        <meta name="description" content="Quanto" />
      </Head>
      <MainLayout>
        <Title />
        <Stats />
        <Values />
        <Enviroment />
        <News />
        <Partners />
        <Cooperation />
        <Years />
      </MainLayout>
    </>
  );
};

export default Home;
