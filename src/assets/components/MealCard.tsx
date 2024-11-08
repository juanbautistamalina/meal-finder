import { Card, CardBody, Heading, CardFooter, Button, Image, Text } from "@chakra-ui/react";
import { Meal } from "../../types";

type Props = {
  meal: Meal;
};

function MealCard({meal}: Props) {
  return (
    <Card boxShadow="lg">
      <CardBody>
        <Image src={meal.strMealThumb} alt={meal.strMeal} borderRadius="lg" />
        <Heading size="md" color="blue.400">
          <Text mt="4">{meal.strMeal}</Text>
        </Heading>
      </CardBody>
      <CardFooter pt="0">
        <Button color="white" bgColor="blue.400">
          Ver Receta
        </Button>
      </CardFooter>
    </Card>
  );
}

export default MealCard;
