import StarIcon from "@mui/icons-material/Star";

interface StarRatingProps {
  rating: number;
}

export const StarRating = ({ rating }: StarRatingProps) => (
  <>
    {Array.from({ length: rating }).map((_, i) => (
      <StarIcon key={i} />
    ))}
  </>
);
