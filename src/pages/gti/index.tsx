import { HeadTags } from "Components/Common/HeadTags";
import { MainLayout } from "Components/Common/MainLayout";
import { GtiDescription } from "Components/Gti/GtiDescription";
import { GtiSlider } from "Components/Gti/GtiSlider";
import { GtiTitle } from "Components/Gti/GtiTitle";
import { GtiValues } from "Components/Gti/GtiValues";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const index = () => {
  return (
    <>
      <HeadTags
        siteTitle="Геолого-технологические исследования Quanto"
        titleContent="Quanto Servicing"
        descriptionContent="Quanto oil and gas"
      />
      <MainLayout>
        <GtiTitle />
        <GtiDescription />
        <GtiValues />
        <GtiSlider />
        {/* <GtiMap /> */}
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
        "descriptions",
        "footer",
      ])),
    },
  };
};

export default index;
