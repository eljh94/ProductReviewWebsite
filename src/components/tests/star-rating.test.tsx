import { render } from "@testing-library/react";
import { StarRating } from "../star-rating";

test("should match snapshot for provided rating", () => {
  const { container } = render(<StarRating rating={5} />);
  expect(container.firstChild).toMatchSnapshot();
});
