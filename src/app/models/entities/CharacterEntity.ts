import { RedRank } from '../ranks/RedRank';
import { YellowRank } from '../ranks/YellowRank';
import { Ability } from './Ability';
import { BaseEntity } from './BaseEntity';
import { Trait } from './Trait';

export class CharacterEntity extends BaseEntity {
  abilities: Ability[];
  level: number;
  power: number;
  traits: Trait[];
  yellowStars: YellowRank;
  redStars: RedRank;
}
