import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { HeadTags } from "Components/Common/HeadTags";
import { MainLayout } from "Components/Common/MainLayout";
import { PvrTitle } from "Components/Pvr/PvrTitle";
import { PvrDescription } from "Components/Pvr/PvrDescription";
import { PvrValues } from "Components/Pvr/PvrValues";
import { PvrMap } from "Components/Pvr/PvrMap";
import { PvrVariants } from "Components/Pvr/PvrVariants";
import { PvrSystems } from "Components/Pvr/PvrSystems";

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
        <PvrSystems />
        <PvrVariants />
        <PvrValues />
        <PvrMap />
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

export default index;
