import type { NextPage } from "next";
import Head from "next/head";
import { MainLayout } from "Components/Common/MainLayout";
import { News } from "Components/MainPage/News";
import { Stats } from "Components/MainPage/Stats";
import { MainTitle } from "Components/MainPage/MainTitle";
import { Values } from "Components/MainPage/ValuesByYears";
import { Enviroment } from "Components/MainPage/Enviroment";
import { Partners } from "Components/MainPage/Partners";
import { Cooperation } from "Components/MainPage/Cooperation";
import { Navigation } from "Components/Common/Navigation";
import { Box } from "@chakra-ui/react";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Quanto website</title>
        <meta name="title" content="Quanto" />
        <meta name="description" content="Quanto" />
      </Head>
      <MainLayout>
        <MainTitle />
        {/* <Box bg="#000">
          <Link href="/about">Test</Link>
          <Navigation />
        </Box> */}
        <Stats />
        {/* <Values /> */}
        <Enviroment />
        <News />
        <Partners />
        <Cooperation />
      </MainLayout>
    </>
  );
};

export default Home;
