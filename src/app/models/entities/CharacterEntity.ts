import { RedRank } from '../ranks/RedRank';
import { YellowRank } from '../ranks/YellowRank';
import { Ability } from './Ability';
import { BaseEntity } from './BaseEntity';

export class CharacterEntity extends BaseEntity {
  abilities: Ability[];
  level: number;
  power: number;
  yellowStars: YellowRank;
  redStars: RedRank;
}
