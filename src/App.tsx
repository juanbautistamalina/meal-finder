import { Grid, GridItem } from "@chakra-ui/react";
import MainContent from "./assets/components/MainContent";
import SideNav from "./assets/components/SideNav";
import Header from "./assets/components/Header";
import { useState } from "react";
import { Category, Meal, SearchForm } from "./types";
import useHttpData from "./hooks/useHttpData";
import axios from "axios";

const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
const makeMealUrl = (category: Category) =>
  `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`;

const defaultCategory = {
  strCategory: "Beef",
};

function App() {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>(defaultCategory);

  const { loading, data } = useHttpData<Category>(url);
  const {
    loading: loadingMeal,
    data: dataMeal,
    setData: setMeals,
    setLoading: setLoadingMeal,
  } = useHttpData<Meal>(makeMealUrl(defaultCategory));

  const searchApi = (searchForm: SearchForm) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchForm.search}`
    setLoadingMeal(true);
    axios
      .get<{meals: Meal[]}>(url)
      .then(({data}) => setMeals(data.meals))
      .finally(() => setLoadingMeal(false))

  };

  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"`}
      gridTemplateRows={"60px 1fr"}
      gridTemplateColumns={{ sm: `0 1fr`, md: `250px 1fr` }}
      fontSize={14}
    >
      <GridItem
        boxShadow="lg"
        zIndex="1"
        pos="sticky"
        top="0"
        pt="7px"
        bg="white"
        area={"header"}
      >
        <Header onSubmit={searchApi} />
      </GridItem>
      <GridItem
        pos="sticky"
        top="60px"
        left="0"
        p="5"
        area={"nav"}
        height="calc(100vh - 60px)"
        overflowY="auto"
      >
        <SideNav
          categories={data}
          loading={loading}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </GridItem>
      <GridItem p="4" bg="gray.100" area={"main"}>
        <MainContent loading={loadingMeal} meals={dataMeal} />
      </GridItem>
    </Grid>
  );
}

export default App;
