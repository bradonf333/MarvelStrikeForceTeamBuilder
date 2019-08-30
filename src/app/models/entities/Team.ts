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
  totalPower: number;
}

export function calculatePower(team: Team): number {
  return (
    team.character1.power +
    team.character2.power +
    team.character3.power +
    team.character4.power +
    team.character5.power
  );
}
