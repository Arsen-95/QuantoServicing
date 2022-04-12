import { Box, Flex } from "@chakra-ui/react";
import { memo, ReactNode } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { StickyHeader } from "../StickyHeader";

type MainLayoutProps = {
  children?: ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = memo(({ children }) => {
  return (
    <Flex flexDir={"column"} minHeight="100%">
      <Header pt="36px" />
      <StickyHeader />
      <Box as="main" flex="1 0 auto" h={"100%"}>
        {children}
      </Box>
      <Footer />
    </Flex>
  );
});

MainLayout.displayName = "";
