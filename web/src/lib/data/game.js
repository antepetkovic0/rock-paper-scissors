export const GAME_SYMBOL = {
  ROCK: 'rock',
  PAPER: 'paper',
  SCISSORS: 'scissors',
  LIZARD: 'lizard',
  SPOCK: 'spock'
};

export const GAME_SYMBOL_COLOR = {
  [GAME_SYMBOL.ROCK]: 'red',
  [GAME_SYMBOL.PAPER]: 'yellow',
  [GAME_SYMBOL.SCISSORS]: 'purple',
  [GAME_SYMBOL.LIZARD]: 'green',
  [GAME_SYMBOL.SPOCK]: 'blue'
};

export const GAME_RULES = {
  [GAME_SYMBOL.ROCK]: {
    win: [GAME_SYMBOL.SCISSORS, GAME_SYMBOL.LIZARD],
    lose: [GAME_SYMBOL.PAPER, GAME_SYMBOL.SPOCK]
  },
  [GAME_SYMBOL.PAPER]: {
    win: [GAME_SYMBOL.ROCK, GAME_SYMBOL.SPOCK],
    lose: [GAME_SYMBOL.SCISSORS, GAME_SYMBOL.LIZARD]
  },
  [GAME_SYMBOL.SCISSORS]: {
    win: [GAME_SYMBOL.PAPER, GAME_SYMBOL.LIZARD],
    lose: [GAME_SYMBOL.ROCK, GAME_SYMBOL.SPOCK]
  },
  [GAME_SYMBOL.LIZARD]: {
    win: [GAME_SYMBOL.SPOCK, GAME_SYMBOL.PAPER],
    lose: [GAME_SYMBOL.SCISSORS, GAME_SYMBOL.ROCK]
  },
  [GAME_SYMBOL.SPOCK]: {
    win: [GAME_SYMBOL.SCISSORS, GAME_SYMBOL.ROCK],
    lose: [GAME_SYMBOL.PAPER, GAME_SYMBOL.LIZARD]
  }
};

export const GAME_RULES_CONTENT = [
  {
    title: 'Rock crushes Scissors',
    description:
      'Rock obliterates the feeble Scissors, leaving them shattered in its wake'
  },
  {
    title: 'Scissors cut Paper',
    description:
      'Sharp as ever, Scissors slice through the fragile Paper, leaving it in pieces'
  },
  {
    title: 'Paper covers Rock',
    description:
      'A simple sheet of Paper can shield Rock, rendering it powerless beneath its protection'
  },
  {
    title: 'Rock crushes Lizard',
    description:
      'In an act of dominance, Rock flattens the unfortunate Lizard, proving its might'
  },
  {
    title: 'Lizard poisons Spock',
    description:
      'With its venomous touch, Lizard makes Spock succumb to its toxic bite'
  },
  {
    title: 'Spock smashes Scissors',
    description:
      'Utilizing its superior intellect, Spock smashes Scissors into oblivion'
  },
  {
    title: 'Scissors decapitate Lizard',
    description:
      "With a swift strike, Scissors puts an end to the Lizard's reign"
  },
  {
    title: 'Lizard eats Paper',
    description:
      'Hungry for victory, Lizard devours the Paper, leaving nothing but scrap'
  },
  {
    title: 'Paper disproves Spock',
    description:
      'Armed with logic, Paper disproves the intellectual prowess of Spock'
  },
  {
    title: 'Spock vaporizes Rock',
    description:
      'Utilizing otherworldly abilities, Spock vaporizes Rock, reducing it to nothingness'
  }
];
