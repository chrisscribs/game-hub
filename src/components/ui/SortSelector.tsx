import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { LuChevronDown } from "react-icons/lu";

const SortSelector = () => {
  return (
    <div className="SortSelector">
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="outline">
            Order by: Relevance
            <LuChevronDown />{" "}
          </Button>
        </MenuTrigger>
        <MenuContent width={"-moz-fit-content"} position={"absolute"}>
          <MenuItem value="Relevance">Relevance</MenuItem>
          <MenuItem value="DateAdded">Date Added</MenuItem>
          <MenuItem value="Name">Name</MenuItem>
          <MenuItem value="ReleaseDate">Release Date</MenuItem>
          <MenuItem value="Popularity">Popularity</MenuItem>
          <MenuItem value="Average Rating">Average Rating</MenuItem>
        </MenuContent>
      </MenuRoot>
    </div>
  );
};

export default SortSelector;
