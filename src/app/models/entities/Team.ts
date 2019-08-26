import { CharacterEntity } from './CharacterEntity';

export class Team {
  id?: string;
  name: string;
  userId: string;
  gameModes: string[];
  character1: CharacterEntity;
  character2: CharacterEntity;
  character3: CharacterEntity;
  character4: CharacterEntity;
  character5: CharacterEntity;
  totalPower?: number;

  calculatePower() {
    this.totalPower =
      this.character1.power +
      this.character2.power +
      this.character3.power +
      this.character4.power +
      this.character5.power;
  }
}
