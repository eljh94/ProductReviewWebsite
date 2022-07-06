import { render, screen } from "@testing-library/react";
import { ReviewForm } from "../review-form";

test("contains a label for email input", () => {
  render(<ReviewForm />);
  const emailElement = screen.getByText(/Email/i);
  expect(emailElement).toBeInTheDocument();
});

test("contains a label for email input", () => {
  render(<ReviewForm />);
  const emailElement = screen.getByText(/Email/i);
  expect(emailElement).toBeInTheDocument();
});
