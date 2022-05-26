import { Box, Flex } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { contactInformation } from "query/path";
import { request } from "query/queries";
import { memo } from "react";
import {
  dehydrate,
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "react-query";

import { Footer } from "../Footer";
import { Header } from "../Header";
import { StickyHeader } from "../StickyHeader";

export const MainLayout: React.FC = memo(({ children }) => {
  const queryClient = new QueryClient();
  const { locale } = useRouter();
  const { data } = useQuery("footer", () =>
    request(locale, contactInformation)
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Flex flexDir={"column"} minHeight="100%">
        <Header />
        <StickyHeader />
        <Box as="main" flex="1 0 auto" h={"100%"}>
          {children}
        </Box>
        <Footer data={data} />
      </Flex>
    </QueryClientProvider>
  );
});

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("footer", () =>
    request(locale, contactInformation)
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

MainLayout.displayName = "";
