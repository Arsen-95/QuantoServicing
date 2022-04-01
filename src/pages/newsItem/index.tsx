import { Container, Flex } from "@chakra-ui/react";
import { HeadTags } from "Components/Common/HeadTags";
import { MainLayout } from "Components/Common/MainLayout";
import { NewsItemContent } from "Components/NewsItem/NewsItemContent";
import { NewsItemTitle } from "Components/NewsItem/NewsItemTitle";
import React from "react";

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

export default index;
