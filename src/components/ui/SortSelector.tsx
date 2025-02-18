import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { LuChevronDown } from "react-icons/lu";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <div className="SortSelector">
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="outline">
            Order by: {currentSortOrder?.label || "Relevance"}
            <LuChevronDown />{" "}
          </Button>
        </MenuTrigger>
        <MenuContent width={"-moz-fit-content"} position={"absolute"}>
          {sortOrders.map((order) => (
            <MenuItem
              onClick={() => onSelectSortOrder(order.value)}
              key={order.value}
              value={order.value}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </div>
  );
};

export default SortSelector;
