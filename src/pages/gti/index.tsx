import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { HeadTags } from "Components/Common/HeadTags";
import { MainLayout } from "Components/Common/MainLayout";
import { GtiDescription } from "Components/Gti/GtiDescription";
import { GtiSlider } from "Components/Gti/GtiSlider";
import { GtiTitle } from "Components/Gti/GtiTitle";
import { GtiValues } from "Components/Gti/GtiValues";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { request } from "query/queries";
import { gtiStats } from "query/path";
import { useRouter } from "next/router";

const Page = () => {
  const { locale } = useRouter();
  const { data } = useQuery("gti", () => request(locale, gtiStats));
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
        <GtiValues data={data} />
        <GtiSlider />
      </MainLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("gti", () => request(locale, gtiStats));
  return {
    props: {
      ...(await serverSideTranslations(locale || "", [
        "headers",
        "navigation",
        "titles",
        "descriptions",
        "footer",
      ])),
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Page;
