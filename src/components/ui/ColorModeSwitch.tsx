import { HStack, Text } from "@chakra-ui/react";
import { useColorMode } from "./color-mode";
import { Switch } from "./switch";

const ColorModeSwitch = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch colorPalette={"green"} onChange={toggleColorMode}></Switch>
      <Text>Color Theme</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
