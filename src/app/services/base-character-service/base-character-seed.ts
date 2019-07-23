import { CharacterEntity } from 'src/app/models/entities/CharacterEntity';
import { Trait } from 'src/app/models/entities/Trait';
import { RedRank } from 'src/app/models/ranks/RedRank';
import { YellowRank } from 'src/app/models/ranks/YellowRank';

const yellowRank = Object.assign({}, new YellowRank(0, 0));
const redRank = Object.assign({}, new RedRank(0, yellowRank));

export class BaseCharacters {
  baseCharacters: CharacterEntity[] = [
    BaseIronFist,
    BaseDareDevil,
    BaseJessicaJones,
    BaseLukeCage,
    BaseSpiderMan,
    BaseRonan,
    BaseNoble,
    BaseOracle,
    BaseReaper,
    BaseRoyalGuard,
    BasePunisher
  ];
}

export const BaseIronFist: CharacterEntity = {
  name: 'Iron Fist',
  traits: [
    Trait.Hero,
    Trait.City,
    Trait.MartialArtist,
    Trait.Brawler,
    Trait.Defender,
    Trait.Mystic
  ],
  abilities: [
    {
      type: 'Basic',
      name: 'Martial Arts',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 7
    },
    {
      type: 'Special',
      name: 'Inner Peace',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 7
    },
    {
      type: 'Ultimate',
      name: 'The Iron Fist',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 7
    },
    {
      type: 'Passive',
      // tslint:disable-next-line:quotemark
      name: "Son of K'un-Lun",
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 5
    }
  ],
  level: 0,
  power: 0,
  yellowStars: yellowRank,
  redStars: redRank
};

export const BaseJessicaJones = {
  name: 'Jessica Jones',
  traits: [Trait.Hero, Trait.City, Trait.Bio, Trait.Controller, Trait.Defender],
  abilities: [
    {
      type: 'Basic',
      name: 'Jaw Breaker',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 7
    },
    {
      type: 'Special',
      name: 'Shake It Off',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 7
    },
    {
      type: 'Ultimate',
      name: 'Rejection',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 7
    },
    {
      type: 'Passive',
      name: 'Denial',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 5
    }
  ],
  level: 0,
  power: 0,
  yellowStars: yellowRank,
  redStars: redRank
};

export const BaseDareDevil = {
  name: 'DareDevil',
  traits: [
    Trait.Hero,
    Trait.City,
    Trait.Bio,
    Trait.Brawler,
    Trait.Defender,
    Trait.MartialArtist
  ],
  abilities: [
    {
      type: 'Basic',
      name: 'Strike Without Fear',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 7
    },
    {
      type: 'Special',
      name: 'Throw Baton',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 7
    },
    {
      type: 'Ultimate',
      name: 'Brawl',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 7
    },
    {
      type: 'Passive',
      name: 'Enhance Senses',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 5
    }
  ],
  level: 0,
  power: 0,
  yellowStars: yellowRank,
  redStars: redRank
};

export const BaseLukeCage = {
  name: 'Luke Cage',
  traits: [Trait.Hero, Trait.City, Trait.Bio, Trait.Protector, Trait.Defender],
  abilities: [
    {
      type: 'Basic',
      name: 'Beat Up',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 7
    },
    {
      type: 'Special',
      name: 'Bring it On!',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 7
    },
    {
      type: 'Ultimate',
      name: 'Unbreakable',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 7
    },
    {
      type: 'Passive',
      name: 'Power Man',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 5
    }
  ],
  level: 0,
  power: 0,
  yellowStars: yellowRank,
  redStars: redRank
};

export const BaseRonan = {
  name: 'Ronan the Accuser',
  traits: [Trait.Villain, Trait.Cosmic, Trait.Mystic, Trait.Controller, Trait.Kree],
  abilities: [
    {
      type: 'Basic',
      name: 'Hammer Smash',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 7
    },
    {
      type: 'Special',
      name: 'Judgement',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 7
    },
    {
      type: 'Ultimate',
      name: 'Universal Weapon',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 7
    },
    {
      type: 'Passive',
      name: 'Accuser',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 5
    }
  ],
  level: 0,
  power: 0,
  yellowStars: yellowRank,
  redStars: redRank
};

