export interface ReviewResponse {
  id: string;
  createdAt: Date;
  name: string;
  email: string;
  rating: number;
  comment: string;
  showName: boolean;
}

export type LocalReview = Omit<ReviewResponse, "id" | "createdAt">;

export interface RatingResponse {
  rating: number;
  count: number;
  id: string;
}

export enum TabsEnum {
  FORM,
  REVIEWS,
  TRENDS,
}
