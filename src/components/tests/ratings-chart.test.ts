import { ratingsResponse } from "config/static-data";
import { mapRatingsToColor, getRatingColor } from "../ratings-chart";

describe("MapRatingsToColor util", () => {
  it("should do create the fill key", () => {
    const ratings = mapRatingsToColor(ratingsResponse);
    ratings.map((rating) => {
      expect(rating.count).not.toBeUndefined();
      expect(rating.fill).not.toBeUndefined();
      expect(rating.name).not.toBeUndefined();
    });
  });
});

describe("getRatingColor util", () => {
  it("should map a number to a hex string", () => {
    const hex = getRatingColor(3);
    expect(hex.includes("#"));
  });
});
