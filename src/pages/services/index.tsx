import { HeadTags } from "Components/Common/HeadTags";
import { MainLayout } from "Components/Common/MainLayout";
import { ServicesList } from "Components/ServicesPage/ServicesList";
import { ServiceTitle } from "Components/ServicesPage/ServiceTitle";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const index = () => {
  return (
    <>
      <HeadTags
        siteTitle="Услуги Quanto Servicing"
        titleContent="Услуги Quanto Servicing"
        descriptionContent="Quanto Servicing предоставляет следующие услуги: Геолого-технологические исследования, геофизические исследования скважин, прострелочно-взрывные работы"
      />
      <MainLayout>
        <ServiceTitle />
        <ServicesList />
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

export default index;
