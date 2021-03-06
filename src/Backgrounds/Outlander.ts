import { Background, BackgroundParams } from "./Background";

export class Outlander extends Background {
    constructor(params: BackgroundParams) {
      super(
        "Outlander",
        ["athletics", "survival"],
        [...params.languages],
        [params.instrument],
        ["STAFF", "HUNTING TRAP", "CLOTHES, TRAVELER'S"],
        [],
        10,
        [
          {
            title: "Wanderer",
            description:
              "You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth.",
          },
        ]
      );
    }
  }