import { Grid, GridItem } from "@chakra-ui/react";
import MainContent from "./assets/components/MainContent";
import SideNav from "./assets/components/SideNav";
import Header from "./assets/components/Header";

function App() {
  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"`}
      gridTemplateRows={"60px 1fr"}
      gridTemplateColumns={{ sm: `0 1fr`, md: `250px 1fr` }}
    >
      <GridItem pl="2" bg="orange.300" area={"header"}>
        <Header />
      </GridItem>
      <GridItem pl="2" bg="pink.300" area={"nav"} height="calc(100vh - 60px)">
        <SideNav />
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"main"}>
        <MainContent />
      </GridItem>
    </Grid>
  );
}

export default App;
