interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  return (
    <span className="text-[25px]">
      {rating === 3 && "😐"}
      {rating === 4 && "👍"}
      {rating === 5 && "🎯"}
    </span>
  );
};

export default Emoji;
