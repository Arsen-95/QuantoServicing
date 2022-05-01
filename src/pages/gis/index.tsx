import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { HeadTags } from "Components/Common/HeadTags";
import { MainLayout } from "Components/Common/MainLayout";
import { GisDescription } from "Components/Gis/GisDescription";
import { GisMethods } from "Components/Gis/GisMethods";
import { GisSlider } from "Components/Gis/GisSlider";
import { GisTitle } from "Components/Gis/GisTitle/GisTitle";
import { GisValues } from "Components/Gis/GisValues";
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { request } from "query/queries";
import { gisStats } from "query/path";

const Page = () => {
  const { locale } = useRouter();
  const { data } = useQuery("gis", () => request(locale, gisStats));
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
        <GisValues data={data} />
        <GisSlider />
      </MainLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("gis", () => request(locale, gisStats));

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "headers",
        "navigation",
        "titles",
        "footer",
        "descriptions",
      ])),
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Page;
