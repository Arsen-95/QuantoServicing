import { HeadTags } from "Components/Common/HeadTags";
import { MainLayout } from "Components/Common/MainLayout";
import { GtiDescription } from "Components/Gti/GtiDescription";
import { GtiMap } from "Components/Gti/GtiMap";
import { GtiSlider } from "Components/Gti/GtiSlider";
import { GtiTitle } from "Components/Gti/GtiTitle";
import { GtiValues } from "Components/Gti/GtiValues";
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

export default index;
