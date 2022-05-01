import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "react-query";

import { HeadTags } from "Components/Common/HeadTags";
import { MainLayout } from "Components/Common/MainLayout";
import { PvrTitle } from "Components/Pvr/PvrTitle";
import { PvrDescription } from "Components/Pvr/PvrDescription";
import { PvrValues } from "Components/Pvr/PvrValues";
import { PvrMap } from "Components/Pvr/PvrMap";
import { PvrVariants } from "Components/Pvr/PvrVariants";
import { PvrSystems } from "Components/Pvr/PvrSystems";
import { request } from "query/queries";
import { pvrStats } from "query/path";

const Page = () => {
  const { locale } = useRouter();
  const { data } = useQuery("pvr", () => request(locale, pvrStats));

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
        <PvrValues data={data} />
        <PvrMap />
      </MainLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("pvr", () => request(locale, pvrStats));
  return {
    props: {
      ...(await serverSideTranslations(locale || "", [
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
