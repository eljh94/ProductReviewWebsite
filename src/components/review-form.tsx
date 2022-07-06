import * as React from "react";
import { Box, Rating, Checkbox, Button } from "@mui/material";
import { TextArea, TextInput } from "components/form";
import { LocalReview } from "types";

const EmptyReview: LocalReview = {
  name: "",
  email: "",
  rating: 0,
  comment: "",
  showName: true,
};

const bottomMargin = { marginBottom: "25px" };

export function ReviewForm() {
  const [review, setReview] = React.useState<LocalReview>(EmptyReview);
  const handleFormSubmit = () => {
    // clearing the form but should be hooked to an API
    setReview(EmptyReview);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <Box display="flex" flexDirection="column">
        <TextInput
          title="Email"
          onChange={(email) => setReview({ ...review, email })}
          value={review.email}
          sx={bottomMargin}
          data-testid="email-input"
        />
        <TextInput
          title="Name"
          onChange={(name) => setReview({ ...review, name })}
          value={review.name}
          sx={bottomMargin}
          data-testid="name-input"
        />
        What did you think of our product?
        <Rating
          value={review.rating || 0}
          onChange={(_, rating) => setReview({ ...review, rating: rating || 0 })}
          sx={bottomMargin}
          data-testid="rating-input"
        />
        <TextArea
          title="Add Comment"
          sx={bottomMargin}
          onChange={(comment) => setReview({ ...review, comment })}
          value={review.comment}
          data-testid="comment-input"
        />
        <Box sx={bottomMargin}>
          <Checkbox
            onChange={(_, showName) => setReview({ ...review, showName })}
            checked={review.showName}
            data-testid="showName-checkbox"
          />{" "}
          Include name on public review
        </Box>
      </Box>
      <Button data-testid="submit-button" variant="contained" aria-label="Submit" type="submit">
        Submit
      </Button>
    </form>
  );
}
