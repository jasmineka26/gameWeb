import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  return (
    <Badge
      fontSize={"14px"}
      paddingX={2}
      rounded={4}
      bgColor={score > 90 ? "green" : score > 80 ? "orange" : ""}
      fontFamily={"sans-serif"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
