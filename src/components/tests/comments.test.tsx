import { render, screen } from "@testing-library/react";
import { Comments } from "../comments";

const reviewName = "Harvey Milk";

test("Comments component renders a review", () => {
  render(<Comments />);
  const nameElement = screen.getByText(reviewName);
  expect(nameElement).toBeInTheDocument();
});
