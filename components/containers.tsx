import { chakra, VStack } from "@chakra-ui/react";

export const PageContainer = chakra(VStack, {
  baseStyle: {
    maxWidth: "6xl",
    mx: "auto",
    pt: { base: "20px", sm: "50px" },
    pb: "60px",
  },
});
