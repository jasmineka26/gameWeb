import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";
import GenraListSkeleton from "./GenraListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { genres, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genras
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((skeleton) => <GenraListSkeleton key={skeleton} />)}
        {genres.map((genre) => (
          <ListItem key={genre.id}>
            <HStack paddingY="3px">
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              />
              <Button
                paddingX={"0"}
                whiteSpace="normal"
                textAlign="left"
                // textColor={genre.id === selectedGenre?.id ? "cyan" : "white"}
                fontWeight={genre.id === selectedGenre?.id ? "black" : "normal"}
                onClick={() => onSelectGenre(genre)}
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
