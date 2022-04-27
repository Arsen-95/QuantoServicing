import { extendTheme } from "@chakra-ui/react";

import { components } from "./components";
import { fonts } from "./fonts";
import { global } from "./global";

export const theme = extendTheme({
  styles: { global },
  fonts,
  components,
})