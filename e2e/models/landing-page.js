import { t, Selector } from "testcafe";

const input = Selector("input");
const div = Selector("div");
const button = Selector("button");
const span = Selector("span");

class LandingPage {
  constructor() {
    this.nameInput = div.withAttribute("data-testid", "name-input");
    this.commentInput = div.withAttribute("data-testid", "comment-input");
    this.emailInput = div.withAttribute("data-testid", "email-input");
    this.ratingInput = span.withAttribute("data-testid", "rating-input");
    this.showNameCheckbox = span.withAttribute("data-testid", "showName-checkbox");
    this.submitButton = button.withAttribute("data-testid", "submit-button");
    this.commentsPage = div.withAttribute("data-testid", "reviews-container");
    this.trendsPage = div.withAttribute("data-testid", "trends-container");
    this.leaveReviewTab = button.withAttribute("data-testid", "tab-0");
    this.reviewsTab = button.withAttribute("data-testid", "tab-1");
    this.trendsTab = button.withAttribute("data-testid", "tab-2");
  }

  async typeName(name) {
    await t.typeText(this.nameInput, name);
  }

  async typeEmail(email) {
    await t.typeText(this.emailInput, email);
  }

  async typeComment(comment) {
    await t.typeText(this.commentInput, comment);
  }

  async clickSubmit() {
    await t.click(this.submitButton);
  }

  async clickShowNameCheckbox() {
    await t.click(this.showNameCheckbox);
  }

  async clickRatingInput() {
    await t.click(this.ratingInput);
  }

  async clickleaveReviewTab() {
    await t.click(this.leaveReviewTab);
  }

  async clickTrendsTab() {
    await t.click(this.trendsTab);
  }

  async clickReviewsTab() {
    await t.click(this.reviewsTab);
  }
}

export default new LandingPage();
