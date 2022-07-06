import { ratingsResponse } from "config/static-data";
import { mapRatingsToColor, getRatingColor } from "../ratings-chart";

describe("MapRatingsToColor util", () => {
  it("should do create the fill key", () => {
    const res = mapRatingsToColor(ratingsResponse);
    const keys = Object.keys(res);
    expect(keys.includes("fill")).toBeTruthy();
  });

  it("should do create the name key", () => {
    const res = mapRatingsToColor(ratingsResponse);
    const keys = Object.keys(res);
    expect(keys.includes("name")).toBeTruthy();
  });

  it("should do create the count key", () => {
    const res = mapRatingsToColor(ratingsResponse);
    const keys = Object.keys(res);
    expect(keys.includes("count")).toBeTruthy();
  });
});

describe("getRatingColor util", () => {
  it("should map a number to a hex string", () => {
    const hex = getRatingColor(3);
    expect(hex.includes("#"));
  });
});
