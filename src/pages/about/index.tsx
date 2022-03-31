import type { NextPage } from "next";
import { HeadTags } from "Components/Common/HeadTags";
import { MainLayout } from "Components/Common/MainLayout";
import { Management } from "Components/About/Management";
import { AboutTitle } from "Components/About/AboutTitle";
import { AboutCompany } from "Components/About/AboutCompany";
import { AboutSlider } from "Components/About/AboutSlider";
import { Personal } from "Components/About/Personal";
import { Policy } from "Components/About/Policy";

const About: NextPage = () => {
  return (
    <>
      <HeadTags
        siteTitle="О компании Quanto"
        titleContent="Quanto Servicing"
        descriptionContent="Quanto oil and gas"
      />
      <MainLayout>
        <AboutTitle />
        <AboutCompany />
        <Management />
        <AboutSlider />
        <Personal />
        <Policy />
      </MainLayout>
    </>
  );
};

export default About;
