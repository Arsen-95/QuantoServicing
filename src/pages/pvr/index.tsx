import { HeadTags } from "Components/Common/HeadTags";
import { MainLayout } from "Components/Common/MainLayout";
import { PvrTitle } from "Components/Pvr/PvrTitle";
import { PvrDescription } from "Components/Pvr/PvrDescription";
import React from "react";
import { PvrValues } from "Components/Pvr/PvrValues";
import { PvrMap } from "Components/Pvr/PvrMap";
import { PvrDocs } from "Components/Pvr/PvrDocs";

const index = () => {
  return (
    <>
      <HeadTags
        siteTitle="Прострелочно-взрывные работы Quanto Servicing"
        titleContent="Quanto Servicing"
        descriptionContent="Quanto oil and gas"
      />
      <MainLayout>
        <PvrTitle />
        <PvrDescription />
        <PvrValues />
        <PvrMap />
        <PvrDocs />
      </MainLayout>
    </>
  );
};

export default index;
