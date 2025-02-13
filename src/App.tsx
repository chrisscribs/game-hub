import { Grid, GridItem, Stack } from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar";
import GameGrid from "./components/ui/GameGrid";
import GenreList from "./components/ui/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Stack hideBelow={"lg"}>
        <GridItem area="aside" paddingX={5}>
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Stack>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}
export default App;
