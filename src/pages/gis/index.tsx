import { HeadTags } from "Components/Common/HeadTags";
import { MainLayout } from "Components/Common/MainLayout";
import { GisDescription } from "Components/Gis/GisDescription";
import { GisMethods } from "Components/Gis/GisMethods";
import { GisSlider } from "Components/Gis/GisSlider";
import { GisTitle } from "Components/Gis/GisTitle/GisTitle";
import { GisValues } from "Components/Gis/GisValues";
import React from "react";

const index = () => {
  return (
    <>
      <HeadTags
        siteTitle="Геофизические исследования скважин Quanto"
        titleContent="Quanto Servicing"
        descriptionContent="Quanto oil and gas"
      />
      <MainLayout>
        <GisTitle />
        <GisDescription />
        <GisMethods />
        <GisValues />
        <GisSlider />
      </MainLayout>
    </>
  );
};

export default index;
