export class YellowRank {
  name = 'YellowStar';
  shardsToRankUp: number;
  currentRank: number;
  currentShards: number;
  baseShardsForRank = 15;

  constructor(currentRank: number, currentShards: number) {
    this.currentRank = currentRank;
    this.currentShards = currentShards;
    this.calculateShardsToRankUp();
  }

  calculateShardsToRankUp() {
    this.shardsToRankUp = this.currentRank * this.baseShardsForRank - this.currentShards;
    if (this.shardsToRankUp <= 0) {
      this.shardsToRankUp = this.baseShardsForRank;
    }
  }
}
