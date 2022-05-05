import type { GetStaticProps, NextPage } from "next";
import { HeadTags } from "Components/Common/HeadTags";
import { MainLayout } from "Components/Common/MainLayout";
import { Management } from "Components/About/Management";
import { AboutTitle } from "Components/About/AboutTitle";
import { AboutCompany } from "Components/About/AboutCompany";
import { AboutSlider } from "Components/About/AboutSlider";
import { Policy } from "Components/About/Policy";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Equipment } from "Components/About/Equipment";

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
        <Equipment />
        {/* <Management /> */}
        <AboutSlider />
        {/* <Personal /> */}
        <Policy />
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
        "footer",
        "descriptions",
      ])),
    },
  };
};

export default About;
