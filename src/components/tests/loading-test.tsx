import { render, screen } from "@testing-library/react";
import { Loading } from "../loading";

test("Loading component shows text", () => {
  render(<Loading message="loading" />);
  const linkElement = screen.getByText(/loading/i);
  expect(linkElement).toBeInTheDocument();
});
