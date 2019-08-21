import { BaseEntity } from './BaseEntity';
import { CharacterEntity } from './CharacterEntity';

export class TeamEntity extends BaseEntity {
  name: string;
  userId: string;
  gameModes: string[];
  character1: CharacterEntity;
  character2: CharacterEntity;
  character3: CharacterEntity;
  character4: CharacterEntity;
  character5: CharacterEntity;
}
