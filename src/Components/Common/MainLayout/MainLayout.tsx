import { Box, Flex } from "@chakra-ui/react";
import { memo } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { Footer } from "../Footer";
import { Header } from "../Header";
import { StickyHeader } from "../StickyHeader";

export const MainLayout: React.FC = memo(({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Flex flexDir={"column"} minHeight="100%">
        <Header pt="36px" />
        <StickyHeader />
        <Box as="main" flex="1 0 auto" h={"100%"}>
          {children}
        </Box>
        <Footer />
      </Flex>
    </QueryClientProvider>
  );
});

MainLayout.displayName = "";
