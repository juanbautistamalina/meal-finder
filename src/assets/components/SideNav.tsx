import { Heading } from "@chakra-ui/react";
import { Category } from "../../types";

type Props = {
  categories: Category[];
  loading: boolean;
};

function SideNav({}: Props) {
  return (
    <>
      <Heading color="blue.400" fontSize={12} fontWeight="bold" mb={4}>
        Categorías
      </Heading>
      
    </>
  );
}

export default SideNav;
