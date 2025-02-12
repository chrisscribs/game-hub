import { Button, Grid, GridItem, Stack } from "@chakra-ui/react";
import NavBar from "./components/ui/navbar";
import { useColorMode } from "./components/ui/color-mode";

function App() {
  const { toggleColorMode, } = useColorMode();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Button variant="outline" onClick={toggleColorMode}>
          Toggle Theme
        </Button>
        <NavBar></NavBar>
      </GridItem>
      <Stack hideBelow={"lg"}>
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Stack>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}
export default App;
