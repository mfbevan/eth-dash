import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";

export const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  colors,
});
