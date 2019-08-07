export class Gear {
  tier: number;
  slot1: boolean;
  slot2: boolean;
  slot3: boolean;
  slot4: boolean;
  slot5: boolean;
  slot6: boolean;
  private maxGearTier = 13;

  constructor(gearTier: number) {
    this.tier = gearTier;
  }

  public upgradeTier() {
    if (
      this.slot1 &&
      this.slot2 &&
      this.slot3 &&
      this.slot4 &&
      this.slot5 &&
      this.slot6 &&
      this.tier < 13
    ) {
      this.tier++;
      // Reset the slots.
      this.slot1 = false;
      this.slot2 = false;
      this.slot3 = false;
      this.slot4 = false;
      this.slot5 = false;
      this.slot6 = false;
    }
  }

  get maxGear() {
    return this.maxGearTier;
  }
}
