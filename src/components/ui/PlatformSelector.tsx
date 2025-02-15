import { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { LuChevronDown } from "react-icons/lu";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
  }

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline">
          {selectedPlatform?.name || 'Platforms'}
          <LuChevronDown />{" "}
        </Button>
      </MenuTrigger>
      <MenuContent width={"100px"} position={"absolute"}>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            value={platform.slug}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
