import LandingPage from "../models/landing-page";

fixture`Landing Page`.page("http://localhost:3000");

test("Tab navigation", async (t) => {
  await LandingPage.clickReviewsTab();
  await LandingPage.clickTrendsTab();
  await LandingPage.clickleaveReviewTab();
});

test("Leave Review Form", async (t) => {
  await LandingPage.typeName("Emma");
  await LandingPage.typeEmail("fakeemail@email.com");
  await LandingPage.typeComment("a comment for a review");
  await LandingPage.clickShowNameCheckbox();
  await LandingPage.clickRatingInput();
  await LandingPage.clickSubmit();
});
