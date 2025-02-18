import { Input } from "@chakra-ui/react";
import { InputGroup } from "./input-group";
import { LuSearch } from "react-icons/lu";

const SearchInput = () => {
  return (
    <InputGroup flex={1} startElement={<LuSearch />}>
      <Input
        borderRadius={20}
        placeholder="Search for games..."
        variant={"subtle"}
      />
    </InputGroup>
  );
};

export default SearchInput;
