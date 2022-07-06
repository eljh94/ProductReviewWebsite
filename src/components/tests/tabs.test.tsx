import { render, screen } from "@testing-library/react";
import { Tabs } from "../tabs";

const tabsArray = [
  { key: 0, label: "First Tab" },
  { key: 1, label: "Second Tab" },
];

test("shows tab labels", () => {
  render(<Tabs tabs={tabsArray} tab={0} handleTabChange={() => {}} />);
  const labelElement = screen.getByText(tabsArray[0].label);
  expect(labelElement).toBeInTheDocument();
});
