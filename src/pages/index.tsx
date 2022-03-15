import type { NextPage } from "next";
import Head from "next/head";
import Cooperation from "../Components/Cooperation/Cooperation";
import Enviroment from "../Components/Enviroment/Enviroment";
import MainLayout from "../Components/MainLayout";
import News from "../Components/News/News";
import Partners from "../Components/Partners/Partners";
import Stats from "../Components/Stats/Stats";
import Title from "../Components/Title/Title";
import Values from "../Components/Values/Values";

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
      </MainLayout>
    </>
  );
};

export default Home;
