import { Paper, styled, Box, Typography } from "@mui/material";
import { formatDistanceToNow } from "date-fns";
import { ReviewResponse } from "types";
import { Loading } from "./loading";
import { StarRating } from "./star-rating";

interface CommentProps {
  reviews?: ReviewResponse[];
}

const Container = styled(Paper)(({ theme }) => ({
  color: theme.palette.text.secondary,
  maxHeight: "400px",
  overflow: "auto",
  padding: theme.spacing(1),
}));

const anon = "Anonymous User";

export const Comments = ({ reviews }: CommentProps) => {
  if (!reviews) return <Loading message="Loading Comments" />;
  return (
    <Container data-testid="comments-container" elevation={0}>
      {reviews.map((review) => (
        <Box
          margin="0 0 25px"
          aria-label="Reviews section"
          key={review.id}
          borderBottom="0.5px solid grey"
        >
          <Box display="flex" alignItems="center">
            <Typography sx={{ marginRight: "5px" }} aria-label="Name">
              {review.showName ? review.name : anon}
            </Typography>
            <StarRating rating={review.rating} />
          </Box>
          <Typography sx={{ margin: "25px 0 25px" }} aria-label="Comment">
            {review.comment}
          </Typography>
          <Typography aria-label="Created At">
            Created {formatDistanceToNow(review.createdAt)} ago
          </Typography>
        </Box>
      ))}
    </Container>
  );
};
