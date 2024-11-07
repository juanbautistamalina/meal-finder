import {
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Text,
  CardFooter,
  SimpleGrid,
} from "@chakra-ui/react";
import { Meal } from "../../types";

type Props = {
  meals: Meal[];
  loading: boolean;
};

function MainContent({ loading, meals }: Props) {
  console.log(meals, loading);
  return (
    // Passing `columns={[2, null, 3]}` and `columns={{sm: 2, md: 3}}`
    // will have the same effect.

    <SimpleGrid columns={[2, null, 3]} spacing="40px">
      {meals.map((m) => (
        <Card key={m.idMeal} boxShadow="lg">
          <CardBody>
            <Image
              src={m.strMealThumb}
              alt={m.strMeal}
              borderRadius="lg"
            />
            <Heading size="md" color="blue.400">
              <Text mt="4">{m.strMeal}</Text>
            </Heading>
          </CardBody>
          <CardFooter pt="0">
            <Button color="white" bgColor="blue.400">
              Ver Receta
            </Button>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
}

export default MainContent;
