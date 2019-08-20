import { CharacterEntity } from './CharacterEntity';

export class TeamEntity {
  id: string;
  name: string;
  userId: string;
  gameModes: string[];
  character1: CharacterEntity;
  character2: CharacterEntity;
  character3: CharacterEntity;
  character4: CharacterEntity;
  character5: CharacterEntity;
}
