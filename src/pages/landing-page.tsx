import * as React from "react";
import { Paper, Box, styled, Typography } from "@mui/material";
import { Comments, RatingsChart, Tabs, ReviewForm } from "components";
import { reviewsResponse, ratingsResponse } from "config/static-reviews";
import { ReviewResponse, RatingResponse, TabsEnum } from "types";

const TabsArray = [
  { key: 0, label: "LEAVE REVIEW" },
  { key: 1, label: "REVIEWS" },
  { key: 2, label: "REVIEW TRENDS" },
];

const Card = styled(Paper)(({ theme }) => ({
  backgroundColor: "white",
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  margin: "1em 10em 1em 10em",
}));

export function LandingPage() {
  const [tab, setTab] = React.useState(TabsEnum.FORM);
  const [reviews, fetchReviews] = React.useState<ReviewResponse[]>();
  const [ratings, fetchRatings] = React.useState<RatingResponse[]>();
  React.useEffect(() => {
    fetchReviews(reviewsResponse);
    fetchRatings(ratingsResponse);
  }, []);
  return (
    <Card aria-label="Product Review Landing Page">
      <Box margin="4em" justifyContent="center" alignItems="center">
        <header>
          <Typography variant="h2">Product Review</Typography>
          <Typography>We appreciate you taking the time to leave a review below.</Typography>
        </header>
        <section>
          <Tabs tab={tab} tabs={TabsArray} handleTabChange={(tab: TabsEnum) => setTab(tab)} />
        </section>
        <section aria-labelledby={`tab-${tab}`}>
          {tab === TabsEnum.FORM && <ReviewForm />}
          {tab === TabsEnum.REVIEWS && <Comments reviews={reviews} />}
          {tab === TabsEnum.TRENDS && <RatingsChart ratings={ratings} />}
        </section>
      </Box>
    </Card>
  );
}
