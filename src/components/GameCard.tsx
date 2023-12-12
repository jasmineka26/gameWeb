import { Card, CardBody, Divider, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlarformIconList from "./PlarformIconList";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"md"}>{game.name}</Heading>
        <PlarformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
      <Divider />
    </Card>
  );
};

export default GameCard;
