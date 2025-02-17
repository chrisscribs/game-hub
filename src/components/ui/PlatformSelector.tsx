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
    <div className="PlatformSelector">
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="outline">
            {selectedPlatform?.name || "Platforms"}
            <LuChevronDown />{" "}
          </Button>
        </MenuTrigger>
        <MenuContent width={"-moz-fit-content"} position={"absolute"}>
          {data.map((platform) => (
            <MenuItem
              cursor={"pointer"}
              onClick={() => onSelectPlatform(platform)}
              value={platform.slug}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </div>
  );
};

export default PlatformSelector;
