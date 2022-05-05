import { Container, Flex } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { HeadTags } from "Components/Common/HeadTags";
import { MainLayout } from "Components/Common/MainLayout";
import { NewsItemContent } from "Components/Post/NewsItemContent";
import { NewsItemTitle } from "Components/Post/NewsItemTitle";

const index = () => {
  return (
    <>
      <HeadTags
        siteTitle="Новость"
        titleContent="Новости нефтегазовой сферы Quanto"
        descriptionContent="Новости Quanto"
      />
      <MainLayout>
        <Container>
          <Flex pt="176px" justifyContent="space-between">
            <NewsItemTitle />
            <NewsItemContent />
          </Flex>
        </Container>
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
