import { v4 } from "uuid";
import { addDays, addHours } from "date-fns";
import { ReviewResponse, RatingResponse } from "types";

// Email is PII - should be returned obfuscated
export const reviewsResponse: ReviewResponse[] = [
  {
    id: v4(),
    name: "Harvey Milk",
    createdAt: addDays(new Date(), 2),
    rating: 1,
    email: "****",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar aliquam massa elementum elementum. Duis id commodo mi. Nullam a.",
    showName: true,
  },
  {
    id: v4(),
    name: "Marsha P. Johnson",
    createdAt: addDays(new Date(), 25),
    email: "****",
    rating: 4,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet consequat sapien, eu dictum tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ipsum justo, efficitur mattis lacinia eget, semper eu purus. Praesent molestie eleifend nulla, facilisis pharetra risus commodo in. Donec sed mattis massa. In non elementum diam. Ut id dui eget sapien tincidunt porta vitae vitae ex.",
    showName: true,
  },
  {
    id: v4(),
    name: "Sylvia Rivera",
    createdAt: addHours(new Date(), 3),
    email: "****",
    rating: 5,
    comment:
      "Pellentesque commodo quam quis lorem convallis luctus. Pellentesque pulvinar nec massa at tempus. Morbi fermentum dolor tortor, in placerat leo pretium non. Maecenas quis vulputate turpis, at pharetra eros. Vivamus ac quam aliquam turpis vestibulum sodales sed et turpis. Pellentesque porttitor, justo quis interdum cursus, dui mauris scelerisque tortor, non semper lorem ipsum ac libero. Donec porttitor ipsum ut dui dignissim congue. Ut in fermentum velit, vel cursus tellus. Nulla tincidunt, nulla vitae luctus blandit, lorem ligula viverra massa, ut dictum libero justo sed tellus. Cras eget aliquam arcu, in vestibulum nulla. Quisque gravida malesuada lacus. Maecenas eros odio, molestie ac ligula vitae, euismod pharetra arcu. Integer tincidunt, quam a finibus hendrerit, erat sapien suscipit lectus, at molestie felis ligula sit amet dolor. Quisque in feugiat quam, id eleifend arcu. Vestibulum non tincidunt lectus. Donec pharetra, nulla sed eleifend lobortis, leo nisi sodales ligula, eget tincidunt nunc risus nec augue.",
    showName: true,
  },
  {
    id: v4(),
    name: "Jonathan Van Ness",
    createdAt: addHours(new Date(), 8),
    email: "****",
    rating: 4,
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et.",
    showName: true,
  },
];

export const ratingsResponse: RatingResponse[] = [
  {
    id: v4(),
    rating: 1,
    count: 1,
  },
  {
    id: v4(),
    rating: 2,
    count: 0,
  },
  {
    id: v4(),
    rating: 3,
    count: 0,
  },
  {
    id: v4(),
    rating: 4,
    count: 2,
  },
  {
    id: v4(),
    rating: 5,
    count: 1,
  },
];
