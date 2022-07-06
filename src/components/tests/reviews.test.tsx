import { render, screen } from "@testing-library/react";
import { Reviews } from "../reviews";

const mockReview = [
  {
    id: "1234",
    name: "Harvey Milk",
    createdAt: new Date(),
    rating: 1,
    email: "****",
    comment: "basic comment",
    showName: true,
  },
  {
    id: "5678",
    name: "Tash Sultana",
    createdAt: new Date(),
    rating: 1,
    email: "****",
    comment: "basic comment",
    showName: false,
  },
];

test("renders a reviewers name when allowed", () => {
  render(<Reviews reviews={mockReview} />);
  const nameElement = screen.getByText(mockReview[0].name);
  expect(nameElement).toBeInTheDocument();
});

test("reviewers name hidden when not allowed", () => {
  render(<Reviews reviews={mockReview} />);
  expect(() => screen.getByText(mockReview[1].name)).toThrow();
});
