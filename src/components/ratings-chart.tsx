import { Box } from "@mui/material";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from "recharts";
import { RatingResponse } from "types";
import { Loading } from "./loading";

interface RatingsChartProps {
  ratings?: RatingResponse[];
}

export const getRatingColor = (rating: number) => {
  switch (rating) {
    case 1:
      return "#8884d8";
    case 2:
      return "#83a6ed";
    case 3:
      return "#8dd1e1";
    case 4:
      return "#82ca9d";
    case 5:
      return "#a4de6c";
    default:
      return "#ffb84d";
  }
};

export const mapRatingsToColor = (ratings: RatingResponse[]) =>
  ratings.map((r) => ({
    count: r.count,
    name: `${r.rating} star`,
    fill: getRatingColor(r.rating),
  }));

export function RatingsChart({ ratings }: RatingsChartProps) {
  if (!ratings) return <Loading message="Loading Chart" />;
  const data = mapRatingsToColor(ratings);
  return (
    <Box data-testid="trends-container" display="flex" justifyContent="center" alignItems="center">
      <BarChart aria-label="Ratings Bar Chart" width={400} height={200} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis dataKey="count" />
        <Tooltip />
        <Bar dataKey="count" />
      </BarChart>
    </Box>
  );
}
