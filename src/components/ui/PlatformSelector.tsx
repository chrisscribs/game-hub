import usePlatforms from "@/hooks/usePlatforms";
import {
  Button,
  ButtonGroup,
  IconButton,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { LuChevronDown } from "react-icons/lu";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <ButtonGroup size="sm" variant="outline" attached>
          <Button variant="outline">Platforms</Button>
          <IconButton variant="outline">
            <LuChevronDown />
          </IconButton>
        </ButtonGroup>
      </MenuTrigger>
      <MenuContent width={"100px"} position={"absolute"}>
        {data.map((platform) => (
          <MenuItem value={platform.slug} key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
