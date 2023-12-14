import { List, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenraListSkeleton = () => {
  return (
    <List>
      <Skeleton height="32px" width="50px" />
      <ListItem>
        <SkeletonText />
      </ListItem>
    </List>
  );
};

export default GenraListSkeleton;
