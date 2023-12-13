import {
  Card,
  CardBody,
  Divider,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlarformIconList from "./PlarformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody paddingX={2}>
        <Heading fontSize={"md"}>{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlarformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
      <Divider />
    </Card>
  );
};

export default GameCard;
