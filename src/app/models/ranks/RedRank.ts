import { YellowRank } from './YellowRank';

export class RedRank {
  name = 'RedStar';
  currentRank: number;

  /**
   *
   */
  constructor(currentRank: number, yellowRank: YellowRank) {
    if (yellowRank.currentRank < currentRank) {
      currentRank = yellowRank.currentRank;
      console.log('Red Star rank cannot be greater than Yellow Star Rank.');
    }
    this.currentRank = currentRank;
  }
}
