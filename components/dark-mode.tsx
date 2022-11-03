import { useColorMode, Button, Box, chakra } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export enum ColorMode {
  Light = "light",
  Dark = "dark",
}
export const DarkModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <StyledButton onClick={toggleColorMode}>
      {colorMode === ColorMode.Light ? <MoonIcon /> : <SunIcon />}
    </StyledButton>
  );
};

const StyledButton = chakra(Button, {
  baseStyle: {
    boxSize: "50px",
  },
});

export const AbsoluteButtonContainer = chakra(Box, {
  baseStyle: {
    position: "absolute",
    right: { base: "10px", md: "40px" },
    top: { base: "5px", md: "20px" },
  },
});
