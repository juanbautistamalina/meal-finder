import { Grid, GridItem } from "@chakra-ui/react";
import MainContent from "./assets/components/MainContent";
import SideNav from "./assets/components/SideNav";
import Header from "./assets/components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { CategoriesResponse, Category } from "./types";

function App() {
  const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
  const [data, setData] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  console.log(data);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    setLoading(true);

    axios
      .get<CategoriesResponse>(url, { signal })
      .then(({ data }) => setData(data.meals))
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

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
      <GridItem p="5" area={"nav"} height="calc(100vh - 60px)">
        <SideNav categories={data} loading={loading} />
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"main"}>
        <MainContent />
      </GridItem>
    </Grid>
  );
}

export default App;
