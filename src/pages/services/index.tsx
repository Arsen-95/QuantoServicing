import { HeadTags } from "Components/Common/HeadTags";
import { MainLayout } from "Components/Common/MainLayout";
import { ServicesList } from "Components/ServicesPage/ServicesList";
import { ServiceTitle } from "Components/ServicesPage/ServiceTitle";
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

export default index;
