import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";
import GenraListSkeleton from "./GenraListSkeleton";

const GenreList = () => {
  const { genres, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // if (isLoading) return <Spinner />;
  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => <GenraListSkeleton key={skeleton} />)}
      {genres.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY="5px">
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
