import { render, screen } from "@testing-library/react";
import { LandingPage } from "../landing-page";

test("renders main landing page", () => {
  render(<LandingPage />);
  const headerElement = screen.getByText(/Product Review/i);
  expect(headerElement).toBeInTheDocument();
});
