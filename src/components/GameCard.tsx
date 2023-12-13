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

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"md"}>{game.name}</Heading>
        <HStack justify={"space-between"}>
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
