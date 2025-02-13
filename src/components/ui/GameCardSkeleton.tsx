import { Card, Skeleton, Text } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height={"300px"} />
      <Card.Body>
        <Text />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
