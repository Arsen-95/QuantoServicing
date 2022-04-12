import { HeadTags } from "Components/Common/HeadTags";
import { MainLayout } from "Components/Common/MainLayout";
import { NewsPosts } from "Components/News/NewsPosts";
import { NewsTitle } from "Components/News/NewsTitle/NewsTitle";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const index = () => {
  return (
    <>
      <HeadTags
        siteTitle="Новости"
        descriptionContent="Новости Quanto Servicing"
        titleContent="Новости Quanto Servicing"
      />
      <MainLayout>
        <NewsTitle />
        <NewsPosts />
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
