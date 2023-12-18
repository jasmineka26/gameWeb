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
import Emoji from "./Emoji";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"} width="100%">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody paddingX={3}>
        <HStack justifyContent="space-between" marginBottom={2}>
          <PlarformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"xl"}>{game.name}</Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
      <Divider />
    </Card>
  );
};

export default GameCard;
