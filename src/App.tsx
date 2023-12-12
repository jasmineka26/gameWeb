import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav"
          "aside main"`,
        }}
      >
        <GridItem area={"nav"}>
          <NavigationBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"}>Aside</GridItem>
          <GridItem area={"main"}>
            <GameGrid />
          </GridItem>
        </Show>
      </Grid>
    </>
  );
}

export default App;