export const BaseReaper = {
  name: 'Kree Reaper',
  traits: [
    Trait.Villain,
    Trait.Cosmic,
    Trait.Bio,
    Trait.Brawler,
    Trait.Kree,
    Trait.Minion
  ],
  abilities: [
    {
      type: 'Basic',
      name: 'Predatory Strike',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 7
    },
    {
      type: 'Special',
      name: 'Ferocious Pursuit',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 7
    },
    {
      type: 'Passive',
      name: 'Hunter-Killer',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 5
    }
  ],
  level: 0,
  power: 0,
  yellowStars: yellowRank,
  redStars: redRank
};

export const BaseOracle = {
  name: 'Kree Oracle',
  traits: [
    Trait.Villain,
    Trait.Cosmic,
    Trait.Tech,
    Trait.Support,
    Trait.Kree,
    Trait.Minion
  ],
  abilities: [
    {
      type: 'Basic',
      name: 'Kree Energy Pistol',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 7
    },
    {
      type: 'Special',
      name: 'Necromachine Cloud',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 7
    },
    {
      type: 'Passive',
      name: 'Zeal',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 5
    }
  ],
  level: 0,
  power: 0,
  yellowStars: yellowRank,
  redStars: redRank
};

export const BaseNoble = {
  name: 'Kree Noble',
  traits: [
    Trait.Villain,
    Trait.Cosmic,
    Trait.Bio,
    Trait.Controller,
    Trait.Kree,
    Trait.Minion
  ],
  abilities: [
    {
      type: 'Basic',
      name: 'Kree Sidearm',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 7
    },
    {
      type: 'Special',
      name: 'Imperial Decree',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 7
    },
    {
      type: 'Passive',
      name: 'Loyalist',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 5
    }
  ],
  level: 0,
  power: 0,
  yellowStars: yellowRank,
  redStars: redRank
};

export const BaseRoyalGuard = {
  name: 'Kree Royal Guard',
  traits: [
    Trait.Villain,
    Trait.Cosmic,
    Trait.Bio,
    Trait.Protector,
    Trait.Kree,
    Trait.Minion
  ],
  abilities: [
    {
      type: 'Basic',
      name: 'Guardian Blaster',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 7
    },
    {
      type: 'Special',
      name: 'Call to Glory',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 7
    },
    {
      type: 'Passive',
      name: 'Royal Guard Armor',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 5
    }
  ],
  level: 0,
  power: 0,
  yellowStars: yellowRank,
  redStars: redRank
};

export const BaseSpiderMan = {
  name: 'Spider-Man',
  traits: [Trait.Hero, Trait.City, Trait.Bio, Trait.Brawler, Trait.SpiderVerse],
  abilities: [
    {
      type: 'Basic',
      name: 'Agile Attack',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 7
    },
    {
      type: 'Special',
      name: 'Web Slinger',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 7
    },
    {
      type: 'Ultimate',
      name: 'Tangled Web',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 7
    },
    {
      type: 'Passive',
      name: 'Spidey-Sense',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 5
    }
  ],
  level: 0,
  power: 0,
  yellowStars: yellowRank,
  redStars: redRank
};

export const BasePunisher = {
  name: 'Punisher',
  traits: [Trait.Hero, Trait.City, Trait.Skill, Trait.Blaster],
  abilities: [
    {
      type: 'Basic',
      name: 'M4 Carbine',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 7
    },
    {
      type: 'Special',
      name: 'Grenade Launcher',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 7
    },
    {
      type: 'Ultimate',
      name: 'Fully Loaded',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 7
    },
    {
      type: 'Passive',
      name: 'Lock and Load',
      description: 'DescriptionPlaceHolder',
      level: 1,
      maxLevel: 5
    }
  ],
  level: 0,
  power: 0,
  yellowStars: yellowRank,
  redStars: redRank
};
