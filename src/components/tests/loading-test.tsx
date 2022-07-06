import { render, screen } from "@testing-library/react";
import { Loading } from "../loading";

test("shows provided loading message", () => {
  render(<Loading message="loading" />);
  const linkElement = screen.getByText(/loading/i);
  expect(linkElement).toBeInTheDocument();
});
