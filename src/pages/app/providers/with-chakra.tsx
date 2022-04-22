import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";

// eslint-disable-next-line react/display-name
export const withChakra = (component: () => React.ReactNode) => () => {
  return <ChakraProvider theme={theme}>{component()}</ChakraProvider>;
};
