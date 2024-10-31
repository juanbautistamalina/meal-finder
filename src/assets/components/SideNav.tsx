import { Heading, Link, VStack } from "@chakra-ui/react";
import { Category } from "../../types";

type Props = {
  categories: Category[];
  loading: boolean;
};

const selectedProps = {
  bgColor: "blue.400",
  color: "white",
  fontWeight: "bold"
}

function SideNav({ categories }: Props) {
  
  const selected = {
    strCategory: "Beef",
  }


  return (
    <>
      <Heading color="blue.400" fontSize={12} fontWeight="bold" mb={4}>
        Categorías
      </Heading>
      <VStack align="stretch">
        {categories.map((c) => (
          <Link
          px={2}
          py={1}
          borderRadius={5}
          key={c.strCategory}
          _hover={{ textDecoration: "none" }}
          {...(selected.strCategory == c.strCategory && selectedProps )}
          >{c.strCategory}</Link>
        ))}
      </VStack>
    </>
  );
}

export default SideNav;