const pokedex = [
  {
    pokedex_id: 1,
    generation: 1,
    category: "Pokémon Graine",
    name: {
      fr: "Bulbizarre",
      en: "Bulbasaur",
      jp: "フシギダネ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/1/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/1/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Engrais",
        tc: false,
      },
      {
        name: "Chlorophylle",
        tc: true,
      },
    ],
    stats: {
      hp: 45,
      atk: 49,
      def: 49,
      spe_atk: 65,
      spe_def: 65,
      vit: 45,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 2,
          name: "Herbizarre",
          condition: "Niveau 16",
        },
        {
          pokedex_id: 3,
          name: "Florizarre",
          condition: "Niveau 32",
        },
      ],
      mega: null,
    },
    height: "0,7 m",
    weight: "6,9 kg",
    egg_groups: ["Monstrueux", "Végétal"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 2,
    generation: 1,
    category: "Pokémon Graine",
    name: {
      fr: "Herbizarre",
      en: "Ivysaur",
      jp: "フシギソウ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/2/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/2/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Engrais",
        tc: false,
      },
      {
        name: "Chlorophylle",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 62,
      def: 63,
      spe_atk: 80,
      spe_def: 80,
      vit: 60,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 1,
          name: "Bulbizarre",
          condition: "Niveau 16",
        },
      ],
      next: [
        {
          pokedex_id: 3,
          name: "Florizarre",
          condition: "Niveau 32",
        },
      ],
      mega: null,
    },
    height: "1,0 m",
    weight: "13,0 kg",
    egg_groups: ["Monstrueux", "Végétal"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 3,
    generation: 1,
    category: "Pokémon Graine",
    name: {
      fr: "Florizarre",
      en: "Venusaur",
      jp: "フシギバナ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/3/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/3/shiny.png",
      gmax: {
        regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/3/gmax-regular.png",
        shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/3/gmax-shiny.png",
      },
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Engrais",
        tc: false,
      },
      {
        name: "Chlorophylle",
        tc: true,
      },
    ],
    stats: {
      hp: 80,
      atk: 82,
      def: 83,
      spe_atk: 100,
      spe_def: 100,
      vit: 80,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 1,
          name: "Bulbizarre",
          condition: "Niveau 16",
        },
        {
          pokedex_id: 2,
          name: "Herbizarre",
          condition: "Niveau 32",
        },
      ],
      next: null,
      mega: [
        {
          orbe: "Florizarrite",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/3/mega-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/3/mega-shiny.png",
          },
        },
      ],
    },
    height: "2,0 m",
    weight: "100,0 kg",
    egg_groups: ["Monstrueux", "Végétal"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 4,
    generation: 1,
    category: "Pokémon Lézard",
    name: {
      fr: "Salamèche",
      en: "Charmander",
      jp: "ヒトカゲ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/4/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/4/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Feu",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png",
      },
    ],
    talents: [
      {
        name: "Brasier",
        tc: false,
      },
      {
        name: "Force Soleil",
        tc: true,
      },
    ],
    stats: {
      hp: 39,
      atk: 52,
      def: 43,
      spe_atk: 60,
      spe_def: 50,
      vit: 65,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 5,
          name: "Reptincel",
          condition: "Niveau 16",
        },
        {
          pokedex_id: 6,
          name: "Dracaufeu",
          condition: "Niveau 36",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "8,5 kg",
    egg_groups: ["Draconique", "Monstrueux"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 5,
    generation: 1,
    category: "Pokémon Flamme",
    name: {
      fr: "Reptincel",
      en: "Charmeleon",
      jp: "リザード",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/5/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/5/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Feu",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png",
      },
    ],
    talents: [
      {
        name: "Brasier",
        tc: false,
      },
      {
        name: "Force Soleil",
        tc: true,
      },
    ],
    stats: {
      hp: 58,
      atk: 64,
      def: 58,
      spe_atk: 80,
      spe_def: 65,
      vit: 80,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 4,
          name: "Salamèche",
          condition: "Niveau 16",
        },
      ],
      next: [
        {
          pokedex_id: 6,
          name: "Dracaufeu",
          condition: "Niveau 36",
        },
      ],
      mega: null,
    },
    height: "1,1 m",
    weight: "19,0 kg",
    egg_groups: ["Monstrueux", "Draconique"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 6,
    generation: 1,
    category: "Pokémon Flamme",
    name: {
      fr: "Dracaufeu",
      en: "Charizard",
      jp: "リザードン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/6/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/6/shiny.png",
      gmax: {
        regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/6/gmax-regular.png",
        shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/6/gmax-shiny.png",
      },
    },
    types: [
      {
        name: "Feu",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Brasier",
        tc: false,
      },
      {
        name: "Force Soleil",
        tc: true,
      },
    ],
    stats: {
      hp: 78,
      atk: 84,
      def: 78,
      spe_atk: 109,
      spe_def: 85,
      vit: 100,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.25,
      },
      {
        name: "Roche",
        multiplier: 4,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 4,
          name: "Salamèche",
          condition: "Niveau 16",
        },
        {
          pokedex_id: 5,
          name: "Reptincel",
          condition: "Niveau 36",
        },
      ],
      next: null,
      mega: [
        {
          orbe: "Dracaufite X",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/6/mega_x-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/6/mega_x-shiny.png",
          },
        },
        {
          orbe: "Dracaufite Y",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/6/mega_y-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/6/mega_y-shiny.png",
          },
        },
      ],
    },
    height: "1,7 m",
    weight: "90,5 kg",
    egg_groups: ["Draconique", "Monstrueux"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 7,
    generation: 1,
    category: "Pokémon Minitortue",
    name: {
      fr: "Carapuce",
      en: "Squirtle",
      jp: "ゼニガメ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/7/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/7/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Torrent",
        tc: false,
      },
      {
        name: "Cuvette",
        tc: true,
      },
    ],
    stats: {
      hp: 44,
      atk: 48,
      def: 65,
      spe_atk: 50,
      spe_def: 64,
      vit: 43,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 8,
          name: "Carabaffe",
          condition: "Niveau 16",
        },
        {
          pokedex_id: 9,
          name: "Tortank",
          condition: "Niveau 36",
        },
      ],
      mega: null,
    },
    height: "0,5 m",
    weight: "9,0 kg",
    egg_groups: ["Aquatique 1", "Monstrueux"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 8,
    generation: 1,
    category: "Pokémon Tortue",
    name: {
      fr: "Carabaffe",
      en: "Wartortle",
      jp: "カメール",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/8/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/8/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Torrent",
        tc: false,
      },
      {
        name: "Cuvette",
        tc: true,
      },
    ],
    stats: {
      hp: 59,
      atk: 63,
      def: 80,
      spe_atk: 65,
      spe_def: 80,
      vit: 58,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 7,
          name: "Carapuce",
          condition: "Niveau 16",
        },
      ],
      next: [
        {
          pokedex_id: 9,
          name: "Tortank",
          condition: "Niveau 36",
        },
      ],
      mega: null,
    },
    height: "1,0 m",
    weight: "22,5 kg",
    egg_groups: ["Aquatique 1", "Monstrueux"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 9,
    generation: 1,
    category: "Pokémon Carapace",
    name: {
      fr: "Tortank",
      en: "Blastoise",
      jp: "カメックス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/9/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/9/shiny.png",
      gmax: {
        regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/9/gmax-regular.png",
        shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/9/gmax-shiny.png",
      },
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Torrent",
        tc: false,
      },
      {
        name: "Cuvette",
        tc: true,
      },
    ],
    stats: {
      hp: 79,
      atk: 83,
      def: 100,
      spe_atk: 85,
      spe_def: 105,
      vit: 78,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 7,
          name: "Carapuce",
          condition: "Niveau 16",
        },
        {
          pokedex_id: 8,
          name: "Carabaffe",
          condition: "Niveau 36",
        },
      ],
      next: null,
      mega: [
        {
          orbe: "Tortankite",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/9/mega-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/9/mega-shiny.png",
          },
        },
      ],
    },
    height: "1,6 m",
    weight: "85,5 kg",
    egg_groups: ["Aquatique 1", "Monstrueux"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 10,
    generation: 1,
    category: "Pokémon Ver",
    name: {
      fr: "Chenipan",
      en: "Caterpie",
      jp: "キャタピー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/10/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/10/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
    ],
    talents: [
      {
        name: "Écran Poudre",
        tc: false,
      },
      {
        name: "Fuite",
        tc: true,
      },
    ],
    stats: {
      hp: 45,
      atk: 30,
      def: 35,
      spe_atk: 20,
      spe_def: 20,
      vit: 45,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 11,
          name: "Chrysacier",
          condition: "Niveau 7",
        },
        {
          pokedex_id: 12,
          name: "Papilusion",
          condition: "Niveau 10",
        },
      ],
      mega: null,
    },
    height: "0,3 m",
    weight: "2,9 kg",
    egg_groups: ["Insectoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 11,
    generation: 1,
    category: "Pokémon Cocon",
    name: {
      fr: "Chrysacier",
      en: "Metapod",
      jp: "トランセル",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/11/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/11/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
    ],
    talents: [
      {
        name: "Mue",
        tc: false,
      },
    ],
    stats: {
      hp: 50,
      atk: 20,
      def: 55,
      spe_atk: 25,
      spe_def: 25,
      vit: 30,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 10,
          name: "Chenipan",
          condition: "Niveau 7",
        },
      ],
      next: [
        {
          pokedex_id: 12,
          name: "Papilusion",
          condition: "Niveau 10",
        },
      ],
      mega: null,
    },
    height: "0,7 m",
    weight: "9,9 kg",
    egg_groups: ["Insectoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 120,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 12,
    generation: 1,
    category: "Pokémon Papillon",
    name: {
      fr: "Papilusion",
      en: "Butterfree",
      jp: "バタフリー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/12/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/12/shiny.png",
      gmax: {
        regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/12/gmax-regular.png",
        shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/12/gmax-shiny.png",
      },
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Œil Composé",
        tc: false,
      },
      {
        name: "Lentiteintée",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 45,
      def: 50,
      spe_atk: 90,
      spe_def: 80,
      vit: 70,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.25,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 4,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 10,
          name: "Chenipan",
          condition: "Niveau 7",
        },
        {
          pokedex_id: 11,
          name: "Chrysacier",
          condition: "Niveau 10",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,1 m",
    weight: "32,0 kg",
    egg_groups: ["Insectoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 13,
    generation: 1,
    category: "Pokémon Insectopic",
    name: {
      fr: "Aspicot",
      en: "Weedle",
      jp: "ビードル",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/13/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/13/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Écran Poudre",
        tc: false,
      },
      {
        name: "Fuite",
        tc: true,
      },
    ],
    stats: {
      hp: 40,
      atk: 35,
      def: 30,
      spe_atk: 20,
      spe_def: 20,
      vit: 50,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.25,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 14,
          name: "Coconfort",
          condition: "Niveau 7",
        },
        {
          pokedex_id: 15,
          name: "Dardargnan",
          condition: "Niveau 10",
        },
      ],
      mega: null,
    },
    height: "0,3 m",
    weight: "3,2 kg",
    egg_groups: ["Insectoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 14,
    generation: 1,
    category: "Pokémon Cocon",
    name: {
      fr: "Coconfort",
      en: "Kakuna",
      jp: "コクーン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/14/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/14/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Mue",
        tc: false,
      },
    ],
    stats: {
      hp: 45,
      atk: 25,
      def: 50,
      spe_atk: 25,
      spe_def: 25,
      vit: 35,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.25,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 13,
          name: "Aspicot",
          condition: "Niveau 7",
        },
      ],
      next: [
        {
          pokedex_id: 15,
          name: "Dardargnan",
          condition: "Niveau 10",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "10,0 kg",
    egg_groups: ["Insectoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 120,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 15,
    generation: 1,
    category: "Pokémon Guêpoison",
    name: {
      fr: "Dardargnan",
      en: "Beedrill",
      jp: "スピアー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/15/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/15/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Essaim",
        tc: false,
      },
      {
        name: "Sniper",
        tc: true,
      },
    ],
    stats: {
      hp: 65,
      atk: 90,
      def: 40,
      spe_atk: 45,
      spe_def: 80,
      vit: 75,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.25,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 13,
          name: "Aspicot",
          condition: "Niveau 7",
        },
        {
          pokedex_id: 14,
          name: "Coconfort",
          condition: "Niveau 10",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,0 m",
    weight: "29,5 kg",
    egg_groups: ["Insectoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 16,
    generation: 1,
    category: "Pokémon Minoiseau",
    name: {
      fr: "Roucool",
      en: "Pidgey",
      jp: "ポッポ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/16/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/16/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Regard Vif",
        tc: false,
      },
      {
        name: "Pieds Confus",
        tc: false,
      },
      {
        name: "Cœur de Coq",
        tc: true,
      },
    ],
    stats: {
      hp: 40,
      atk: 45,
      def: 40,
      spe_atk: 35,
      spe_def: 35,
      vit: 56,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 17,
          name: "Roucoups",
          condition: "Niveau 18",
        },
        {
          pokedex_id: 18,
          name: "Roucarnage",
          condition: "Niveau 36",
        },
      ],
      mega: null,
    },
    height: "0,3 m",
    weight: "1,8 kg",
    egg_groups: ["Aérien"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 17,
    generation: 1,
    category: "Pokémon Oiseau",
    name: {
      fr: "Roucoups",
      en: "Pidgeotto",
      jp: "ピジョン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/17/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/17/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Regard Vif",
        tc: false,
      },
      {
        name: "Pieds Confus",
        tc: false,
      },
      {
        name: "Cœur de Coq",
        tc: true,
      },
    ],
    stats: {
      hp: 63,
      atk: 60,
      def: 55,
      spe_atk: 50,
      spe_def: 50,
      vit: 71,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 16,
          name: "Roucool",
          condition: "Niveau 18",
        },
      ],
      next: [
        {
          pokedex_id: 18,
          name: "Roucarnage",
          condition: "Niveau 36",
        },
      ],
      mega: null,
    },
    height: "1,1 m",
    weight: "30,0 kg",
    egg_groups: ["Aérien"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 120,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 18,
    generation: 1,
    category: "Pokémon Oiseau",
    name: {
      fr: "Roucarnage",
      en: "Pidgeot",
      jp: "ピジョット",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/18/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/18/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Regard Vif",
        tc: false,
      },
      {
        name: "Pieds Confus",
        tc: false,
      },
      {
        name: "Cœur de Coq",
        tc: true,
      },
    ],
    stats: {
      hp: 83,
      atk: 80,
      def: 75,
      spe_atk: 70,
      spe_def: 70,
      vit: 101,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 16,
          name: "Roucool",
          condition: "Niveau 18",
        },
        {
          pokedex_id: 17,
          name: "Roucoups",
          condition: "Niveau 36",
        },
      ],
      next: null,
      mega: [
        {
          orbe: "Roucarnagite",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/18/mega-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/18/mega-shiny.png",
          },
        },
      ],
    },
    height: "1,5 m",
    weight: "39,5 kg",
    egg_groups: ["Aérien"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 19,
    generation: 1,
    category: "Pokémon Souris",
    name: {
      fr: "Rattata",
      en: "Rattata",
      jp: "コラッタ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/19/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/19/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Fuite",
        tc: false,
      },
      {
        name: "Cran",
        tc: false,
      },
      {
        name: "Agitation",
        tc: true,
      },
    ],
    stats: {
      hp: 30,
      atk: 56,
      def: 35,
      spe_atk: 25,
      spe_def: 35,
      vit: 72,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 20,
          name: "Rattatac",
          condition: "Niveau 20",
        },
      ],
      mega: null,
    },
    height: "0,3 m",
    weight: "3,5 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 1000000,
    formes: [
      {
        region: "alola",
        name: {
          fr: "Rattata d'Alola",
          en: "Alolan Rattata",
          jp: "アローラのコラッタ",
        },
      },
    ],
  },
  {
    pokedex_id: 20,
    generation: 1,
    category: "Pokémon Souris",
    name: {
      fr: "Rattatac",
      en: "Raticate",
      jp: "ラッタ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/20/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/20/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Fuite",
        tc: false,
      },
      {
        name: "Cran",
        tc: false,
      },
      {
        name: "Agitation",
        tc: true,
      },
    ],
    stats: {
      hp: 55,
      atk: 81,
      def: 60,
      spe_atk: 50,
      spe_def: 70,
      vit: 97,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 19,
          name: "Rattata",
          condition: "Niveau 20",
        },
      ],
      next: null,
      mega: null,
    },
    height: "0,7 m",
    weight: "18,5 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 127,
    level_100: 1000000,
    formes: [
      {
        region: "alola",
        name: {
          fr: "Rattatac d'Alola",
          en: "Alolan Raticate",
          jp: "アローラのラッタ",
        },
      },
    ],
  },
  {
    pokedex_id: 21,
    generation: 1,
    category: "Pokémon Minoiseau",
    name: {
      fr: "Piafabec",
      en: "Spearow",
      jp: "オニスズメ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/21/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/21/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Regard Vif",
        tc: false,
      },
      {
        name: "Sniper",
        tc: true,
      },
    ],
    stats: {
      hp: 40,
      atk: 60,
      def: 30,
      spe_atk: 31,
      spe_def: 31,
      vit: 70,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 22,
          name: "Rapasdepic",
          condition: "Niveau 20",
        },
      ],
      mega: null,
    },
    height: "0,3 m",
    weight: "2,0 kg",
    egg_groups: ["Aérien"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 22,
    generation: 1,
    category: "Pokémon Bec-Oiseau",
    name: {
      fr: "Rapasdepic",
      en: "Fearow",
      jp: "オニドリル",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/22/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/22/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Regard Vif",
        tc: false,
      },
      {
        name: "Sniper",
        tc: true,
      },
    ],
    stats: {
      hp: 65,
      atk: 90,
      def: 65,
      spe_atk: 61,
      spe_def: 61,
      vit: 100,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 21,
          name: "Piafabec",
          condition: "Niveau 20",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,2 m",
    weight: "38,0 kg",
    egg_groups: ["Aérien"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 90,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 23,
    generation: 1,
    category: "Pokémon Serpent",
    name: {
      fr: "Abo",
      en: "Ekans",
      jp: "アーボ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/23/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/23/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Intimidation",
        tc: false,
      },
      {
        name: "Mue",
        tc: false,
      },
      {
        name: "Tension",
        tc: true,
      },
    ],
    stats: {
      hp: 35,
      atk: 60,
      def: 44,
      spe_atk: 40,
      spe_def: 54,
      vit: 55,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 24,
          name: "Arbok",
          condition: "Niveau 22",
        },
      ],
      mega: null,
    },
    height: "2,0 m",
    weight: "6,9 kg",
    egg_groups: ["Terrestre", "Draconique"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 24,
    generation: 1,
    category: "Pokémon Cobra",
    name: {
      fr: "Arbok",
      en: "Arbok",
      jp: "アーボック",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/24/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/24/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Intimidation",
        tc: false,
      },
      {
        name: "Mue",
        tc: false,
      },
      {
        name: "Tension",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 95,
      def: 69,
      spe_atk: 65,
      spe_def: 79,
      vit: 80,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 23,
          name: "Abo",
          condition: "Niveau 22",
        },
      ],
      next: null,
      mega: null,
    },
    height: "3,5 m",
    weight: "65,0 kg",
    egg_groups: ["Terrestre", "Draconique"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 90,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 25,
    generation: 1,
    category: "Pokémon Souris",
    name: {
      fr: "Pikachu",
      en: "Pikachu",
      jp: "ピカチュウ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/25/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/25/shiny.png",
      gmax: {
        regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/25/gmax-regular.png",
        shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/25/gmax-shiny.png",
      },
    },
    types: [
      {
        name: "Électrik",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/electrik.png",
      },
    ],
    talents: [
      {
        name: "Statik",
        tc: false,
      },
      {
        name: "Paratonnerre",
        tc: true,
      },
    ],
    stats: {
      hp: 45,
      atk: 80,
      def: 50,
      spe_atk: 75,
      spe_def: 60,
      vit: 120,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 172,
          name: "Pichu",
          condition: "Bonheur",
        },
      ],
      next: [
        {
          pokedex_id: 26,
          name: "Raichu",
          condition: "Pierre Foudre",
        },
      ],
      mega: null,
    },
    height: "0,4 m",
    weight: "6,0 kg",
    egg_groups: ["Terrestre", "Féerique"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 190,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 26,
    generation: 1,
    category: "Pokémon Souris",
    name: {
      fr: "Raichu",
      en: "Raichu",
      jp: "ライチュウ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/26/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/26/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Électrik",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/electrik.png",
      },
    ],
    talents: [
      {
        name: "Statik",
        tc: false,
      },
      {
        name: "Paratonnerre",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 90,
      def: 55,
      spe_atk: 90,
      spe_def: 80,
      vit: 110,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 172,
          name: "Pichu",
          condition: "+1 Niveau + Bonheur",
        },
        {
          pokedex_id: 25,
          name: "Pikachu",
          condition: "Pierre Foudre",
        },
      ],
      next: null,
      mega: null,
    },
    height: "0,8 m",
    weight: "30,0 kg",
    egg_groups: ["Terrestre", "Féerique"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 75,
    level_100: 1000000,
    formes: [
      {
        region: "alola",
        name: {
          fr: "Raichu d'Alola",
          en: "Alolan Raichu",
          jp: "アローラのライチュウ",
        },
      },
    ],
  },
  {
    pokedex_id: 27,
    generation: 1,
    category: "Pokémon Souris",
    name: {
      fr: "Sabelette",
      en: "Sandshrew",
      jp: "サンド",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/27/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/27/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
    ],
    talents: [
      {
        name: "Voile Sable",
        tc: false,
      },
      {
        name: "Baigne Sable",
        tc: true,
      },
    ],
    stats: {
      hp: 50,
      atk: 75,
      def: 85,
      spe_atk: 20,
      spe_def: 30,
      vit: 40,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 28,
          name: "Sablaireau",
          condition: "Niveau 22",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "12,0 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 1000000,
    formes: [
      {
        region: "alola",
        name: {
          fr: "Sabelette d'Alola",
          en: "Alolan Sandshrew",
          jp: "アローラのサンド",
        },
      },
    ],
  },
  {
    pokedex_id: 28,
    generation: 1,
    category: "Pokémon Souris",
    name: {
      fr: "Sablaireau",
      en: "Sandslash",
      jp: "サンドパン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/28/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/28/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
    ],
    talents: [
      {
        name: "Voile Sable",
        tc: false,
      },
      {
        name: "Baigne Sable",
        tc: true,
      },
    ],
    stats: {
      hp: 75,
      atk: 100,
      def: 110,
      spe_atk: 45,
      spe_def: 55,
      vit: 65,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 27,
          name: "Sabelette",
          condition: "Niveau 22",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,0 m",
    weight: "29,5 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 90,
    level_100: 1000000,
    formes: [
      {
        region: "alola",
        name: {
          fr: "Sablaireau d'Alola",
          en: "Alolan Sandslash",
          jp: "アローラのサンドパン",
        },
      },
    ],
  },
  {
    pokedex_id: 29,
    generation: 1,
    category: "Pokémon Vénépic",
    name: {
      fr: "Nidoran♀",
      en: "Nidoran♀",
      jp: "ニドラン♀",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/29/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/29/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Point Poison",
        tc: false,
      },
      {
        name: "Rivalité",
        tc: false,
      },
      {
        name: "Agitation",
        tc: true,
      },
    ],
    stats: {
      hp: 55,
      atk: 47,
      def: 52,
      spe_atk: 40,
      spe_def: 40,
      vit: 41,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 30,
          name: "Nidorina",
          condition: "Niveau 16",
        },
        {
          pokedex_id: 31,
          name: "Nidoqueen",
          condition: "Pierre Lune",
        },
      ],
      mega: null,
    },
    height: "0,4 m",
    weight: "7,0 kg",
    egg_groups: ["Monstrueux", "Terrestre"],
    sexe: {
      male: 0,
      female: 100,
    },
    catch_rate: 235,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 30,
    generation: 1,
    category: "Pokémon Vénépic",
    name: {
      fr: "Nidorina",
      en: "Nidorina",
      jp: "ニドリーナ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/30/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/30/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Point Poison",
        tc: false,
      },
      {
        name: "Rivalité",
        tc: false,
      },
      {
        name: "Agitation",
        tc: true,
      },
    ],
    stats: {
      hp: 70,
      atk: 62,
      def: 67,
      spe_atk: 55,
      spe_def: 55,
      vit: 56,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 29,
          name: "Nidoran♀",
          condition: "Niveau 16",
        },
      ],
      next: [
        {
          pokedex_id: 31,
          name: "Nidoqueen",
          condition: "Pierre Lune",
        },
      ],
      mega: null,
    },
    height: "0,8 m",
    weight: "20,0 kg",
    egg_groups: null,
    sexe: {
      male: 0,
      female: 100,
    },
    catch_rate: 120,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 31,
    generation: 1,
    category: "Pokémon Perceur",
    name: {
      fr: "Nidoqueen",
      en: "Nidoqueen",
      jp: "ニドリーナ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/31/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/31/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
    ],
    talents: [
      {
        name: "Point Poison",
        tc: false,
      },
      {
        name: "Rivalité",
        tc: false,
      },
      {
        name: "Sans Limite",
        tc: true,
      },
    ],
    stats: {
      hp: 90,
      atk: 92,
      def: 87,
      spe_atk: 75,
      spe_def: 85,
      vit: 76,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 0.25,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 29,
          name: "Nidoran♀",
          condition: "Niveau 16",
        },
        {
          pokedex_id: 30,
          name: "Nidorina",
          condition: "Pierre Lune",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,3 m",
    weight: "60,0 kg",
    egg_groups: null,
    sexe: {
      male: 0,
      female: 100,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 32,
    generation: 1,
    category: "Pokémon Vénépic",
    name: {
      fr: "Nidoran♂",
      en: "Nidoran♂",
      jp: "ニドラン♂",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/32/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/32/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Point Poison",
        tc: false,
      },
      {
        name: "Rivalité",
        tc: false,
      },
      {
        name: "Agitation",
        tc: true,
      },
    ],
    stats: {
      hp: 46,
      atk: 57,
      def: 40,
      spe_atk: 40,
      spe_def: 40,
      vit: 50,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 33,
          name: "Nidorino",
          condition: "Niveau 16",
        },
        {
          pokedex_id: 34,
          name: "Nidoking",
          condition: "Pierre Lune",
        },
      ],
      mega: null,
    },
    height: "0,5 m",
    weight: "9,0 kg",
    egg_groups: ["Monstrueux", "Terrestre"],
    sexe: {
      male: 100,
      female: 0,
    },
    catch_rate: 235,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 33,
    generation: 1,
    category: "Pokémon Vénépic",
    name: {
      fr: "Nidorino",
      en: "Nidorino",
      jp: "ニドリーノ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/33/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/33/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Point Poison",
        tc: false,
      },
      {
        name: "Rivalité",
        tc: false,
      },
      {
        name: "Agitation",
        tc: true,
      },
    ],
    stats: {
      hp: 61,
      atk: 72,
      def: 57,
      spe_atk: 55,
      spe_def: 55,
      vit: 65,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 32,
          name: "Nidoran♂",
          condition: "Niveau 16",
        },
      ],
      next: [
        {
          pokedex_id: 34,
          name: "Nidoking",
          condition: "Pierre Lune",
        },
      ],
      mega: null,
    },
    height: "0,9 m",
    weight: "19,5 kg",
    egg_groups: ["Monstrueux", "Terrestre"],
    sexe: {
      male: 100,
      female: 0,
    },
    catch_rate: 120,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 34,
    generation: 1,
    category: "Pokémon Perceur",
    name: {
      fr: "Nidoking",
      en: "Nidoking",
      jp: "ニドキング",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/34/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/34/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
    ],
    talents: [
      {
        name: "Point Poison",
        tc: false,
      },
      {
        name: "Rivalité",
        tc: false,
      },
      {
        name: "Sans Limite",
        tc: true,
      },
    ],
    stats: {
      hp: 81,
      atk: 102,
      def: 77,
      spe_atk: 85,
      spe_def: 75,
      vit: 85,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 0.25,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 32,
          name: "Nidoran♂",
          condition: "Niveau 16",
        },
        {
          pokedex_id: 33,
          name: "Nidorino",
          condition: "Pierre Lune",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,4 m",
    weight: "62,0 kg",
    egg_groups: ["Monstrueux", "Terrestre"],
    sexe: {
      male: 100,
      female: 0,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 35,
    generation: 1,
    category: "Pokémon Fée",
    name: {
      fr: "Mélofée",
      en: "Clefairy",
      jp: "ピッピ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/35/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/35/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Fée",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/fee.png",
      },
    ],
    talents: [
      {
        name: "Joli Sourire",
        tc: false,
      },
      {
        name: "Garde Magik",
        tc: false,
      },
      {
        name: "Garde-Ami",
        tc: true,
      },
    ],
    stats: {
      hp: 70,
      atk: 45,
      def: 48,
      spe_atk: 60,
      spe_def: 65,
      vit: 35,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 0,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 173,
          name: "Mélo",
          condition: "Bonheur",
        },
      ],
      next: [
        {
          pokedex_id: 36,
          name: "Mélodelfe",
          condition: "Pierre Lune",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "7,5 kg",
    egg_groups: ["Féerique"],
    sexe: {
      male: 25,
      female: 75,
    },
    catch_rate: 150,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 36,
    generation: 1,
    category: "Pokémon Fée",
    name: {
      fr: "Mélodelfe",
      en: "Clefable",
      jp: "ピクシー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/36/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/36/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Fée",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/fee.png",
      },
    ],
    talents: [
      {
        name: "Joli Sourire",
        tc: false,
      },
      {
        name: "Garde Magik",
        tc: false,
      },
      {
        name: "Inconscient",
        tc: true,
      },
    ],
    stats: {
      hp: 95,
      atk: 70,
      def: 73,
      spe_atk: 95,
      spe_def: 90,
      vit: 60,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 0,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 173,
          name: "Mélo",
          condition: "Bonheur",
        },
        {
          pokedex_id: 35,
          name: "Mélofée",
          condition: "Pierre Lune",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,3 m",
    weight: "40,0 kg",
    egg_groups: ["Féerique"],
    sexe: {
      male: 25,
      female: 75,
    },
    catch_rate: 25,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 37,
    generation: 1,
    category: "Pokémon Renard",
    name: {
      fr: "Goupix",
      en: "Vulpix",
      jp: "ロコン ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/37/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/37/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Feu",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png",
      },
    ],
    talents: [
      {
        name: "Torche",
        tc: false,
      },
      {
        name: "Sécheresse",
        tc: true,
      },
    ],
    stats: {
      hp: 38,
      atk: 41,
      def: 40,
      spe_atk: 50,
      spe_def: 65,
      vit: 65,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 0,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 38,
          name: "Feunard",
          condition: "Pierre Feu",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "9,9 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 25,
      female: 75,
    },
    catch_rate: 190,
    level_100: 1000000,
    formes: [
      {
        region: "alola",
        name: {
          fr: "Goupix d'Alola",
          en: "Alolan Vulpix",
          jp: "アローラのロコン",
        },
      },
    ],
  },
  {
    pokedex_id: 38,
    generation: 1,
    category: "Pokémon Renard",
    name: {
      fr: "Feunard",
      en: "Ninetales",
      jp: "キュウコン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/38/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/38/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Feu",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png",
      },
    ],
    talents: [
      {
        name: "Torche",
        tc: false,
      },
      {
        name: "Sécheresse",
        tc: true,
      },
    ],
    stats: {
      hp: 73,
      atk: 76,
      def: 75,
      spe_atk: 81,
      spe_def: 100,
      vit: 100,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 0,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 37,
          name: "Goupix",
          condition: "Pierre Feu",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,1 m",
    weight: "19,9 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 25,
      female: 75,
    },
    catch_rate: 75,
    level_100: 1000000,
    formes: [
      {
        region: "alola",
        name: {
          fr: "Feunard d'Alola",
          en: "Alolan Ninetales",
          jp: "アローラのロコン",
        },
      },
    ],
  },
  {
    pokedex_id: 39,
    generation: 1,
    category: "Pokémon Bouboule",
    name: {
      fr: "Rondoudou",
      en: "Jigglypuff",
      jp: "プリン ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/39/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/39/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
      {
        name: "Fée",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/fee.png",
      },
    ],
    talents: [
      {
        name: "Joli Sourire",
        tc: false,
      },
      {
        name: "Battant",
        tc: false,
      },
      {
        name: "Garde-Ami",
        tc: true,
      },
    ],
    stats: {
      hp: 115,
      atk: 45,
      def: 20,
      spe_atk: 45,
      spe_def: 25,
      vit: 20,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 0,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 174,
          name: "Toudoudou",
          condition: "Bonheur",
        },
      ],
      next: [
        {
          pokedex_id: 40,
          name: "Grodoudou",
          condition: "Pierre Lune",
        },
      ],
      mega: null,
    },
    height: "0,5 m",
    weight: "5,5 kg",
    egg_groups: ["Féerique"],
    sexe: {
      male: 25,
      female: 75,
    },
    catch_rate: 170,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 40,
    generation: 1,
    category: "Pokémon Bouboule",
    name: {
      fr: "Grodoudou",
      en: "Wigglytuff",
      jp: "プクリン ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/40/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/40/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
      {
        name: "Fée",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/fee.png",
      },
    ],
    talents: [
      {
        name: "Joli Sourire",
        tc: false,
      },
      {
        name: "Battant",
        tc: false,
      },
      {
        name: "Fouille",
        tc: true,
      },
    ],
    stats: {
      hp: 140,
      atk: 70,
      def: 45,
      spe_atk: 85,
      spe_def: 50,
      vit: 45,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 0,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 174,
          name: "Toudoudou",
          condition: "Bonheur",
        },
        {
          pokedex_id: 39,
          name: "Rondoudou",
          condition: "Pierre Lune",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,0 m",
    weight: "12,0 kg",
    egg_groups: ["Féerique"],
    sexe: {
      male: 25,
      female: 75,
    },
    catch_rate: 50,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 41,
    generation: 1,
    category: "Pokémon Chovsouris",
    name: {
      fr: "Nosferapti",
      en: "Zubat",
      jp: "ズバット",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/41/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/41/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Attention",
        tc: false,
      },
      {
        name: "Infiltration",
        tc: true,
      },
    ],
    stats: {
      hp: 40,
      atk: 45,
      def: 35,
      spe_atk: 30,
      spe_def: 40,
      vit: 55,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.25,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.25,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 42,
          name: "Nosferalto",
          condition: "Niveau 22",
        },
        {
          pokedex_id: 169,
          name: "Nostenfer",
          condition: "Bonheur",
        },
      ],
      mega: null,
    },
    height: "0,8 m",
    weight: "7,5 kg",
    egg_groups: ["Aérien"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 42,
    generation: 1,
    category: "Pokémon Chovsouris",
    name: {
      fr: "Nosferalto",
      en: "Golbat",
      jp: "ゴルバット",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/42/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/42/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Attention",
        tc: false,
      },
      {
        name: "Infiltration",
        tc: true,
      },
    ],
    stats: {
      hp: 75,
      atk: 80,
      def: 70,
      spe_atk: 65,
      spe_def: 75,
      vit: 90,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.25,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.25,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 41,
          name: "Nosferapti",
          condition: "Niveau 22",
        },
      ],
      next: [
        {
          pokedex_id: 169,
          name: "Nostenfer",
          condition: "Bonheur",
        },
      ],
      mega: null,
    },
    height: "1,6 m",
    weight: "55,0 kg",
    egg_groups: ["Aérien"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 90,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 43,
    generation: 1,
    category: "Pokémon Racine",
    name: {
      fr: "Mystherbe",
      en: "Oddish",
      jp: "ナゾノクサ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/43/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/43/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Chlorophylle",
        tc: false,
      },
      {
        name: "Fuite",
        tc: true,
      },
    ],
    stats: {
      hp: 45,
      atk: 50,
      def: 55,
      spe_atk: 75,
      spe_def: 65,
      vit: 30,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 44,
          name: "Ortide",
          condition: "Niveau 21",
        },
        {
          pokedex_id: 45,
          name: "Rafflesia",
          condition: "Pierre Plante",
        },
        {
          pokedex_id: 182,
          name: "Joliflor",
          condition: "Pierre Soleil",
        },
      ],
      mega: null,
    },
    height: "0,5 m",
    weight: "5,4 kg",
    egg_groups: ["Végétal"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 44,
    generation: 1,
    category: "Pokémon Racine",
    name: {
      fr: "Ortide",
      en: "Gloom",
      jp: "クサイハナ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/44/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/44/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Chlorophylle",
        tc: false,
      },
      {
        name: "Puanteur",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 65,
      def: 70,
      spe_atk: 85,
      spe_def: 75,
      vit: 40,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 43,
          name: "Mystherbe",
          condition: "Niveau 21",
        },
      ],
      next: [
        {
          pokedex_id: 45,
          name: "Rafflesia",
          condition: "Pierre Plante",
        },
        {
          pokedex_id: 182,
          name: "Joliflor",
          condition: "Pierre Soleil",
        },
      ],
      mega: null,
    },
    height: "0,8 m",
    weight: "8,6 kg",
    egg_groups: ["Végétal"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 120,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 45,
    generation: 1,
    category: "Pokémon Fleur",
    name: {
      fr: "Rafflesia",
      en: "Vileplume",
      jp: "ラフレシア",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/45/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/45/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Chlorophylle",
        tc: false,
      },
      {
        name: "Pose Spore",
        tc: true,
      },
    ],
    stats: {
      hp: 75,
      atk: 80,
      def: 85,
      spe_atk: 110,
      spe_def: 90,
      vit: 50,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 43,
          name: "Mystherbe",
          condition: "Niveau 21",
        },
        {
          pokedex_id: 44,
          name: "Ortide",
          condition: "Pierre Plante",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,2 m",
    weight: "18,6 kg",
    egg_groups: ["Végétal"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 46,
    generation: 1,
    category: "Pokémon Champignon",
    name: {
      fr: "Paras",
      en: "Paras",
      jp: "パラス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/46/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/46/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
    ],
    talents: [
      {
        name: "Pose Spore",
        tc: false,
      },
      {
        name: "Peau Sèche",
        tc: false,
      },
      {
        name: "Moiteur",
        tc: true,
      },
    ],
    stats: {
      hp: 35,
      atk: 70,
      def: 55,
      spe_atk: 45,
      spe_def: 55,
      vit: 25,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 4,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 0.25,
      },
      {
        name: "Vol",
        multiplier: 4,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 47,
          name: "Parasect",
          condition: "Niveau 24",
        },
      ],
      mega: null,
    },
    height: "0,3 m",
    weight: "5,4 kg",
    egg_groups: ["Insectoïde", "Végétal"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 190,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 47,
    generation: 1,
    category: "Pokémon Champignon",
    name: {
      fr: "Parasect",
      en: "Parasect",
      jp: "パラセクト",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/47/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/47/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
    ],
    talents: [
      {
        name: "Pose Spore",
        tc: false,
      },
      {
        name: "Peau Sèche",
        tc: false,
      },
      {
        name: "Moiteur",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 95,
      def: 80,
      spe_atk: 60,
      spe_def: 80,
      vit: 30,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 4,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 0.25,
      },
      {
        name: "Vol",
        multiplier: 4,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 46,
          name: "Paras",
          condition: "Niveau 24",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,0 m",
    weight: "29,5 kg",
    egg_groups: ["Insectoïde", "Végétal"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 75,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 48,
    generation: 1,
    category: "Pokémon Vermine",
    name: {
      fr: "Mimitoss",
      en: "Venonat",
      jp: "コンパン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/48/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/48/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Œil Composé",
        tc: false,
      },
      {
        name: "Lentiteintée",
        tc: false,
      },
      {
        name: "Fuite",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 55,
      def: 50,
      spe_atk: 40,
      spe_def: 55,
      vit: 45,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.25,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 49,
          name: "Aéromite",
          condition: "Niveau 31",
        },
      ],
      mega: null,
    },
    height: "1,0 m",
    weight: "30,0 kg",
    egg_groups: ["Insectoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 190,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 49,
    generation: 1,
    category: "Pokémon Papipoison",
    name: {
      fr: "Aéromite",
      en: "Venomoth",
      jp: "モルフォン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/49/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/49/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Écran Poudre",
        tc: false,
      },
      {
        name: "Lentiteintée",
        tc: false,
      },
      {
        name: "Peau Miracle",
        tc: true,
      },
    ],
    stats: {
      hp: 70,
      atk: 65,
      def: 60,
      spe_atk: 90,
      spe_def: 75,
      vit: 90,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.25,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 48,
          name: "Mimitoss",
          condition: "Niveau 31",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,5 m",
    weight: "12,5 kg",
    egg_groups: ["Insectoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 75,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 50,
    generation: 1,
    category: "Pokémon Taupe",
    name: {
      fr: "Taupiqueur",
      en: "Diglett",
      jp: "ディグダ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/50/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/50/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
    ],
    talents: [
      {
        name: "Voile Sable",
        tc: false,
      },
      {
        name: "Piège Sable",
        tc: false,
      },
      {
        name: "Force Sable",
        tc: true,
      },
    ],
    stats: {
      hp: 10,
      atk: 55,
      def: 25,
      spe_atk: 35,
      spe_def: 45,
      vit: 95,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 51,
          name: "Triopikeur",
          condition: "Niveau 26",
        },
      ],
      mega: null,
    },
    height: "0,2 m",
    weight: "0,8 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 1000000,
    formes: [
      {
        region: "alola",
        name: {
          fr: "Taupiqueur d'Alola",
          en: "Alolan Diglett",
          jp: "アローラのディグダ",
        },
      },
    ],
  },
  {
    pokedex_id: 51,
    generation: 1,
    category: "Pokémon Taupe",
    name: {
      fr: "Triopikeur",
      en: "Dugtrio",
      jp: "ダグトリオ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/51/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/51/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
    ],
    talents: [
      {
        name: "Voile Sable",
        tc: false,
      },
      {
        name: "Piège Sable",
        tc: false,
      },
      {
        name: "Force Sable",
        tc: true,
      },
    ],
    stats: {
      hp: 35,
      atk: 100,
      def: 50,
      spe_atk: 50,
      spe_def: 70,
      vit: 120,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 50,
          name: "Taupiqueur",
          condition: "Niveau 26",
        },
      ],
      next: null,
      mega: null,
    },
    height: "0,7 m",
    weight: "33,3 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 50,
    level_100: 1000000,
    formes: [
      {
        region: "alola",
        name: {
          fr: "Triopikeur d'Alola",
          en: "Alolan Dugtrio",
          jp: "アローラのダグトリオ",
        },
      },
    ],
  },
  {
    pokedex_id: 52,
    generation: 1,
    category: "Pokémon Chadégout",
    name: {
      fr: "Miaouss",
      en: "Meowth",
      jp: "ニャース",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/52/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/52/shiny.png",
      gmax: {
        regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/52/gmax-regular.png",
        shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/52/gmax-shiny.png",
      },
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Ramassage",
        tc: false,
      },
      {
        name: "Technicien",
        tc: false,
      },
      {
        name: "Tension",
        tc: true,
      },
    ],
    stats: {
      hp: 40,
      atk: 45,
      def: 35,
      spe_atk: 40,
      spe_def: 40,
      vit: 90,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 53,
          name: "Persian",
          condition: "Niveau 28",
        },
      ],
      mega: null,
    },
    height: "0,4 m",
    weight: "4,2 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 1000000,
    formes: [
      {
        region: "alola",
        name: {
          fr: "Miaouss d'Alola",
          en: "Alolan Meowth",
          jp: "アローラのニャース",
        },
      },
      {
        region: "galar",
        name: {
          fr: "Miaouss de Galar",
          en: "Galarian Meowth",
          jp: "ガラルのニャース",
        },
      },
    ],
  },
  {
    pokedex_id: 53,
    generation: 1,
    category: "Pokémon Chadeville",
    name: {
      fr: "Persian",
      en: "Persian",
      jp: "ペルシアン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/53/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/53/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Échauffement",
        tc: false,
      },
      {
        name: "Technicien",
        tc: false,
      },
      {
        name: "Tension",
        tc: true,
      },
    ],
    stats: {
      hp: 65,
      atk: 70,
      def: 60,
      spe_atk: 65,
      spe_def: 65,
      vit: 115,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 52,
          name: "Miaouss",
          condition: "Niveau 28",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,0 m",
    weight: "32,0 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 90,
    level_100: 1000000,
    formes: [
      {
        region: "alola",
        name: {
          fr: "Persian d'Alola",
          en: "Alolan Persian",
          jp: "アローラのペルシアン",
        },
      },
    ],
  },
  {
    pokedex_id: 54,
    generation: 1,
    category: "Pokémon Canard",
    name: {
      fr: "Psykokwak",
      en: "Psyduck",
      jp: "コダック",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/54/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/54/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Moiteur",
        tc: false,
      },
      {
        name: "Ciel Gris",
        tc: false,
      },
      {
        name: "Glissade",
        tc: true,
      },
    ],
    stats: {
      hp: 50,
      atk: 52,
      def: 48,
      spe_atk: 65,
      spe_def: 50,
      vit: 55,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 55,
          name: "Akwakwak",
          condition: "Niveau 33",
        },
      ],
      mega: null,
    },
    height: "0,8 m",
    weight: "19,6 kg",
    egg_groups: ["Aquatique 1", "Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 190,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 55,
    generation: 1,
    category: "Pokémon Canard",
    name: {
      fr: "Akwakwak",
      en: "Golduck",
      jp: "ゴルダック",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/55/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/55/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Moiteur",
        tc: false,
      },
      {
        name: "Ciel Gris",
        tc: false,
      },
      {
        name: "Glissade",
        tc: true,
      },
    ],
    stats: {
      hp: 80,
      atk: 82,
      def: 78,
      spe_atk: 95,
      spe_def: 80,
      vit: 85,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 54,
          name: "Psykokwak",
          condition: "Niveau 33",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,7 m",
    weight: "76,6 kg",
    egg_groups: ["Aquatique 1", "Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 75,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 56,
    generation: 1,
    category: "Pokémon Porsinge",
    name: {
      fr: "Férosinge",
      en: "Mankey",
      jp: "マンキー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/56/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/56/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Combat",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/combat.png",
      },
    ],
    talents: [
      {
        name: "Esprit Vital",
        tc: false,
      },
      {
        name: "Colérique",
        tc: false,
      },
      {
        name: "Acharné",
        tc: true,
      },
    ],
    stats: {
      hp: 40,
      atk: 80,
      def: 35,
      spe_atk: 35,
      spe_def: 45,
      vit: 70,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 57,
          name: "Colossinge",
          condition: "Niveau 28",
        },
        {
          pokedex_id: 979,
          name: "Couroussinge",
          condition: "Utilise 20 fois la capacité Poing de Colère + gain de niveau",
        },
      ],
      mega: null,
    },
    height: "0,5 m",
    weight: "28,0 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 190,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 57,
    generation: 1,
    category: "Pokémon Porsinge",
    name: {
      fr: "Colossinge",
      en: "Primeape",
      jp: "オコリザル",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/57/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/57/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Combat",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/combat.png",
      },
    ],
    talents: [
      {
        name: "Esprit Vital",
        tc: false,
      },
      {
        name: "Colérique",
        tc: false,
      },
      {
        name: "Acharné",
        tc: true,
      },
    ],
    stats: {
      hp: 65,
      atk: 105,
      def: 60,
      spe_atk: 60,
      spe_def: 70,
      vit: 95,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 56,
          name: "Férosinge",
          condition: "Niveau 28",
        },
      ],
      next: [
        {
          pokedex_id: 979,
          name: "Courrousinge",
          condition: "Utilise 20 fois la capacité Poing de Colère + gain de niveau",
        },
      ],
      mega: null,
    },
    height: "1,0 m",
    weight: "32,0 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 75,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 58,
    generation: 1,
    category: "Pokémon Chiot",
    name: {
      fr: "Caninos",
      en: "Growlithe",
      jp: "ガーディ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/58/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/58/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Feu",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png",
      },
    ],
    talents: [
      {
        name: "Intimidation",
        tc: false,
      },
      {
        name: "Torche",
        tc: false,
      },
      {
        name: "Cœur Noble",
        tc: true,
      },
    ],
    stats: {
      hp: 55,
      atk: 70,
      def: 45,
      spe_atk: 70,
      spe_def: 50,
      vit: 60,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 0,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 59,
          name: "Arcanin",
          condition: "Pierre Feu",
        },
      ],
      mega: null,
    },
    height: "0,7 m",
    weight: "19,0 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 75,
      female: 25,
    },
    catch_rate: 190,
    level_100: 1250000,
    formes: [
      {
        region: "hisui",
        name: {
          fr: "Caninos de Hisui",
          en: "Hisuian Growlithe",
          jp: "ヒスイのガーディ",
        },
      },
    ],
  },
  {
    pokedex_id: 59,
    generation: 1,
    category: "Pokémon Légendaire",
    name: {
      fr: "Arcanin",
      en: "Arcanine",
      jp: "ウインディ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/59/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/59/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Feu",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png",
      },
    ],
    talents: [
      {
        name: "Intimidation",
        tc: false,
      },
      {
        name: "Torche",
        tc: false,
      },
      {
        name: "Cœur Noble",
        tc: true,
      },
    ],
    stats: {
      hp: 90,
      atk: 110,
      def: 80,
      spe_atk: 100,
      spe_def: 80,
      vit: 95,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 0,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 58,
          name: "Caninos",
          condition: "Pierre Feu",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,9 m",
    weight: "155,0 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 75,
      female: 25,
    },
    catch_rate: 75,
    level_100: 1250000,
    formes: [
      {
        region: "hisui",
        name: {
          fr: "Arcanin de Hisui",
          en: "Hisuian Arcanine",
          jp: "ヒスイのウインディ",
        },
      },
    ],
  },
  {
    pokedex_id: 60,
    generation: 1,
    category: "Pokémon Têtard",
    name: {
      fr: "Ptitard",
      en: "Poliwag",
      jp: "ニョロモ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/60/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/60/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Absorbe-Eau",
        tc: false,
      },
      {
        name: "Moiteur",
        tc: false,
      },
      {
        name: "Glissade",
        tc: true,
      },
    ],
    stats: {
      hp: 40,
      atk: 50,
      def: 40,
      spe_atk: 40,
      spe_def: 40,
      vit: 90,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 61,
          name: "Têtarte",
          condition: "Niveau 25",
        },
        {
          pokedex_id: 62,
          name: "Tartard",
          condition: "Pierre Eau",
        },
        {
          pokedex_id: 186,
          name: "Tarpaud",
          condition: "Echange avec Roche Royale",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "12,4 kg",
    egg_groups: ["Aquatique 1"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 61,
    generation: 1,
    category: "Pokémon Têtard",
    name: {
      fr: "Têtarte",
      en: "Poliwhirl",
      jp: "ニョロゾ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/61/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/61/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Absorbe-Eau",
        tc: false,
      },
      {
        name: "Moiteur",
        tc: false,
      },
      {
        name: "Glissade",
        tc: true,
      },
    ],
    stats: {
      hp: 65,
      atk: 65,
      def: 65,
      spe_atk: 50,
      spe_def: 50,
      vit: 90,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 60,
          name: "Ptitard",
          condition: "Niveau 25",
        },
      ],
      next: [
        {
          pokedex_id: 62,
          name: "Tartard",
          condition: "Pierre Eau",
        },
        {
          pokedex_id: 186,
          name: "Tarpaud",
          condition: "Echange avec Roche Royale",
        },
      ],
      mega: null,
    },
    height: "1,0 m",
    weight: "20,0 kg",
    egg_groups: ["Aquatique 1"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 120,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 62,
    generation: 1,
    category: "Pokémon Têtard",
    name: {
      fr: "Tartard",
      en: "Poliwrath",
      jp: "ニョロボン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/62/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/62/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Combat",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/combat.png",
      },
    ],
    talents: [
      {
        name: "Absorbe-Eau",
        tc: false,
      },
      {
        name: "Moiteur",
        tc: false,
      },
      {
        name: "Glissade",
        tc: true,
      },
    ],
    stats: {
      hp: 90,
      atk: 95,
      def: 95,
      spe_atk: 70,
      spe_def: 90,
      vit: 70,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 60,
          name: "Ptitard",
          condition: "Niveau 25",
        },
        {
          pokedex_id: 61,
          name: "Têtarte",
          condition: "Pierre Eau",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,3 m",
    weight: "54,0 kg",
    egg_groups: ["Aquatique 1"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 63,
    generation: 1,
    category: "Pokémon Psy",
    name: {
      fr: "Abra",
      en: "Abra",
      jp: "ケーシィ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/63/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/63/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Synchro",
        tc: false,
      },
      {
        name: "Attention",
        tc: false,
      },
      {
        name: "Garde Magik",
        tc: true,
      },
    ],
    stats: {
      hp: 25,
      atk: 20,
      def: 15,
      spe_atk: 105,
      spe_def: 55,
      vit: 90,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 64,
          name: "Kadabra",
          condition: "Niveau 16",
        },
        {
          pokedex_id: 65,
          name: "Alakazam",
          condition: "Echange/Au contact d'un Fil de Liaison",
        },
      ],
      mega: null,
    },
    height: "0,9 m",
    weight: "19,5 kg",
    egg_groups: ["Humanoïde"],
    sexe: {
      male: 75,
      female: 25,
    },
    catch_rate: 200,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 64,
    generation: 1,
    category: "Pokémon Psy",
    name: {
      fr: "Kadabra",
      en: "Kadabra",
      jp: "ユンゲラー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/64/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/64/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Synchro",
        tc: false,
      },
      {
        name: "Attention",
        tc: false,
      },
      {
        name: "Garde Magik",
        tc: true,
      },
    ],
    stats: {
      hp: 40,
      atk: 35,
      def: 30,
      spe_atk: 120,
      spe_def: 70,
      vit: 105,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 63,
          name: "Abra",
          condition: "Niveau 16",
        },
      ],
      next: [
        {
          pokedex_id: 65,
          name: "Alakazam",
          condition: "Echange/Au contact d'un Fil de Liaison",
        },
      ],
      mega: null,
    },
    height: "1,3 m",
    weight: "56,5 kg",
    egg_groups: ["Humanoïde"],
    sexe: {
      male: 75,
      female: 25,
    },
    catch_rate: 100,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 65,
    generation: 1,
    category: "Pokémon Psy",
    name: {
      fr: "Alakazam",
      en: "Alakazam",
      jp: "フーディン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/65/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/65/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Synchro",
        tc: false,
      },
      {
        name: "Attention",
        tc: false,
      },
      {
        name: "Garde Magik",
        tc: true,
      },
    ],
    stats: {
      hp: 55,
      atk: 50,
      def: 45,
      spe_atk: 135,
      spe_def: 95,
      vit: 120,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 63,
          name: "Abra",
          condition: "Niveau 16",
        },
        {
          pokedex_id: 64,
          name: "Kadabra",
          condition: "Echange/Au contact d'un Fil de Liaison",
        },
      ],
      next: null,
      mega: [
        {
          orbe: "Alakazamite",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/65/mega-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/65/mega-shiny.png",
          },
        },
      ],
    },
    height: "1,5 m",
    weight: "48,0 kg",
    egg_groups: ["Humanoïde"],
    sexe: {
      male: 75,
      female: 25,
    },
    catch_rate: 50,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 66,
    generation: 1,
    category: "Pokémon Colosse",
    name: {
      fr: "Machoc",
      en: "Machop",
      jp: "ワンリキー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/66/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/66/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Combat",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/combat.png",
      },
    ],
    talents: [
      {
        name: "Cran",
        tc: false,
      },
      {
        name: "Annule Garde",
        tc: false,
      },
      {
        name: "Impassible",
        tc: true,
      },
    ],
    stats: {
      hp: 70,
      atk: 80,
      def: 50,
      spe_atk: 35,
      spe_def: 35,
      vit: 35,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 67,
          name: "Machopeur",
          condition: "Niveau 28",
        },
        {
          pokedex_id: 68,
          name: "Mackogneur",
          condition: "Echange/Au contact d'un Fil de Liaison",
        },
      ],
      mega: null,
    },
    height: "0,8 m",
    weight: "19,5 kg",
    egg_groups: ["Humanoïde"],
    sexe: {
      male: 75,
      female: 25,
    },
    catch_rate: 180,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 67,
    generation: 1,
    category: "Pokémon Colosse",
    name: {
      fr: "Machopeur",
      en: "Machoke",
      jp: "ゴーリキー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/67/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/67/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Combat",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/combat.png",
      },
    ],
    talents: [
      {
        name: "Cran",
        tc: false,
      },
      {
        name: "Annule Garde",
        tc: false,
      },
      {
        name: "Impassible",
        tc: true,
      },
    ],
    stats: {
      hp: 80,
      atk: 100,
      def: 70,
      spe_atk: 50,
      spe_def: 60,
      vit: 45,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 66,
          name: "Machoc",
          condition: "Niveau 28",
        },
      ],
      next: [
        {
          pokedex_id: 68,
          name: "Mackogneur",
          condition: "Echange/Au contact d'un Fil de Liaison",
        },
      ],
      mega: null,
    },
    height: "1,5 m",
    weight: "70,5 kg",
    egg_groups: ["Humanoïde"],
    sexe: {
      male: 75,
      female: 25,
    },
    catch_rate: 90,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 68,
    generation: 1,
    category: "Pokémon Colosse",
    name: {
      fr: "Mackogneur",
      en: "Machamp",
      jp: "カイリキー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/68/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/68/shiny.png",
      gmax: {
        regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/68/gmax-regular.png",
        shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/68/gmax-shiny.png",
      },
    },
    types: [
      {
        name: "Combat",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/combat.png",
      },
    ],
    talents: [
      {
        name: "Cran",
        tc: false,
      },
      {
        name: "Annule Garde",
        tc: false,
      },
      {
        name: "Impassible",
        tc: true,
      },
    ],
    stats: {
      hp: 90,
      atk: 130,
      def: 80,
      spe_atk: 65,
      spe_def: 85,
      vit: 55,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 66,
          name: "Machoc",
          condition: "Niveau 28",
        },
        {
          pokedex_id: 67,
          name: "Machopeur",
          condition: "Echange/Au contact d'un Fil de Liaison",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,6 m",
    weight: "130,0 kg",
    egg_groups: ["Humanoïde"],
    sexe: {
      male: 75,
      female: 25,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 69,
    generation: 1,
    category: "Pokémon Fleur",
    name: {
      fr: "Chétiflor",
      en: "Bellsprout",
      jp: "マダツボミ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/69/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/69/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Chlorophylle",
        tc: false,
      },
      {
        name: "Gloutonnerie",
        tc: true,
      },
    ],
    stats: {
      hp: 50,
      atk: 75,
      def: 35,
      spe_atk: 70,
      spe_def: 30,
      vit: 40,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 70,
          name: "Boustiflor",
          condition: "Niveau 21",
        },
        {
          pokedex_id: 71,
          name: "Empiflor",
          condition: "Pierre Plante",
        },
      ],
      mega: null,
    },
    height: "0,7 m",
    weight: "4,0 kg",
    egg_groups: ["Végétal"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 70,
    generation: 1,
    category: "Pokémon Carnivore",
    name: {
      fr: "Boustiflor",
      en: "Weepinbell",
      jp: "ウツドン ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/70/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/70/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Chlorophylle",
        tc: false,
      },
      {
        name: "Gloutonnerie",
        tc: true,
      },
    ],
    stats: {
      hp: 65,
      atk: 90,
      def: 50,
      spe_atk: 85,
      spe_def: 45,
      vit: 55,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 69,
          name: "Chétiflor",
          condition: "Niveau 21",
        },
      ],
      next: [
        {
          pokedex_id: 71,
          name: "Empiflor",
          condition: "Pierre Plante",
        },
      ],
      mega: null,
    },
    height: "1,0 m",
    weight: "6,4 kg",
    egg_groups: ["Végétal"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 120,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 71,
    generation: 1,
    category: "Pokémon Carnivore",
    name: {
      fr: "Empiflor",
      en: "Victreebel",
      jp: "ウツボット",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/71/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/71/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Chlorophylle",
        tc: false,
      },
      {
        name: "Gloutonnerie",
        tc: true,
      },
    ],
    stats: {
      hp: 80,
      atk: 105,
      def: 65,
      spe_atk: 100,
      spe_def: 70,
      vit: 70,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 69,
          name: "Chétiflor",
          condition: "Niveau 21",
        },
        {
          pokedex_id: 70,
          name: "Boustiflor",
          condition: "Pierre Plante",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,7 m",
    weight: "15,5 kg",
    egg_groups: ["Végétal"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 72,
    generation: 1,
    category: "Pokémon Mollusque",
    name: {
      fr: "Tentacool",
      en: "Tentacool",
      jp: "メノクラゲ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/72/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/72/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Corps Sain",
        tc: false,
      },
      {
        name: "Suintement",
        tc: false,
      },
      {
        name: "Cuvette",
        tc: true,
      },
    ],
    stats: {
      hp: 40,
      atk: 40,
      def: 35,
      spe_atk: 50,
      spe_def: 100,
      vit: 70,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 73,
          name: "Tentacruel",
          condition: "Niveau 30",
        },
      ],
      mega: null,
    },
    height: "0,9 m",
    weight: "45,5 kg",
    egg_groups: ["Aquatique 3"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 190,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 73,
    generation: 1,
    category: "Pokémon Mollusque",
    name: {
      fr: "Tentacruel",
      en: "Tentacruel",
      jp: "ドククラゲ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/73/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/73/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Corps Sain",
        tc: false,
      },
      {
        name: "Suintement",
        tc: false,
      },
      {
        name: "Cuvette",
        tc: true,
      },
    ],
    stats: {
      hp: 80,
      atk: 70,
      def: 65,
      spe_atk: 80,
      spe_def: 120,
      vit: 100,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 72,
          name: "Tentacool",
          condition: "Niveau 30",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,6 m",
    weight: "55,0 kg",
    egg_groups: ["Aquatique 3"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 60,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 74,
    generation: 1,
    category: "Pokémon Roche",
    name: {
      fr: "Racaillou",
      en: "Geodude",
      jp: "イシツブテ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/74/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/74/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Roche",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/roche.png",
      },
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
    ],
    talents: [
      {
        name: "Tête de Roc",
        tc: false,
      },
      {
        name: "Fermeté",
        tc: false,
      },
      {
        name: "Voile Sable",
        tc: true,
      },
    ],
    stats: {
      hp: 40,
      atk: 80,
      def: 100,
      spe_atk: 30,
      spe_def: 30,
      vit: 20,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 4,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 4,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 0.25,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 75,
          name: "Gravalanch",
          condition: "Niveau 25",
        },
        {
          pokedex_id: 76,
          name: "Grolem",
          condition: "Echange/Au contact d'un Fil de Liaison",
        },
      ],
      mega: null,
    },
    height: "0,4 m",
    weight: "20,0 kg",
    egg_groups: ["Minéral"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 1059862,
    formes: [
      {
        region: "alola",
        name: {
          fr: "Racaillou d'Alola",
          en: "Alolan Geodude",
          jp: "アローラのイシツブテ",
        },
      },
    ],
  },
  {
    pokedex_id: 75,
    generation: 1,
    category: "Pokémon Roche",
    name: {
      fr: "Gravalanch",
      en: "Graveler",
      jp: "ゴローン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/75/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/75/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Roche",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/roche.png",
      },
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
    ],
    talents: [
      {
        name: "Tête de Roc",
        tc: false,
      },
      {
        name: "Fermeté",
        tc: false,
      },
      {
        name: "Voile Sable",
        tc: true,
      },
    ],
    stats: {
      hp: 55,
      atk: 95,
      def: 115,
      spe_atk: 45,
      spe_def: 45,
      vit: 35,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 4,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 4,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 0.25,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 74,
          name: "Racaillou",
          condition: "Niveau 25",
        },
      ],
      next: [
        {
          pokedex_id: 76,
          name: "Grolem",
          condition: "Echange/Au contact d'un Fil de Liaison",
        },
      ],
      mega: null,
    },
    height: "1,0 m",
    weight: "105,0 kg",
    egg_groups: ["Minéral"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 120,
    level_100: 1059862,
    formes: [
      {
        region: "alola",
        name: {
          fr: "Gravalanch d'Alola",
          en: "Alolan Graveler",
          jp: "アローラのゴローン",
        },
      },
    ],
  },
  {
    pokedex_id: 76,
    generation: 1,
    category: "Pokémon Titanesque",
    name: {
      fr: "Grolem",
      en: "Golem",
      jp: "ゴローニャ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/76/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/76/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Roche",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/roche.png",
      },
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
    ],
    talents: [
      {
        name: "Tête de Roc",
        tc: false,
      },
      {
        name: "Fermeté",
        tc: false,
      },
      {
        name: "Voile Sable",
        tc: true,
      },
    ],
    stats: {
      hp: 80,
      atk: 120,
      def: 130,
      spe_atk: 55,
      spe_def: 65,
      vit: 45,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 4,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 4,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 0.25,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 74,
          name: "Racaillou",
          condition: "Niveau 25",
        },
        {
          pokedex_id: 75,
          name: "Gravalanch",
          condition: "Echange/Au contact d'un Fil de Liaison",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,4 m",
    weight: "300,0 kg",
    egg_groups: ["Minéral"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: [
      {
        region: "alola",
        name: {
          fr: "Grolem d'Alola",
          en: "Alolan Golem",
          jp: "アローラのゴローニャ",
        },
      },
    ],
  },
  {
    pokedex_id: 77,
    generation: 1,
    category: "Pokémon Cheval Feu",
    name: {
      fr: "Ponyta",
      en: "Ponyta",
      jp: "ポニータ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/77/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/77/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Feu",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png",
      },
    ],
    talents: [
      {
        name: "Fuite",
        tc: false,
      },
      {
        name: "Torche",
        tc: false,
      },
      {
        name: "Corps Ardent",
        tc: true,
      },
    ],
    stats: {
      hp: 50,
      atk: 85,
      def: 55,
      spe_atk: 65,
      spe_def: 65,
      vit: 90,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 0,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 78,
          name: "Galopa",
          condition: "Niveau 40",
        },
      ],
      mega: null,
    },
    height: "1,0 m",
    weight: "30,0 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 190,
    level_100: 1000000,
    formes: [
      {
        region: "galar",
        name: {
          fr: "Ponyta de Galar",
          en: "Galarian Ponyta",
          jp: "ガラルのポニータ",
        },
      },
    ],
  },
  {
    pokedex_id: 78,
    generation: 1,
    category: "Pokémon Cheval Feu",
    name: {
      fr: "Galopa",
      en: "Rapidash",
      jp: "ギャロップ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/78/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/78/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Feu",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png",
      },
    ],
    talents: [
      {
        name: "Fuite",
        tc: false,
      },
      {
        name: "Torche",
        tc: false,
      },
      {
        name: "Corps Ardent",
        tc: true,
      },
    ],
    stats: {
      hp: 65,
      atk: 100,
      def: 70,
      spe_atk: 80,
      spe_def: 80,
      vit: 105,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 0,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 77,
          name: "Ponyta",
          condition: "Niveau 40",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,7 m",
    weight: "95,0 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 60,
    level_100: 1000000,
    formes: [
      {
        region: "galar",
        name: {
          fr: "Galopa de Galar",
          en: "Galarian Rapidash",
          jp: "ガラルのギャロップ",
        },
      },
    ],
  },
  {
    pokedex_id: 79,
    generation: 1,
    category: "Pokémon Crétin",
    name: {
      fr: "Ramoloss",
      en: "Slowpoke",
      jp: "ヤドン ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/79/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/79/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Benêt",
        tc: false,
      },
      {
        name: "Tempo Perso",
        tc: false,
      },
      {
        name: "Régé-Force",
        tc: true,
      },
    ],
    stats: {
      hp: 90,
      atk: 65,
      def: 65,
      spe_atk: 40,
      spe_def: 40,
      vit: 15,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 80,
          name: "Flagadoss",
          condition: "Niveau 37",
        },
        {
          pokedex_id: 199,
          name: "Roigada",
          condition: "Echange Ramoloss avec Roche Royale",
        },
      ],
      mega: null,
    },
    height: "1,2 m",
    weight: "36,0 kg",
    egg_groups: ["Monstrueux", "Aquatique 1"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 190,
    level_100: 1000000,
    formes: [
      {
        region: "galar",
        name: {
          fr: "Ramoloss de Galar",
          en: "Galarian Slowpoke",
          jp: "ガラルのヤドン",
        },
      },
    ],
  },
  {
    pokedex_id: 80,
    generation: 1,
    category: "Pokémon Symbiose",
    name: {
      fr: "Flagadoss",
      en: "Slowbro",
      jp: "ヤドラン ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/80/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/80/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Benêt",
        tc: false,
      },
      {
        name: "Tempo Perso",
        tc: false,
      },
      {
        name: "Régé-Force",
        tc: true,
      },
    ],
    stats: {
      hp: 95,
      atk: 75,
      def: 110,
      spe_atk: 100,
      spe_def: 80,
      vit: 30,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 79,
          name: "Ramoloss",
          condition: "Niveau 37",
        },
      ],
      next: null,
      mega: [
        {
          orbe: "Flagodossite",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/80/mega-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/80/mega-shiny.png",
          },
        },
      ],
    },
    height: "1,6 m",
    weight: "78,5 kg",
    egg_groups: ["Monstrueux", "Aquatique 1"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 75,
    level_100: 1000000,
    formes: [
      {
        region: "galar",
        name: {
          fr: "Flagadoss de Galar",
          en: "Galarian Slowbro",
          jp: "ガラルのヤドラン",
        },
      },
    ],
  },
  {
    pokedex_id: 81,
    generation: 1,
    category: "Pokémon Magnétique",
    name: {
      fr: "Magnéti",
      en: "Magnemite",
      jp: "コイル",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/81/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/81/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Électrik",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/electrik.png",
      },
      {
        name: "Acier",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/acier.png",
      },
    ],
    talents: [
      {
        name: "Magnépiège",
        tc: false,
      },
      {
        name: "Fermeté",
        tc: false,
      },
      {
        name: "Analyste",
        tc: true,
      },
    ],
    stats: {
      hp: 25,
      atk: 35,
      def: 70,
      spe_atk: 95,
      spe_def: 55,
      vit: 45,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 0,
      },
      {
        name: "Sol",
        multiplier: 4,
      },
      {
        name: "Vol",
        multiplier: 0.25,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 0.5,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.25,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 82,
          name: "Magnéton",
          condition: "Niveau 30",
        },
        {
          pokedex_id: 462,
          name: "Magnézone",
          condition: "Gain de niveau dans champ magnétique spécial/Pierre Foudre (depuis EB)",
        },
      ],
      mega: null,
    },
    height: "0,3 m",
    weight: "6,0 kg",
    egg_groups: ["Minéral"],
    sexe: null,
    catch_rate: 190,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 82,
    generation: 1,
    category: "Pokémon Magnétique",
    name: {
      fr: "Magnéton",
      en: "Magneton",
      jp: "レアコイル",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/82/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/82/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Électrik",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/electrik.png",
      },
      {
        name: "Acier",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/acier.png",
      },
    ],
    talents: [
      {
        name: "Magnépiège",
        tc: false,
      },
      {
        name: "Fermeté",
        tc: false,
      },
      {
        name: "Analyste",
        tc: true,
      },
    ],
    stats: {
      hp: 50,
      atk: 60,
      def: 95,
      spe_atk: 120,
      spe_def: 70,
      vit: 70,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 0,
      },
      {
        name: "Sol",
        multiplier: 4,
      },
      {
        name: "Vol",
        multiplier: 0.25,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 0.5,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.25,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 81,
          name: "Magnéti",
          condition: "Niveau 30",
        },
      ],
      next: [
        {
          pokedex_id: 462,
          name: "Magnézone",
          condition: "Gain de niveau dans champ magnétique spécial/Pierre Foudre (depuis EB)",
        },
      ],
      mega: null,
    },
    height: "1,0 m",
    weight: "60,0 kg",
    egg_groups: ["Minéral"],
    sexe: null,
    catch_rate: 60,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 83,
    generation: 1,
    category: "Pokémon Canard Fou",
    name: {
      fr: "Canarticho",
      en: "Farfetch'd",
      jp: "カモネギ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/83/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/83/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Attention",
        tc: false,
      },
      {
        name: "Regard Vif",
        tc: false,
      },
      {
        name: "Acharné",
        tc: true,
      },
    ],
    stats: {
      hp: 52,
      atk: 90,
      def: 55,
      spe_atk: 58,
      spe_def: 62,
      vit: 60,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "0,8 m",
    weight: "15,0 kg",
    egg_groups: ["Aérien", "Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: [
      {
        region: "galar",
        name: {
          fr: "Canarticho de Galar",
          en: "Galarian Farfetch'd",
          jp: "ガラルのカモネギ",
        },
      },
    ],
  },
  {
    pokedex_id: 84,
    generation: 1,
    category: "Pokémon Duoiseau",
    name: {
      fr: "Doduo",
      en: "Doduo",
      jp: "ドードー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/84/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/84/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Fuite",
        tc: false,
      },
      {
        name: "Matinal",
        tc: false,
      },
      {
        name: "Pieds Confus",
        tc: true,
      },
    ],
    stats: {
      hp: 35,
      atk: 85,
      def: 45,
      spe_atk: 35,
      spe_def: 35,
      vit: 75,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 85,
          name: "Dodrio",
          condition: "Niveau 31",
        },
      ],
      mega: null,
    },
    height: "1,4 m",
    weight: "39,2 kg",
    egg_groups: ["Aérien"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 190,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 85,
    generation: 1,
    category: "Pokémon Trioiseau",
    name: {
      fr: "Dodrio",
      en: "Dodrio",
      jp: "ドードリオ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/85/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/85/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Fuite",
        tc: false,
      },
      {
        name: "Matinal",
        tc: false,
      },
      {
        name: "Pieds Confus",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 110,
      def: 70,
      spe_atk: 60,
      spe_def: 60,
      vit: 110,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 84,
          name: "Doduo",
          condition: "Niveau 31",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,8 m",
    weight: "85,2 kg",
    egg_groups: ["Aérien"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 86,
    generation: 1,
    category: "Pokémon Otarie",
    name: {
      fr: "Otaria",
      en: "Seel",
      jp: "パウワウ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/86/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/86/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Isograisse",
        tc: false,
      },
      {
        name: "Hydratation",
        tc: false,
      },
      {
        name: "Corps Gel",
        tc: true,
      },
    ],
    stats: {
      hp: 65,
      atk: 45,
      def: 55,
      spe_atk: 45,
      spe_def: 70,
      vit: 45,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 87,
          name: "Lamantine",
          condition: "Niveau 34",
        },
      ],
      mega: null,
    },
    height: "1,1 m",
    weight: "90,0 kg",
    egg_groups: ["Aquatique 1", "Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 190,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 87,
    generation: 1,
    category: "Pokémon Otarie",
    name: {
      fr: "Lamantine",
      en: "Dewgong",
      jp: "ジュゴン ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/87/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/87/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Glace",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/glace.png",
      },
    ],
    talents: [
      {
        name: "Isograisse",
        tc: false,
      },
      {
        name: "Hydratation",
        tc: false,
      },
      {
        name: "Corps Gel",
        tc: true,
      },
    ],
    stats: {
      hp: 90,
      atk: 70,
      def: 80,
      spe_atk: 70,
      spe_def: 95,
      vit: 70,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 86,
          name: "Otaria",
          condition: "Niveau 34",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,7 m",
    weight: "120,0 kg",
    egg_groups: ["Aquatique 1", "Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 75,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 88,
    generation: 1,
    category: "Pokémon Dégueu",
    name: {
      fr: "Tadmorv",
      en: "Grimer",
      jp: "ベトベター",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/88/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/88/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Puanteur",
        tc: false,
      },
      {
        name: "Glu",
        tc: false,
      },
      {
        name: "Toxitouche",
        tc: true,
      },
    ],
    stats: {
      hp: 80,
      atk: 80,
      def: 50,
      spe_atk: 40,
      spe_def: 50,
      vit: 25,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 89,
          name: "Grotadmorv",
          condition: "Niveau 38",
        },
      ],
      mega: null,
    },
    height: "0,9 m",
    weight: "30,0 kg",
    egg_groups: ["Amorphe"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 190,
    level_100: 1000000,
    formes: [
      {
        region: "alola",
        name: {
          fr: "Tadmorv d'Alola",
          en: "Alolan Grimer",
          jp: "アローラのベトベター",
        },
      },
    ],
  },
  {
    pokedex_id: 89,
    generation: 1,
    category: "Pokémon Dégueu",
    name: {
      fr: "Grotadmorv",
      en: "Muk",
      jp: "ベトベトン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/89/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/89/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Puanteur",
        tc: false,
      },
      {
        name: "Glu",
        tc: false,
      },
      {
        name: "Toxitouche",
        tc: true,
      },
    ],
    stats: {
      hp: 105,
      atk: 105,
      def: 75,
      spe_atk: 65,
      spe_def: 100,
      vit: 50,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 88,
          name: "Tadmorv",
          condition: "Niveau 38",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,2 m",
    weight: "30,0 kg",
    egg_groups: ["Amorphe"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 75,
    level_100: 1000000,
    formes: [
      {
        region: "alola",
        name: {
          fr: "Grotadmorv d'Alola",
          en: "Alolan Muk",
          jp: "アローラのベトベトン",
        },
      },
    ],
  },
  {
    pokedex_id: 90,
    generation: 1,
    category: "Pokémon Bivalve",
    name: {
      fr: "Kokiyas",
      en: "Shellder",
      jp: "シェルダー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/90/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/90/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Coque Armure",
        tc: false,
      },
      {
        name: "Multi-Coups",
        tc: false,
      },
      {
        name: "Envelocape",
        tc: true,
      },
    ],
    stats: {
      hp: 30,
      atk: 65,
      def: 100,
      spe_atk: 45,
      spe_def: 25,
      vit: 40,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 91,
          name: "Crustabri",
          condition: "Pierre Eau",
        },
      ],
      mega: null,
    },
    height: "0,3 m",
    weight: "4,0 kg",
    egg_groups: ["Aquatique 3"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 190,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 91,
    generation: 1,
    category: "Pokémon Bivalve",
    name: {
      fr: "Crustabri",
      en: "Cloyster",
      jp: "パルシェン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/91/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/91/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Glace",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/glace.png",
      },
    ],
    talents: [
      {
        name: "Coque Armure",
        tc: false,
      },
      {
        name: "Multi-Coups",
        tc: false,
      },
      {
        name: "Envelocape",
        tc: true,
      },
    ],
    stats: {
      hp: 50,
      atk: 95,
      def: 180,
      spe_atk: 85,
      spe_def: 45,
      vit: 70,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.25,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 90,
          name: "Kokiyas",
          condition: "Pierre Eau",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,5 m",
    weight: "132,5 kg",
    egg_groups: ["Aquatique 3"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 60,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 92,
    generation: 1,
    category: "Pokémon Gaz",
    name: {
      fr: "Fantominus",
      en: "Gastly",
      jp: "ゴース",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/92/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/92/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Spectre",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/spectre.png",
      },
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Lévitation",
        tc: false,
      },
    ],
    stats: {
      hp: 30,
      atk: 35,
      def: 30,
      spe_atk: 100,
      spe_def: 35,
      vit: 80,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0,
      },
      {
        name: "Poison",
        multiplier: 0.25,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.25,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 93,
          name: "Spectrum",
          condition: "Niveau 25",
        },
        {
          pokedex_id: 94,
          name: "Ectoplasma",
          condition: "Echange/Au contact d'un Fil de Liaison",
        },
      ],
      mega: null,
    },
    height: "1,3 m",
    weight: "0,1 kg",
    egg_groups: ["Amorphe"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 190,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 93,
    generation: 1,
    category: "Pokémon Gaz",
    name: {
      fr: "Spectrum",
      en: "Haunter",
      jp: "ゴースト",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/93/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/93/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Spectre",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/spectre.png",
      },
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Lévitation",
        tc: false,
      },
    ],
    stats: {
      hp: 45,
      atk: 50,
      def: 45,
      spe_atk: 115,
      spe_def: 55,
      vit: 95,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0,
      },
      {
        name: "Poison",
        multiplier: 0.25,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.25,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 92,
          name: "Fantominus",
          condition: "Niveau 25",
        },
      ],
      next: [
        {
          pokedex_id: 94,
          name: "Ectoplasma",
          condition: "Echange/Au contact d'un Fil de Liaison",
        },
      ],
      mega: null,
    },
    height: "1,6 m",
    weight: "0,1 kg",
    egg_groups: ["Amorphe"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 90,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 94,
    generation: 1,
    category: "Pokémon Ombre",
    name: {
      fr: "Ectoplasma",
      en: "Gengar",
      jp: "ゲンガー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/94/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/94/shiny.png",
      gmax: {
        regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/94/gmax-regular.png",
        shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/94/gmax-shiny.png",
      },
    },
    types: [
      {
        name: "Spectre",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/spectre.png",
      },
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Corps Maudit",
        tc: false,
      },
      {
        name: "Lévitation",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 65,
      def: 60,
      spe_atk: 130,
      spe_def: 75,
      vit: 110,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0,
      },
      {
        name: "Poison",
        multiplier: 0.25,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.25,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 92,
          name: "Fantominus",
          condition: "Niveau 25",
        },
        {
          pokedex_id: 93,
          name: "Spectrum",
          condition: "Echange/Au contact d'un Fil de Liaison",
        },
      ],
      next: null,
      mega: [
        {
          orbe: "Ectoplasmite",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/94/mega-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/94/mega-shiny.png",
          },
        },
      ],
    },
    height: "1,5 m",
    weight: "40,5 kg",
    egg_groups: ["Amorphe"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 95,
    generation: 1,
    category: "Pokémon Serpenroc",
    name: {
      fr: "Onix",
      en: "Onix",
      jp: "イワーク",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/95/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/95/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Roche",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/roche.png",
      },
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
    ],
    talents: [
      {
        name: "Tête de Roc",
        tc: false,
      },
      {
        name: "Fermeté",
        tc: false,
      },
      {
        name: "Armurouillée",
        tc: true,
      },
    ],
    stats: {
      hp: 35,
      atk: 45,
      def: 160,
      spe_atk: 30,
      spe_def: 45,
      vit: 70,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 4,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 4,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 0.25,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 208,
          name: "Steelix",
          condition: "Echange avec Peau Métal/Au contact d'une Peau Métal",
        },
      ],
      mega: null,
    },
    height: "8,8 m",
    weight: "210,0 kg",
    egg_groups: ["Minéral"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 96,
    generation: 1,
    category: "Pokémon Hypnose",
    name: {
      fr: "Soporifik",
      en: "Drowzee",
      jp: "スリープ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/96/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/96/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Insomnia",
        tc: false,
      },
      {
        name: "Prédiction",
        tc: false,
      },
      {
        name: "Attention",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 48,
      def: 45,
      spe_atk: 43,
      spe_def: 90,
      vit: 42,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 97,
          name: "Hypnomade",
          condition: "Niveau 26",
        },
      ],
      mega: null,
    },
    height: "1,0 m",
    weight: "32,4 kg",
    egg_groups: ["Humanoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 190,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 97,
    generation: 1,
    category: "Pokémon Hypnose",
    name: {
      fr: "Hypnomade",
      en: "Hypno",
      jp: "スリーパー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/97/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/97/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Insomnia",
        tc: false,
      },
      {
        name: "Prédiction",
        tc: false,
      },
      {
        name: "Attention",
        tc: true,
      },
    ],
    stats: {
      hp: 85,
      atk: 73,
      def: 70,
      spe_atk: 73,
      spe_def: 115,
      vit: 67,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 96,
          name: "Soporifik",
          condition: "Niveau 26",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,6 m",
    weight: "75,6 kg",
    egg_groups: ["Humanoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 75,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 98,
    generation: 1,
    category: "Pokémon Doux Crabe",
    name: {
      fr: "Krabby",
      en: "Krabby",
      jp: "クラブ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/98/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/98/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Hyper Cutter",
        tc: false,
      },
      {
        name: "Coque Armure",
        tc: false,
      },
      {
        name: "Sans Limite",
        tc: true,
      },
    ],
    stats: {
      hp: 30,
      atk: 105,
      def: 90,
      spe_atk: 25,
      spe_def: 25,
      vit: 50,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 99,
          name: "Krabboss",
          condition: "Niveau 28",
        },
      ],
      mega: null,
    },
    height: "0,4 m",
    weight: "6,5 kg",
    egg_groups: ["Aquatique 3"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 225,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 99,
    generation: 1,
    category: "Pokémon Pince",
    name: {
      fr: "Krabboss",
      en: "Kingler",
      jp: "キングラー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/99/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/99/shiny.png",
      gmax: {
        regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/99/gmax-regular.png",
        shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/99/gmax-shiny.png",
      },
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Hyper Cutter",
        tc: false,
      },
      {
        name: "Coque Armure",
        tc: false,
      },
      {
        name: "Sans Limite",
        tc: true,
      },
    ],
    stats: {
      hp: 55,
      atk: 130,
      def: 115,
      spe_atk: 50,
      spe_def: 50,
      vit: 75,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 98,
          name: "Krabby",
          condition: "Niveau 28",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,3 m",
    weight: "60,0 kg",
    egg_groups: ["Aquatique 3"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 60,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 100,
    generation: 1,
    category: "Pokémon Balle",
    name: {
      fr: "Voltorbe",
      en: "Voltorb",
      jp: "ビリリダマ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/100/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/100/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Électrik",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/electrik.png",
      },
    ],
    talents: [
      {
        name: "Statik",
        tc: false,
      },
      {
        name: "Anti-Bruit",
        tc: false,
      },
      {
        name: "Boom Final",
        tc: true,
      },
    ],
    stats: {
      hp: 40,
      atk: 30,
      def: 50,
      spe_atk: 55,
      spe_def: 55,
      vit: 100,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 101,
          name: "Électrode",
          condition: "Niveau 30",
        },
      ],
      mega: null,
    },
    height: "0,5 m",
    weight: "10,4 kg",
    egg_groups: ["Minéral"],
    sexe: null,
    catch_rate: 190,
    level_100: 1000000,
    formes: [
      {
        region: "hisui",
        name: {
          fr: "Voltorbe de Hisui",
          en: "Hisuian Voltorb",
          jp: "ヒスイのビリリダマ",
        },
      },
    ],
  },
  {
    pokedex_id: 101,
    generation: 1,
    category: "Pokémon Balle",
    name: {
      fr: "Électrode",
      en: "Electrode",
      jp: "マルマイン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/101/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/101/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Électrik",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/electrik.png",
      },
    ],
    talents: [
      {
        name: "Statik",
        tc: false,
      },
      {
        name: "Anti-Bruit",
        tc: false,
      },
      {
        name: "Boom Final",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 50,
      def: 70,
      spe_atk: 80,
      spe_def: 80,
      vit: 150,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 100,
          name: "Voltorbe",
          condition: "Niveau 30",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,2 m",
    weight: "66,6 kg",
    egg_groups: ["Minéral"],
    sexe: null,
    catch_rate: 60,
    level_100: 1000000,
    formes: [
      {
        region: "hisui",
        name: {
          fr: "Électrode de Hisui",
          en: "Hisuian Electrode",
          jp: "ヒスイのマルマイン",
        },
      },
    ],
  },
  {
    pokedex_id: 102,
    generation: 1,
    category: "Pokémon Œuf",
    name: {
      fr: "Noeunoeuf",
      en: "Exeggcute",
      jp: "タマタマ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/102/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/102/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Chlorophylle",
        tc: false,
      },
      {
        name: "Récolte",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 40,
      def: 80,
      spe_atk: 60,
      spe_def: 45,
      vit: 40,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 4,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 103,
          name: "Noadkoko",
          condition: "Pierre Plante",
        },
      ],
      mega: null,
    },
    height: "0,4 m",
    weight: "2,5 kg",
    egg_groups: ["Végétal"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 90,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 103,
    generation: 1,
    category: "Pokémon Fruitpalme",
    name: {
      fr: "Noadkoko",
      en: "Exeggutor",
      jp: "ナッシー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/103/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/103/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Chlorophylle",
        tc: false,
      },
      {
        name: "Récolte",
        tc: true,
      },
    ],
    stats: {
      hp: 95,
      atk: 95,
      def: 85,
      spe_atk: 125,
      spe_def: 75,
      vit: 55,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 4,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 102,
          name: "Noeunoeuf",
          condition: "Pierre Plante",
        },
      ],
      next: null,
      mega: null,
    },
    height: "2,0 m",
    weight: "120,0 kg",
    egg_groups: ["Végétal"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1250000,
    formes: [
      {
        region: "alola",
        name: {
          fr: "Noadkoko d'Alola",
          en: "Alolan Exeggutor",
          jp: "アローラのナッシー",
        },
      },
    ],
  },
  {
    pokedex_id: 104,
    generation: 1,
    category: "Pokémon Solitaire",
    name: {
      fr: "Osselait",
      en: "Cubone",
      jp: "カラカラ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/104/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/104/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
    ],
    talents: [
      {
        name: "Tête de Roc",
        tc: false,
      },
      {
        name: "Paratonnerre",
        tc: false,
      },
      {
        name: "Armurbaston",
        tc: true,
      },
    ],
    stats: {
      hp: 50,
      atk: 50,
      def: 95,
      spe_atk: 40,
      spe_def: 50,
      vit: 35,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 105,
          name: "Ossatueur",
          condition: "Niveau 28",
        },
      ],
      mega: null,
    },
    height: "0,4 m",
    weight: "6,5 kg",
    egg_groups: ["Monstrueux"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 190,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 105,
    generation: 1,
    category: "Pokémon Gard'Os",
    name: {
      fr: "Ossatueur",
      en: "Marowak",
      jp: "ガラガラ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/105/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/105/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
    ],
    talents: [
      {
        name: "Tête de Roc",
        tc: false,
      },
      {
        name: "Paratonnerre",
        tc: false,
      },
      {
        name: "Armurbaston",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 80,
      def: 110,
      spe_atk: 50,
      spe_def: 80,
      vit: 45,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 104,
          name: "Osselait",
          condition: "Niveau 28",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,0 m",
    weight: "45,0 kg",
    egg_groups: ["Monstrueux"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 75,
    level_100: 1000000,
    formes: [
      {
        region: "alola",
        name: {
          fr: "Ossatueur d'Alola",
          en: "Alolan Marowak",
          jp: "アローラガラガラ",
        },
      },
    ],
  },
  {
    pokedex_id: 106,
    generation: 1,
    category: "Pokémon Latteur",
    name: {
      fr: "Kicklee",
      en: "Hitmonlee",
      jp: "サワムラー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/106/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/106/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Combat",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/combat.png",
      },
    ],
    talents: [
      {
        name: "Échauffement",
        tc: false,
      },
      {
        name: "Téméraire",
        tc: false,
      },
      {
        name: "Délestage",
        tc: true,
      },
    ],
    stats: {
      hp: 50,
      atk: 120,
      def: 53,
      spe_atk: 35,
      spe_def: 110,
      vit: 87,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 236,
          name: "Debugant",
          condition: "Niveau 20 + Attaque \u003E Défense",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,5 m",
    weight: "49,8 kg",
    egg_groups: ["Humanoïde"],
    sexe: {
      male: 100,
      female: 0,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 107,
    generation: 1,
    category: "Pokémon Puncheur",
    name: {
      fr: "Tygnon",
      en: "Hitmonchan",
      jp: "エビワラー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/107/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/107/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Combat",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/combat.png",
      },
    ],
    talents: [
      {
        name: "Regard Vif",
        tc: false,
      },
      {
        name: "Poing de Fer",
        tc: false,
      },
      {
        name: "Attention",
        tc: true,
      },
    ],
    stats: {
      hp: 50,
      atk: 105,
      def: 79,
      spe_atk: 35,
      spe_def: 110,
      vit: 76,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 236,
          name: "Debugant",
          condition: "Niveau 20 + Attaque \u003C Défense",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,4 m",
    weight: "50,2 kg",
    egg_groups: ["Humanoïde"],
    sexe: {
      male: 100,
      female: 0,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 108,
    generation: 1,
    category: "Pokémon Lécheur",
    name: {
      fr: "Excelangue",
      en: "Lickitung",
      jp: "ベロリンガ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/108/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/108/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Benêt",
        tc: false,
      },
      {
        name: "Tempo Perso",
        tc: false,
      },
      {
        name: "Ciel Gris",
        tc: true,
      },
    ],
    stats: {
      hp: 90,
      atk: 55,
      def: 75,
      spe_atk: 60,
      spe_def: 75,
      vit: 30,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 463,
          name: "Coudlangue",
          condition: "Attaque Roulade + 1 niveau",
        },
      ],
      mega: null,
    },
    height: "1,2 m",
    weight: "65,5 kg",
    egg_groups: ["Monstrueux"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 109,
    generation: 1,
    category: "Pokémon Gaz Mortel",
    name: {
      fr: "Smogo",
      en: "Koffing",
      jp: "ドガース",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/109/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/109/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Lévitation",
        tc: false,
      },
      {
        name: "Gaz Inhibiteur",
        tc: false,
      },
      {
        name: "Puanteur",
        tc: true,
      },
    ],
    stats: {
      hp: 40,
      atk: 65,
      def: 95,
      spe_atk: 60,
      spe_def: 45,
      vit: 35,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 110,
          name: "Smogogo",
          condition: "Niveau 35",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "1,0 kg",
    egg_groups: ["Amorphe"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 190,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 110,
    generation: 1,
    category: "Pokémon Gaz Mortel",
    name: {
      fr: "Smogogo",
      en: "Weezing",
      jp: "マタドガス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/110/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/110/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Lévitation",
        tc: false,
      },
      {
        name: "Gaz Inhibiteur",
        tc: false,
      },
      {
        name: "Puanteur",
        tc: true,
      },
    ],
    stats: {
      hp: 65,
      atk: 90,
      def: 120,
      spe_atk: 85,
      spe_def: 70,
      vit: 60,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 109,
          name: "Smogo",
          condition: "Niveau 35",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,2 m",
    weight: "9,5 kg",
    egg_groups: ["Amorphe"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 60,
    level_100: 1000000,
    formes: [
      {
        region: "galar",
        name: {
          fr: "Smogogo de Galar",
          en: "Galarian Weezing",
          jp: "ガラルのマタドガス",
        },
      },
    ],
  },
  {
    pokedex_id: 111,
    generation: 1,
    category: "Pokémon Piquant",
    name: {
      fr: "Rhinocorne",
      en: "Rhyhorn",
      jp: "サイホーン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/111/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/111/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
      {
        name: "Roche",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/roche.png",
      },
    ],
    talents: [
      {
        name: "Paratonnerre",
        tc: false,
      },
      {
        name: "Tête de Roc",
        tc: false,
      },
      {
        name: "Téméraire",
        tc: true,
      },
    ],
    stats: {
      hp: 80,
      atk: 85,
      def: 95,
      spe_atk: 30,
      spe_def: 30,
      vit: 25,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 4,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 4,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 0.25,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 112,
          name: "Rhinoféros",
          condition: "Niveau 42",
        },
        {
          pokedex_id: 464,
          name: "Rhinastoc",
          condition: "Echange avec Protecteur/Contact d'un Protecteur",
        },
      ],
      mega: null,
    },
    height: "1,0 m",
    weight: "115,0 kg",
    egg_groups: ["Monstrueux", "Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 120,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 112,
    generation: 1,
    category: "Pokémon Perceur",
    name: {
      fr: "Rhinoféros",
      en: "Rhydon",
      jp: "サイドン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/112/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/112/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
      {
        name: "Roche",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/roche.png",
      },
    ],
    talents: [
      {
        name: "Paratonnerre",
        tc: false,
      },
      {
        name: "Tête de Roc",
        tc: false,
      },
      {
        name: "Téméraire",
        tc: true,
      },
    ],
    stats: {
      hp: 105,
      atk: 130,
      def: 120,
      spe_atk: 45,
      spe_def: 45,
      vit: 40,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 4,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 4,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 0.25,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 111,
          name: "Rhinocorne",
          condition: "Niveau 42",
        },
      ],
      next: [
        {
          pokedex_id: 464,
          name: "Rhinastoc",
          condition: "Echange avec Protecteur/Contact d'un Protecteur",
        },
      ],
      mega: null,
    },
    height: "1,9 m",
    weight: "120,0 kg",
    egg_groups: ["Monstrueux", "Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 60,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 113,
    generation: 1,
    category: "Pokémon Œuf",
    name: {
      fr: "Leveinard",
      en: "Chansey",
      jp: "ラッキー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/113/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/113/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Médic Nature",
        tc: false,
      },
      {
        name: "Sérénité",
        tc: false,
      },
      {
        name: "Cœur Soin",
        tc: true,
      },
    ],
    stats: {
      hp: 250,
      atk: 5,
      def: 5,
      spe_atk: 35,
      spe_def: 105,
      vit: 50,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 440,
          name: "Ptiravi",
          condition: "+1 Niveau la journée avec Pierre Ovale / Contact avec Pierre Ovale le jour (PLA)",
        },
      ],
      next: [
        {
          pokedex_id: 242,
          name: "Leuphorie",
          condition: "Bonheur",
        },
      ],
      mega: null,
    },
    height: "1,1 m",
    weight: "34,6 kg",
    egg_groups: ["Féerique"],
    sexe: {
      male: 0,
      female: 100,
    },
    catch_rate: 30,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 114,
    generation: 1,
    category: "Pokémon Vigne",
    name: {
      fr: "Saquedeneu",
      en: "Tangela",
      jp: "モンジャラ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/114/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/114/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
    ],
    talents: [
      {
        name: "Chlorophylle",
        tc: false,
      },
      {
        name: "Feuille Garde",
        tc: false,
      },
      {
        name: "Régé-Force",
        tc: true,
      },
    ],
    stats: {
      hp: 65,
      atk: 55,
      def: 115,
      spe_atk: 100,
      spe_def: 40,
      vit: 60,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 465,
          name: "Bouldeneu",
          condition: "Pouvoir Antique + 1 niveau",
        },
      ],
      mega: null,
    },
    height: "1,0 m",
    weight: "35,0 kg",
    egg_groups: ["Végétal"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 115,
    generation: 1,
    category: "Pokémon Maternel",
    name: {
      fr: "Kangourex",
      en: "Kangaskhan",
      jp: "ガルーラ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/115/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/115/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Matinal",
        tc: false,
      },
      {
        name: "Querelleur",
        tc: false,
      },
      {
        name: "Attention",
        tc: true,
      },
    ],
    stats: {
      hp: 105,
      atk: 95,
      def: 80,
      spe_atk: 40,
      spe_def: 80,
      vit: 90,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: null,
      mega: [
        {
          orbe: "Kangourexite",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/115/mega-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/115/mega-shiny.png",
          },
        },
      ],
    },
    height: "2,2 m",
    weight: "80,0 kg",
    egg_groups: ["Monstrueux"],
    sexe: {
      male: 0,
      female: 100,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 116,
    generation: 1,
    category: "Pokémon Dragon",
    name: {
      fr: "Hypotrempe",
      en: "Horsea",
      jp: "タッツー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/116/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/116/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Glissade",
        tc: false,
      },
      {
        name: "Sniper",
        tc: false,
      },
      {
        name: "Moiteur",
        tc: true,
      },
    ],
    stats: {
      hp: 30,
      atk: 40,
      def: 70,
      spe_atk: 70,
      spe_def: 25,
      vit: 60,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 117,
          name: "Hypocéan",
          condition: "Niveau 32",
        },
        {
          pokedex_id: 230,
          name: "Hyporoi",
          condition: "Echange avec Écaille Draco",
        },
      ],
      mega: null,
    },
    height: "0,4 m",
    weight: "8,0 kg",
    egg_groups: ["Aquatique 1", "Draconique"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 225,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 117,
    generation: 1,
    category: "Pokémon Dragon",
    name: {
      fr: "Hypocéan",
      en: "Seadra",
      jp: "シードラ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/117/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/117/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Point Poison",
        tc: false,
      },
      {
        name: "Sniper",
        tc: false,
      },
      {
        name: "Moiteur",
        tc: true,
      },
    ],
    stats: {
      hp: 55,
      atk: 65,
      def: 95,
      spe_atk: 95,
      spe_def: 45,
      vit: 85,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 116,
          name: "Hypotrempe",
          condition: "Niveau 32",
        },
      ],
      next: [
        {
          pokedex_id: 230,
          name: "Hyporoi",
          condition: "Echange avec Écaille Draco",
        },
      ],
      mega: null,
    },
    height: "1,2 m",
    weight: "25,0 kg",
    egg_groups: ["Aquatique 1", "Draconique"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 75,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 118,
    generation: 1,
    category: "Pokémon Poisson",
    name: {
      fr: "Poissirène",
      en: "Goldeen",
      jp: "トサキント ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/118/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/118/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Glissade",
        tc: false,
      },
      {
        name: "Ignifu-Voile",
        tc: false,
      },
      {
        name: "Paratonnerre",
        tc: true,
      },
    ],
    stats: {
      hp: 45,
      atk: 67,
      def: 60,
      spe_atk: 35,
      spe_def: 50,
      vit: 63,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 119,
          name: "Poissoroy",
          condition: "Niveau 33",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "15,0 kg",
    egg_groups: ["Aquatique 2"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 225,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 119,
    generation: 1,
    category: "Pokémon Poisson",
    name: {
      fr: "Poissoroy",
      en: "Seaking",
      jp: "アズマオウ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/119/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/119/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Glissade",
        tc: false,
      },
      {
        name: "Ignifu-Voile",
        tc: false,
      },
      {
        name: "Paratonnerre",
        tc: true,
      },
    ],
    stats: {
      hp: 80,
      atk: 92,
      def: 65,
      spe_atk: 65,
      spe_def: 80,
      vit: 68,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 118,
          name: "Poissirène",
          condition: "Niveau 33",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,3 m",
    weight: "39,0 kg",
    egg_groups: ["Aquatique 2"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 60,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 120,
    generation: 1,
    category: "Pokémon Étoile",
    name: {
      fr: "Stari",
      en: "Staryu",
      jp: "ヒトデマン ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/120/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/120/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Médic Nature",
        tc: false,
      },
      {
        name: "Lumiattirance",
        tc: false,
      },
      {
        name: "Analyste",
        tc: true,
      },
    ],
    stats: {
      hp: 30,
      atk: 45,
      def: 55,
      spe_atk: 70,
      spe_def: 55,
      vit: 85,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 121,
          name: "Staross",
          condition: "Pierre Eau",
        },
      ],
      mega: null,
    },
    height: "0,8 m",
    weight: "34,5 kg",
    egg_groups: ["Aquatique 3"],
    sexe: null,
    catch_rate: 225,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 121,
    generation: 1,
    category: "Pokémon Mystérieux",
    name: {
      fr: "Staross",
      en: "Starmie",
      jp: "スターミー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/121/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/121/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Médic Nature",
        tc: false,
      },
      {
        name: "Lumiattirance",
        tc: false,
      },
      {
        name: "Analyste",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 75,
      def: 85,
      spe_atk: 100,
      spe_def: 85,
      vit: 115,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 120,
          name: "Stari",
          condition: "Pierre Eau",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,1 m",
    weight: "80,0 kg",
    egg_groups: ["Aquatique 3"],
    sexe: null,
    catch_rate: 60,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 122,
    generation: 1,
    category: "Pokémon Bloqueur",
    name: {
      fr: "M. Mime",
      en: "Mr. Mime",
      jp: "スターミー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/122/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/122/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
      {
        name: "Fée",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/fee.png",
      },
    ],
    talents: [
      {
        name: "Anti-Bruit",
        tc: false,
      },
      {
        name: "Filtre",
        tc: false,
      },
      {
        name: "Technicien",
        tc: true,
      },
    ],
    stats: {
      hp: 40,
      atk: 45,
      def: 65,
      spe_atk: 100,
      spe_def: 120,
      vit: 90,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.25,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 0,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 439,
          name: "Mime Jr.",
          condition: "+1 Niveau avec Copie",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,3 m",
    weight: "54,5 kg",
    egg_groups: ["Humanoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: [
      {
        region: "galar",
        name: {
          fr: "M.Mime de Galar",
          en: "Galarian Mr. Mime",
          jp: "ガラルのバリヤード",
        },
      },
    ],
  },
  {
    pokedex_id: 123,
    generation: 1,
    category: "Pokémon Mante",
    name: {
      fr: "Insécateur",
      en: "Scyther",
      jp: "ストライク",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/123/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/123/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Essaim",
        tc: false,
      },
      {
        name: "Technicien",
        tc: false,
      },
      {
        name: "Impassible",
        tc: true,
      },
    ],
    stats: {
      hp: 70,
      atk: 110,
      def: 80,
      spe_atk: 55,
      spe_def: 80,
      vit: 105,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.25,
      },
      {
        name: "Poison",
        multiplier: 0,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 4,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 212,
          name: "Cizayox",
          condition: "Echange avec Peau Métal/Au contact d'une Peau Métal",
        },
        {
          pokedex_id: 900,
          name: "Hachécateur",
          condition: "Avec une obsidienne (PLA)",
        },
      ],
      mega: null,
    },
    height: "1,5 m",
    weight: "56,0 kg",
    egg_groups: ["Insectoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 124,
    generation: 1,
    category: "Pokémon Humanoïde",
    name: {
      fr: "Lippoutou",
      en: "Jynx",
      jp: "ルージュラ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/124/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/124/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Glace",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/glace.png",
      },
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Benêt",
        tc: false,
      },
      {
        name: "Prédiction",
        tc: false,
      },
      {
        name: "Peau Sèche",
        tc: true,
      },
    ],
    stats: {
      hp: 65,
      atk: 50,
      def: 35,
      spe_atk: 115,
      spe_def: 95,
      vit: 95,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 238,
          name: "Lippouti",
          condition: "Niveau 30",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,4 m",
    weight: "40,6 kg",
    egg_groups: ["Humanoïde"],
    sexe: {
      male: 0,
      female: 100,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 125,
    generation: 1,
    category: "Pokémon Électrique",
    name: {
      fr: "Élektek",
      en: "Electabuzz",
      jp: "エレブー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/125/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/125/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Électrik",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/electrik.png",
      },
    ],
    talents: [
      {
        name: "Statik",
        tc: false,
      },
      {
        name: "Esprit Vital",
        tc: true,
      },
    ],
    stats: {
      hp: 65,
      atk: 83,
      def: 57,
      spe_atk: 95,
      spe_def: 85,
      vit: 105,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 239,
          name: "Élekid",
          condition: "Niveau 30",
        },
      ],
      next: [
        {
          pokedex_id: 466,
          name: "Élekable",
          condition: "Echange avec Électriseur/Contact d'un Électriseur",
        },
      ],
      mega: null,
    },
    height: "1,1 m",
    weight: "30,0 kg",
    egg_groups: ["Humanoïde"],
    sexe: {
      male: 75,
      female: 25,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 126,
    generation: 1,
    category: "Pokémon Crache-feu",
    name: {
      fr: "Magmar",
      en: "Magmar",
      jp: "ブーバー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/126/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/126/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Feu",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png",
      },
    ],
    talents: [
      {
        name: "Corps Ardent",
        tc: false,
      },
      {
        name: "Esprit Vital",
        tc: true,
      },
    ],
    stats: {
      hp: 65,
      atk: 95,
      def: 57,
      spe_atk: 100,
      spe_def: 85,
      vit: 93,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 240,
          name: "Magby",
          condition: "Niveau 30",
        },
      ],
      next: [
        {
          pokedex_id: 467,
          name: "Maganon",
          condition: "Echange avec Magmariseur/Contact d'un Magmariseur",
        },
      ],
      mega: null,
    },
    height: "1,3 m",
    weight: "44,5 kg",
    egg_groups: ["Humanoïde"],
    sexe: {
      male: 75,
      female: 25,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 127,
    generation: 1,
    category: "Pokémon Scarabée",
    name: {
      fr: "Scarabrute",
      en: "Pinsir",
      jp: "カイロス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/127/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/127/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
    ],
    talents: [
      {
        name: "Hyper Cutter",
        tc: false,
      },
      {
        name: "Brise Moule",
        tc: false,
      },
      {
        name: "Impudence",
        tc: true,
      },
    ],
    stats: {
      hp: 65,
      atk: 125,
      def: 100,
      spe_atk: 55,
      spe_def: 70,
      vit: 85,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: null,
      mega: [
        {
          orbe: "Scarabruite",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/127/mega-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/127/mega-shiny.png",
          },
        },
      ],
    },
    height: "1,5 m",
    weight: "55,0 kg",
    egg_groups: ["Insectoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 128,
    generation: 1,
    category: "Pokémon Buffle",
    name: {
      fr: "Tauros",
      en: "Tauros",
      jp: "ケンタロス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/128/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/128/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Intimidation",
        tc: false,
      },
      {
        name: "Colérique",
        tc: false,
      },
      {
        name: "Sans Limite",
        tc: true,
      },
    ],
    stats: {
      hp: 75,
      atk: 100,
      def: 95,
      spe_atk: 40,
      spe_def: 70,
      vit: 110,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "1,4 m",
    weight: "88,4 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 100,
      female: 0,
    },
    catch_rate: 45,
    level_100: 1250000,
    formes: [
      {
        region: "paldea",
        name: {
          fr: "Tauros de Paldea",
          en: "Paldean Tauros",
          jp: "パルデアのケンタロス",
        },
      },
    ],
  },
  {
    pokedex_id: 129,
    generation: 1,
    category: "Pokémon Poisson",
    name: {
      fr: "Magicarpe",
      en: "Magikarp",
      jp: "コイキング",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/129/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/129/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Glissade",
        tc: false,
      },
      {
        name: "Phobique",
        tc: true,
      },
    ],
    stats: {
      hp: 20,
      atk: 10,
      def: 55,
      spe_atk: 15,
      spe_def: 20,
      vit: 80,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 130,
          name: "Léviator",
          condition: "Niveau 20",
        },
      ],
      mega: null,
    },
    height: "0,9 m",
    weight: "10,0 kg",
    egg_groups: ["Aquatique 2", "Draconique"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 130,
    generation: 1,
    category: "Pokémon Terrifiant",
    name: {
      fr: "Léviator",
      en: "Gyarados",
      jp: "ギャラドス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/130/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/130/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Intimidation",
        tc: false,
      },
      {
        name: "Impudence",
        tc: true,
      },
    ],
    stats: {
      hp: 95,
      atk: 125,
      def: 79,
      spe_atk: 60,
      spe_def: 100,
      vit: 81,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 4,
      },
      {
        name: "Glace",
        multiplier: 0,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 129,
          name: "Magicarpe",
          condition: "Niveau 20",
        },
      ],
      next: null,
      mega: [
        {
          orbe: "Léviatorite",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/130/mega-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/130/mega-shiny.png",
          },
        },
      ],
    },
    height: "6,5 m",
    weight: "235,0 kg",
    egg_groups: ["Aquatique 2", "Draconique"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 131,
    generation: 1,
    category: "Pokémon Transport",
    name: {
      fr: "Lokhlass",
      en: "Lapras",
      jp: "ラプラス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/131/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/131/shiny.png",
      gmax: {
        regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/131/gmax-regular.png",
        shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/131/gmax-shiny.png",
      },
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Glace",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/glace.png",
      },
    ],
    talents: [
      {
        name: "Absorbe-Eau",
        tc: false,
      },
      {
        name: "Coque Armure",
        tc: false,
      },
      {
        name: "Hydratation",
        tc: true,
      },
    ],
    stats: {
      hp: 130,
      atk: 85,
      def: 80,
      spe_atk: 85,
      spe_def: 95,
      vit: 60,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 0,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.25,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "2,5 m",
    weight: "220,0 kg",
    egg_groups: ["Monstrueux", "Aquatique 1"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 132,
    generation: 1,
    category: "Pokémon Morphing",
    name: {
      fr: "Métamorph",
      en: "Ditto",
      jp: "メタモン ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/132/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/132/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Échauffement",
        tc: false,
      },
      {
        name: "Imposteur",
        tc: true,
      },
    ],
    stats: {
      hp: 48,
      atk: 48,
      def: 48,
      spe_atk: 48,
      spe_def: 48,
      vit: 48,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "0,3 m",
    weight: "4,0 kg",
    egg_groups: ["Métamorph"],
    sexe: null,
    catch_rate: 35,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 133,
    generation: 1,
    category: "Pokémon Évolutif",
    name: {
      fr: "Évoli",
      en: "Eevee",
      jp: "イーブイ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/133/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/133/shiny.png",
      gmax: {
        regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/133/gmax-regular.png",
        shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/133/gmax-shiny.png",
      },
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Fuite",
        tc: false,
      },
      {
        name: "Adaptabilité",
        tc: false,
      },
      {
        name: "Anticipation",
        tc: true,
      },
    ],
    stats: {
      hp: 65,
      atk: 75,
      def: 70,
      spe_atk: 65,
      spe_def: 85,
      vit: 75,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 134,
          name: "Aquali",
          condition: "Pierre Eau",
        },
        {
          pokedex_id: 135,
          name: "Voltali",
          condition: "Pierre Foudre",
        },
        {
          pokedex_id: 136,
          name: "Pyroli",
          condition: "Pierre Feu",
        },
        {
          pokedex_id: 196,
          name: "Mentali",
          condition: "Bonheur + Jour + 1 niveau",
        },
        {
          pokedex_id: 197,
          name: "Noctali",
          condition: "Bonheur + Nuit + 1 niveau",
        },
        {
          pokedex_id: 470,
          name: "Phyllali",
          condition: "+1 Niveau vers Pierre Mousse (Avant EB+DEPS) / Pierre Plante / Proche d'une Roche Moussue (PLA)",
        },
        {
          pokedex_id: 471,
          name: "Givrali",
          condition: "+1 Niveau vers Pierre Glacée (Avant EB+DEPS) / Pierre Glace / Proche d'une Roche Gelée (PLA)",
        },
        {
          pokedex_id: 700,
          name: "Nymphali",
          condition: "2 coeurs d'affections Poké Récré / Poké Détente + 1 niveau avec une capacité Fée (Avant EB) / Bonheur + capacité Fée (Depuis EB sauf DEPS)",
        },
      ],
      mega: null,
    },
    height: "0,3 m",
    weight: "6,5 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 134,
    generation: 1,
    category: "Pokémon Bulleur",
    name: {
      fr: "Aquali",
      en: "Vaporeon",
      jp: "シャワーズ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/134/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/134/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Absorbe-Eau",
        tc: false,
      },
      {
        name: "Hydratation",
        tc: true,
      },
    ],
    stats: {
      hp: 130,
      atk: 65,
      def: 60,
      spe_atk: 110,
      spe_def: 95,
      vit: 65,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 133,
          name: "Évoli",
          condition: "Pierre Eau",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,0 m",
    weight: "29,0 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 135,
    generation: 1,
    category: "Pokémon Orage",
    name: {
      fr: "Voltali",
      en: "Jolteon",
      jp: "サンダース",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/135/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/135/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Électrik",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/electrik.png",
      },
    ],
    talents: [
      {
        name: "Absorbe-Volt",
        tc: false,
      },
      {
        name: "Pied Véloce",
        tc: true,
      },
    ],
    stats: {
      hp: 65,
      atk: 65,
      def: 60,
      spe_atk: 110,
      spe_def: 95,
      vit: 130,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 133,
          name: "Évoli",
          condition: "Pierre Foudre",
        },
      ],
      next: null,
      mega: null,
    },
    height: "0,8 m",
    weight: "24,5 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 136,
    generation: 1,
    category: "Pokémon Flamme",
    name: {
      fr: "Pyroli",
      en: "Flareon",
      jp: "ブースター",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/136/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/136/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Feu",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png",
      },
    ],
    talents: [
      {
        name: "Torche",
        tc: false,
      },
      {
        name: "Cran",
        tc: true,
      },
    ],
    stats: {
      hp: 65,
      atk: 130,
      def: 60,
      spe_atk: 95,
      spe_def: 110,
      vit: 65,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 0,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 133,
          name: "Évoli",
          condition: "Pierre Feu",
        },
      ],
      next: null,
      mega: null,
    },
    height: "0,9 m",
    weight: "25,0 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 137,
    generation: 1,
    category: "Pokémon Virtuel",
    name: {
      fr: "Porygon",
      en: "Porygon",
      jp: "ポリゴン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/137/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/137/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Calque",
        tc: false,
      },
      {
        name: "Télécharge",
        tc: false,
      },
      {
        name: "Analyste",
        tc: true,
      },
    ],
    stats: {
      hp: 65,
      atk: 60,
      def: 70,
      spe_atk: 85,
      spe_def: 75,
      vit: 40,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 233,
          name: "Porygon2",
          condition: "Echange avec Améliorator/Contact d'un Améliorator (PLA)",
        },
        {
          pokedex_id: 474,
          name: "Porygon-Z",
          condition: "Echange avec CD Douteux/Contact d'un CD Douteux (PLA)",
        },
      ],
      mega: null,
    },
    height: "0,8 m",
    weight: "36,5 kg",
    egg_groups: ["Minéral"],
    sexe: null,
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 138,
    generation: 1,
    category: "Pokémon Spirale",
    name: {
      fr: "Amonita",
      en: "Omanyte",
      jp: "オムナイト",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/138/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/138/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Roche",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/roche.png",
      },
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Glissade",
        tc: false,
      },
      {
        name: "Coque Armure",
        tc: false,
      },
      {
        name: "Armurouillée",
        tc: true,
      },
    ],
    stats: {
      hp: 35,
      atk: 40,
      def: 100,
      spe_atk: 90,
      spe_def: 55,
      vit: 35,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 4,
      },
      {
        name: "Feu",
        multiplier: 0.25,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 139,
          name: "Amonistar",
          condition: "Niveau 40",
        },
      ],
      mega: null,
    },
    height: "0,4 m",
    weight: "7,5 kg",
    egg_groups: ["Aquatique 1", "Aquatique 3"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 139,
    generation: 1,
    category: "Pokémon Spirale",
    name: {
      fr: "Amonistar",
      en: "Omastar",
      jp: "オムスター",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/139/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/139/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Roche",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/roche.png",
      },
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Glissade",
        tc: false,
      },
      {
        name: "Coque Armure",
        tc: false,
      },
      {
        name: "Armurouillée",
        tc: true,
      },
    ],
    stats: {
      hp: 70,
      atk: 60,
      def: 125,
      spe_atk: 115,
      spe_def: 70,
      vit: 55,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 4,
      },
      {
        name: "Feu",
        multiplier: 0.25,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 138,
          name: "Amonita",
          condition: "Niveau 40",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,0 m",
    weight: "35,0 kg",
    egg_groups: ["Aquatique 1", "Aquatique 3"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 140,
    generation: 1,
    category: "Pokémon Carapace",
    name: {
      fr: "Kabuto",
      en: "Kabuto",
      jp: "カブト ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/140/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/140/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Roche",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/roche.png",
      },
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Glissade",
        tc: false,
      },
      {
        name: "Armurbaston",
        tc: false,
      },
      {
        name: "Armurouillée",
        tc: true,
      },
    ],
    stats: {
      hp: 30,
      atk: 80,
      def: 90,
      spe_atk: 55,
      spe_def: 45,
      vit: 55,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 4,
      },
      {
        name: "Feu",
        multiplier: 0.25,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 141,
          name: "Kabutops",
          condition: "Niveau 40",
        },
      ],
      mega: null,
    },
    height: "0,5 m",
    weight: "11,5 kg",
    egg_groups: ["Aquatique 1", "Aquatique 3"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 141,
    generation: 1,
    category: "Pokémon Carapace",
    name: {
      fr: "Kabutops",
      en: "Kabutops",
      jp: "カブトプス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/141/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/141/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Roche",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/roche.png",
      },
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Glissade",
        tc: false,
      },
      {
        name: "Armurbaston",
        tc: false,
      },
      {
        name: "Armurouillée",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 115,
      def: 105,
      spe_atk: 65,
      spe_def: 70,
      vit: 80,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 4,
      },
      {
        name: "Feu",
        multiplier: 0.25,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 140,
          name: "Kabuto",
          condition: "Niveau 40",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,3 m",
    weight: "40,5 kg",
    egg_groups: ["Aquatique 1", "Aquatique 3"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 142,
    generation: 1,
    category: "Pokémon Fossile",
    name: {
      fr: "Ptéra",
      en: "Aerodactyl",
      jp: "プテラ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/142/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/142/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Roche",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/roche.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Tête de Roc",
        tc: false,
      },
      {
        name: "Pression",
        tc: false,
      },
      {
        name: "Tension",
        tc: true,
      },
    ],
    stats: {
      hp: 80,
      atk: 105,
      def: 65,
      spe_atk: 60,
      spe_def: 75,
      vit: 130,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: null,
      mega: [
        {
          orbe: "Ptéraïte",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/142/mega-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/142/mega-shiny.png",
          },
        },
      ],
    },
    height: "1,8 m",
    weight: "59,0 kg",
    egg_groups: ["Aérien"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 143,
    generation: 1,
    category: "Pokémon Pionceur",
    name: {
      fr: "Ronflex",
      en: "Snorlax",
      jp: "カビゴン ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/143/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/143/shiny.png",
      gmax: {
        regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/143/gmax-regular.png",
        shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/143/gmax-shiny.png",
      },
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Vaccin",
        tc: false,
      },
      {
        name: "Isograisse",
        tc: false,
      },
      {
        name: "Gloutonnerie",
        tc: true,
      },
    ],
    stats: {
      hp: 160,
      atk: 110,
      def: 65,
      spe_atk: 65,
      spe_def: 110,
      vit: 30,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 0,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 143,
          name: "Ronflex",
          condition: "Bonheur",
        },
      ],
      next: null,
      mega: null,
    },
    height: "2,1 m",
    weight: "460,0 kg",
    egg_groups: ["Monstrueux"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 25,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 144,
    generation: 1,
    category: "Pokémon Glaciaire",
    name: {
      fr: "Artikodin",
      en: "Articuno",
      jp: "フリーザー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/144/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/144/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Glace",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/glace.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Pression",
        tc: false,
      },
      {
        name: "Rideau Neige",
        tc: true,
      },
    ],
    stats: {
      hp: 90,
      atk: 85,
      def: 100,
      spe_atk: 95,
      spe_def: 125,
      vit: 85,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 4,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "1,7 m",
    weight: "55,4 kg",
    egg_groups: null,
    sexe: null,
    catch_rate: 3,
    level_100: 1250000,
    formes: [
      {
        region: "galar",
        name: {
          fr: "Artikodin de Galar",
          en: "Galarian Articuno",
          jp: "ガラルのフリーザー",
        },
      },
    ],
  },
  {
    pokedex_id: 145,
    generation: 1,
    category: "Pokémon Électrique",
    name: {
      fr: "Électhor",
      en: "Zapdos",
      jp: "サンダー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/145/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/145/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Électrik",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/electrik.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Pression",
        tc: false,
      },
      {
        name: "Statik",
        tc: true,
      },
    ],
    stats: {
      hp: 90,
      atk: 90,
      def: 85,
      spe_atk: 125,
      spe_def: 90,
      vit: 100,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "1,6 m",
    weight: "52,6 kg",
    egg_groups: null,
    sexe: null,
    catch_rate: 3,
    level_100: 1250000,
    formes: [
      {
        region: "galar",
        name: {
          fr: "Électhor de Galar",
          en: "Galarian Zapdos",
          jp: "ガラルのサンダー",
        },
      },
    ],
  },
  {
    pokedex_id: 146,
    generation: 1,
    category: "Pokémon Flamme",
    name: {
      fr: "Sulfura",
      en: "Moltres",
      jp: "ファイヤー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/146/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/146/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Feu",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Pression",
        tc: false,
      },
      {
        name: "Corps Ardent",
        tc: true,
      },
    ],
    stats: {
      hp: 90,
      atk: 100,
      def: 90,
      spe_atk: 125,
      spe_def: 85,
      vit: 90,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.25,
      },
      {
        name: "Roche",
        multiplier: 4,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: null,
    height: "2,0 m",
    weight: "60,0 kg",
    egg_groups: null,
    sexe: null,
    catch_rate: 3,
    level_100: 1250000,
    formes: [
      {
        region: "galar",
        name: {
          fr: "Sulfura de Galar",
          en: "Galarian Moltres",
          jp: "ガラルのファイヤー",
        },
      },
    ],
  },
  {
    pokedex_id: 147,
    generation: 1,
    category: "Pokémon Dragon",
    name: {
      fr: "Minidraco",
      en: "Dratini",
      jp: "ミニリュウ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/147/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/147/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Dragon",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/dragon.png",
      },
    ],
    talents: [
      {
        name: "Mue",
        tc: false,
      },
      {
        name: "Écaille Spéciale",
        tc: true,
      },
    ],
    stats: {
      hp: 41,
      atk: 64,
      def: 45,
      spe_atk: 50,
      spe_def: 50,
      vit: 50,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 2,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 148,
          name: "Draco",
          condition: "Niveau 30",
        },
        {
          pokedex_id: 149,
          name: "Dracolosse",
          condition: "Niveau 55",
        },
      ],
      mega: null,
    },
    height: "1,8 m",
    weight: "3,3 kg",
    egg_groups: ["Draconique", "Aquatique 1"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 148,
    generation: 1,
    category: "Pokémon Dragon",
    name: {
      fr: "Draco",
      en: "Dragonair",
      jp: "ハクリュー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/148/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/148/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Dragon",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/dragon.png",
      },
    ],
    talents: [
      {
        name: "Mue",
        tc: false,
      },
      {
        name: "Écaille Spéciale",
        tc: true,
      },
    ],
    stats: {
      hp: 61,
      atk: 84,
      def: 65,
      spe_atk: 70,
      spe_def: 70,
      vit: 70,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 2,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 147,
          name: "Minidraco",
          condition: "Niveau 30",
        },
      ],
      next: [
        {
          pokedex_id: 149,
          name: "Dracolosse",
          condition: "Niveau 55",
        },
      ],
      mega: null,
    },
    height: "4,0 m",
    weight: "16,5 kg",
    egg_groups: ["Draconique", "Aquatique 1"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 149,
    generation: 1,
    category: "Pokémon Dragon",
    name: {
      fr: "Dracolosse",
      en: "Dragonite",
      jp: "カイリュー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/149/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/149/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Dragon",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/dragon.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Attention",
        tc: false,
      },
      {
        name: "Multiécaille",
        tc: true,
      },
    ],
    stats: {
      hp: 91,
      atk: 134,
      def: 95,
      spe_atk: 100,
      spe_def: 100,
      vit: 80,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 4,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 2,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 147,
          name: "Minidraco",
          condition: "Niveau 30",
        },
        {
          pokedex_id: 148,
          name: "Draco",
          condition: "Niveau 55",
        },
      ],
      next: null,
      mega: null,
    },
    height: "2,2 m",
    weight: "210,0 kg",
    egg_groups: ["Draconique", "Aquatique 1"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 150,
    generation: 1,
    category: "Pokémon Génétique",
    name: {
      fr: "Mewtwo",
      en: "Mewtwo",
      jp: "ミュウツー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/150/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/150/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Pression",
        tc: false,
      },
      {
        name: "Tension",
        tc: true,
      },
    ],
    stats: {
      hp: 106,
      atk: 110,
      def: 90,
      spe_atk: 154,
      spe_def: 90,
      vit: 130,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "2,0 m",
    weight: "122,0 kg",
    egg_groups: null,
    sexe: null,
    catch_rate: 3,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 151,
    generation: 1,
    category: "Pokémon Nouveau",
    name: {
      fr: "Mew",
      en: "Mew",
      jp: "ミュウ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/151/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/151/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Synchro",
        tc: false,
      },
    ],
    stats: {
      hp: 100,
      atk: 100,
      def: 100,
      spe_atk: 100,
      spe_def: 100,
      vit: 100,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "0,4 m",
    weight: "4,0 kg",
    egg_groups: null,
    sexe: null,
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 152,
    generation: 2,
    category: "Pokémon Feuille",
    name: {
      fr: "Germignon",
      en: "Chikorita",
      jp: "チコリータ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/152/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/152/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
    ],
    talents: [
      {
        name: "Engrais",
        tc: false,
      },
      {
        name: "Feuille Garde",
        tc: true,
      },
    ],
    stats: {
      hp: 45,
      atk: 49,
      def: 65,
      spe_atk: 49,
      spe_def: 65,
      vit: 45,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 153,
          name: "Macronium",
          condition: "Niveau 16",
        },
        {
          pokedex_id: 154,
          name: "Méganium",
          condition: "Niveau 32",
        },
      ],
      mega: null,
    },
    height: "0,9 m",
    weight: "6,4 kg",
    egg_groups: ["Monstrueux", "Végétal"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 153,
    generation: 2,
    category: "Pokémon Feuille",
    name: {
      fr: "Macronium",
      en: "Bayleef",
      jp: "ベイリーフ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/153/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/153/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
    ],
    talents: [
      {
        name: "Engrais",
        tc: false,
      },
      {
        name: "Feuille Garde",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 62,
      def: 80,
      spe_atk: 63,
      spe_def: 80,
      vit: 60,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 152,
          name: "Germignon",
          condition: "Niveau 16",
        },
      ],
      next: [
        {
          pokedex_id: 154,
          name: "Méganium",
          condition: "Niveau 32",
        },
      ],
      mega: null,
    },
    height: "1,2 m",
    weight: "15,8 kg",
    egg_groups: ["Monstrueux", "Végétal"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 154,
    generation: 2,
    category: "Pokémon Herbe",
    name: {
      fr: "Méganium",
      en: "Meganium",
      jp: "メガニウム",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/154/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/154/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
    ],
    talents: [
      {
        name: "Engrais",
        tc: false,
      },
      {
        name: "Feuille Garde",
        tc: true,
      },
    ],
    stats: {
      hp: 80,
      atk: 82,
      def: 100,
      spe_atk: 83,
      spe_def: 100,
      vit: 80,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 152,
          name: "Germignon",
          condition: "Niveau 16",
        },
        {
          pokedex_id: 153,
          name: "Macronium",
          condition: "Niveau 32",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,8 m",
    weight: "100,5 kg",
    egg_groups: ["Monstrueux", "Végétal"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 155,
    generation: 2,
    category: "Pokémon Souris Feu",
    name: {
      fr: "Héricendre",
      en: "Cyndaquil",
      jp: "ヒノアラシ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/155/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/155/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Feu",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png",
      },
    ],
    talents: [
      {
        name: "Brasier",
        tc: false,
      },
      {
        name: "Torche",
        tc: true,
      },
    ],
    stats: {
      hp: 39,
      atk: 52,
      def: 43,
      spe_atk: 60,
      spe_def: 50,
      vit: 65,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 156,
          name: "Feurisson",
          condition: "Niveau 14 / Niveau 17 (PLA uniquement)",
        },
        {
          pokedex_id: 157,
          name: "Typhlosion",
          condition: "Niveau 36",
        },
        {
          pokedex_id: 157,
          name: "Typhlosion de Hisui",
          condition: "Niveau 36 (Seulement PLA)",
        },
      ],
      mega: null,
    },
    height: "0,5 m",
    weight: "7,9 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 156,
    generation: 2,
    category: "Pokémon Volcan",
    name: {
      fr: "Feurisson",
      en: "Quilava",
      jp: "マグマラシ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/156/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/156/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Feu",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png",
      },
    ],
    talents: [
      {
        name: "Brasier",
        tc: false,
      },
      {
        name: "Torche",
        tc: true,
      },
    ],
    stats: {
      hp: 58,
      atk: 64,
      def: 58,
      spe_atk: 80,
      spe_def: 65,
      vit: 80,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 155,
          name: "Héricendre",
          condition: "Niveau 14 / Niveau 17 (PLA uniquement)",
        },
      ],
      next: [
        {
          pokedex_id: 157,
          name: "Typhlosion",
          condition: "Niveau 36",
        },
        {
          pokedex_id: 157,
          name: "Typhlosion de Hisui",
          condition: "Niveau 36 (Seulement PLA)",
        },
      ],
      mega: null,
    },
    height: "0,9 m",
    weight: "19,0 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 157,
    generation: 2,
    category: "Pokémon Volcan",
    name: {
      fr: "Typhlosion",
      en: "Typhlosion",
      jp: "バクフーン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/157/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/157/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Feu",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png",
      },
    ],
    talents: [
      {
        name: "Brasier",
        tc: false,
      },
      {
        name: "Torche",
        tc: true,
      },
    ],
    stats: {
      hp: 78,
      atk: 84,
      def: 78,
      spe_atk: 109,
      spe_def: 85,
      vit: 100,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 155,
          name: "Héricendre",
          condition: "Niveau 14 / Niveau 17 (PLA uniquement)",
        },
        {
          pokedex_id: 156,
          name: "Feurisson",
          condition: "Niveau 36",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,7 m",
    weight: "79,5 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: [
      {
        region: "hisui",
        name: {
          fr: "Typhlosion de Hisui",
          en: "Hisuian Typhlosion",
          jp: "ヒスイのバクフーン",
        },
      },
    ],
  },
  {
    pokedex_id: 158,
    generation: 2,
    category: "Pokémon Mâchoire",
    name: {
      fr: "Kaiminus",
      en: "Totodile",
      jp: "ワニノコ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/158/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/158/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Torrent",
        tc: false,
      },
      {
        name: "Sans Limite",
        tc: true,
      },
    ],
    stats: {
      hp: 50,
      atk: 65,
      def: 64,
      spe_atk: 44,
      spe_def: 48,
      vit: 43,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 159,
          name: "Crocodil",
          condition: "Niveau 18",
        },
        {
          pokedex_id: 160,
          name: "Aligatueur",
          condition: "Niveau 30",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "9,5 kg",
    egg_groups: ["Monstrueux", "Aquatique 1"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 159,
    generation: 2,
    category: "Pokémon Mâchoire",
    name: {
      fr: "Crocrodil",
      en: "Croconaw",
      jp: "アリゲイツ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/159/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/159/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Torrent",
        tc: false,
      },
      {
        name: "Sans Limite",
        tc: true,
      },
    ],
    stats: {
      hp: 65,
      atk: 80,
      def: 80,
      spe_atk: 59,
      spe_def: 63,
      vit: 58,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 158,
          name: "Kaiminus",
          condition: "Niveau 18",
        },
      ],
      next: [
        {
          pokedex_id: 160,
          name: "Aligatueur",
          condition: "Niveau 30",
        },
      ],
      mega: null,
    },
    height: "1,1 m",
    weight: "25,0 kg",
    egg_groups: ["Monstrueux", "Aquatique 1"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 160,
    generation: 2,
    category: "Pokémon Mâchoire",
    name: {
      fr: "Aligatueur",
      en: "Feraligatr",
      jp: "オーダイル",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/160/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/160/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Torrent",
        tc: false,
      },
      {
        name: "Sans Limite",
        tc: true,
      },
    ],
    stats: {
      hp: 85,
      atk: 105,
      def: 100,
      spe_atk: 79,
      spe_def: 83,
      vit: 78,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 158,
          name: "Kaiminus",
          condition: "Niveau 18",
        },
        {
          pokedex_id: 159,
          name: "Crocodil",
          condition: "Niveau 30",
        },
      ],
      next: null,
      mega: null,
    },
    height: "2,3 m",
    weight: "88,8 kg",
    egg_groups: ["Aquatique 1", "Monstrueux"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 161,
    generation: 2,
    category: "Pokémon Espion",
    name: {
      fr: "Fouinette",
      en: "Sentret",
      jp: "オタチ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/161/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/161/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Fuite",
        tc: false,
      },
      {
        name: "Regard Vif",
        tc: false,
      },
      {
        name: "Fouille",
        tc: true,
      },
    ],
    stats: {
      hp: 35,
      atk: 46,
      def: 34,
      spe_atk: 35,
      spe_def: 45,
      vit: 20,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 162,
          name: "Fouinar",
          condition: "Niveau 15",
        },
      ],
      mega: null,
    },
    height: "0,8 m",
    weight: "6,0 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 162,
    generation: 2,
    category: "Pokémon Allongé",
    name: {
      fr: "Fouinar",
      en: "Furret",
      jp: "オオタチ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/162/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/162/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Fuite",
        tc: false,
      },
      {
        name: "Regard Vif",
        tc: false,
      },
      {
        name: "Fouille",
        tc: true,
      },
    ],
    stats: {
      hp: 85,
      atk: 76,
      def: 64,
      spe_atk: 45,
      spe_def: 55,
      vit: 90,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 161,
          name: "Fouinette",
          condition: "Niveau 15",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,8 m",
    weight: "32,5 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 90,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 163,
    generation: 2,
    category: "Pokémon Hibou",
    name: {
      fr: "Hoothoot",
      en: "Hoothoot",
      jp: "ホーホー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/163/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/163/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Insomnia",
        tc: false,
      },
      {
        name: "Regard Vif",
        tc: false,
      },
      {
        name: "Lentiteintée",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 30,
      def: 30,
      spe_atk: 36,
      spe_def: 56,
      vit: 50,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 164,
          name: "Noarfrang",
          condition: "Niveau 20",
        },
      ],
      mega: null,
    },
    height: "0,7 m",
    weight: "21,2 kg",
    egg_groups: ["Aérien"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 164,
    generation: 2,
    category: "Pokémon Hibou",
    name: {
      fr: "Noarfang",
      en: "Noctowl",
      jp: "ヨルノズク ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/164/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/164/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Insomnia",
        tc: false,
      },
      {
        name: "Regard Vif",
        tc: false,
      },
      {
        name: "Lentiteintée",
        tc: true,
      },
    ],
    stats: {
      hp: 100,
      atk: 50,
      def: 50,
      spe_atk: 86,
      spe_def: 96,
      vit: 70,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 163,
          name: "Hoothoot",
          condition: "Niveau 20",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,6 m",
    weight: "40,8 kg",
    egg_groups: ["Aérien"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 90,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 165,
    generation: 2,
    category: "Pokémon 5 Étoiles",
    name: {
      fr: "Coxy",
      en: "Ledyba",
      jp: "レディバ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/165/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/165/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Essaim",
        tc: false,
      },
      {
        name: "Matinal",
        tc: false,
      },
      {
        name: "Phobique",
        tc: true,
      },
    ],
    stats: {
      hp: 40,
      atk: 20,
      def: 30,
      spe_atk: 40,
      spe_def: 80,
      vit: 55,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.25,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 4,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 166,
          name: "Coxyclaque",
          condition: "Niveau 18",
        },
      ],
      mega: null,
    },
    height: "1,0 m",
    weight: "10,8 kg",
    egg_groups: ["Insectoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 166,
    generation: 2,
    category: "Pokémon 5 Étoiles",
    name: {
      fr: "Coxyclaque",
      en: "Ledian",
      jp: "レディアン ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/166/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/166/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Essaim",
        tc: false,
      },
      {
        name: "Matinal",
        tc: false,
      },
      {
        name: "Poing de Fer",
        tc: true,
      },
    ],
    stats: {
      hp: 55,
      atk: 35,
      def: 50,
      spe_atk: 55,
      spe_def: 110,
      vit: 85,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.25,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 4,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 165,
          name: "Coxy",
          condition: "Niveau 18",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,4 m",
    weight: "35,6 kg",
    egg_groups: ["Insectoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 90,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 167,
    generation: 2,
    category: "Pokémon Crache Fil",
    name: {
      fr: "Mimigal",
      en: "Spinarak",
      jp: "イトマル ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/167/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/167/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Essaim",
        tc: false,
      },
      {
        name: "Insomnia",
        tc: false,
      },
      {
        name: "Sniper",
        tc: true,
      },
    ],
    stats: {
      hp: 40,
      atk: 60,
      def: 40,
      spe_atk: 40,
      spe_def: 40,
      vit: 30,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.25,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 168,
          name: "Mygalos",
          condition: "Niveau 22",
        },
      ],
      mega: null,
    },
    height: "0,5 m",
    weight: "8,5 kg",
    egg_groups: ["Insectoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 168,
    generation: 2,
    category: "Pokémon Long-Patte",
    name: {
      fr: "Migalos",
      en: "Ariados",
      jp: "アリアドス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/168/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/168/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Essaim",
        tc: false,
      },
      {
        name: "Insomnia",
        tc: false,
      },
      {
        name: "Sniper",
        tc: true,
      },
    ],
    stats: {
      hp: 70,
      atk: 90,
      def: 70,
      spe_atk: 60,
      spe_def: 70,
      vit: 40,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.25,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 167,
          name: "Mimigal",
          condition: "Niveau 22",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,1 m",
    weight: "33,5 kg",
    egg_groups: ["Insectoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 90,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 169,
    generation: 2,
    category: "Pokémon Chovsouris",
    name: {
      fr: "Nostenfer",
      en: "Crobat",
      jp: "クロバット",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/169/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/169/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Attention",
        tc: false,
      },
      {
        name: "Infiltration",
        tc: true,
      },
    ],
    stats: {
      hp: 85,
      atk: 90,
      def: 80,
      spe_atk: 70,
      spe_def: 80,
      vit: 130,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.25,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.25,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 41,
          name: "Nosferapti",
          condition: "Niveau 22",
        },
        {
          pokedex_id: 42,
          name: "Nosferalto",
          condition: "+1 Niveau + Bonheur",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,8 m",
    weight: "75,0 kg",
    egg_groups: ["Aérien"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 90,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 170,
    generation: 2,
    category: "Pokémon Poisson",
    name: {
      fr: "Loupio",
      en: "Chinchou",
      jp: "チョンチー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/170/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/170/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Électrik",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/electrik.png",
      },
    ],
    talents: [
      {
        name: "Absorbe-Volt",
        tc: false,
      },
      {
        name: "Lumiattirance",
        tc: false,
      },
      {
        name: "Absorbe-Eau",
        tc: true,
      },
    ],
    stats: {
      hp: 75,
      atk: 38,
      def: 38,
      spe_atk: 56,
      spe_def: 56,
      vit: 67,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.25,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 171,
          name: "Lanturn",
          condition: "Niveau 27",
        },
      ],
      mega: null,
    },
    height: "0,5 m",
    weight: "12,0 kg",
    egg_groups: ["Aquatique 2"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 190,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 171,
    generation: 2,
    category: "Pokémon Lumière",
    name: {
      fr: "Lanturn",
      en: "Lanturn",
      jp: "ランターン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/171/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/171/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Électrik",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/electrik.png",
      },
    ],
    talents: [
      {
        name: "Absorbe-Volt",
        tc: false,
      },
      {
        name: "Lumiattirance",
        tc: false,
      },
      {
        name: "Absorbe-Eau",
        tc: true,
      },
    ],
    stats: {
      hp: 125,
      atk: 58,
      def: 58,
      spe_atk: 76,
      spe_def: 76,
      vit: 67,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.25,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 170,
          name: "Loupio",
          condition: "Niveau 27",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,2 m",
    weight: "22,5 kg",
    egg_groups: ["Aquatique 2"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 75,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 172,
    generation: 2,
    category: "Pokémon Minisouris",
    name: {
      fr: "Pichu",
      en: "Pichu",
      jp: "ピチュー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/172/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/172/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Électrik",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/electrik.png",
      },
    ],
    talents: [
      {
        name: "Statik",
        tc: false,
      },
      {
        name: "Paratonnerre",
        tc: true,
      },
    ],
    stats: {
      hp: 20,
      atk: 40,
      def: 15,
      spe_atk: 35,
      spe_def: 35,
      vit: 60,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 25,
          name: "Pikachu",
          condition: "Bonheur",
        },
        {
          pokedex_id: 26,
          name: "Raichu",
          condition: "Pierre Foudre",
        },
      ],
      mega: null,
    },
    height: "0,3 m",
    weight: "2,0 kg",
    egg_groups: null,
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 190,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 173,
    generation: 2,
    category: "Pokémon Étoile",
    name: {
      fr: "Mélo",
      en: "Cleffa",
      jp: "ピィ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/173/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/173/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Fée",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/fee.png",
      },
    ],
    talents: [
      {
        name: "Joli Sourire",
        tc: false,
      },
      {
        name: "Garde Magik",
        tc: false,
      },
      {
        name: "Garde-Ami",
        tc: true,
      },
    ],
    stats: {
      hp: 50,
      atk: 25,
      def: 28,
      spe_atk: 45,
      spe_def: 55,
      vit: 15,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 0,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 35,
          name: "Mélofée",
          condition: "Bonheur",
        },
        {
          pokedex_id: 36,
          name: "Mélodelfe",
          condition: "Pierre Lune",
        },
      ],
      mega: null,
    },
    height: "0,3 m",
    weight: "3,0 kg",
    egg_groups: null,
    sexe: {
      male: 25,
      female: 75,
    },
    catch_rate: 150,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 174,
    generation: 2,
    category: "Pokémon Bouboule",
    name: {
      fr: "Toudoudou",
      en: "Igglybuff",
      jp: "ププリン ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/174/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/174/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
      {
        name: "Fée",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/fee.png",
      },
    ],
    talents: [
      {
        name: "Joli Sourire",
        tc: false,
      },
      {
        name: "Battant",
        tc: false,
      },
      {
        name: "Garde-Ami",
        tc: true,
      },
    ],
    stats: {
      hp: 90,
      atk: 30,
      def: 15,
      spe_atk: 40,
      spe_def: 20,
      vit: 15,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 0,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 39,
          name: "Rondoudou",
          condition: "Bonheur",
        },
        {
          pokedex_id: 40,
          name: "Grodoudou",
          condition: "Pierre Lune",
        },
      ],
      mega: null,
    },
    height: "0,3 m",
    weight: "1,0 kg",
    egg_groups: null,
    sexe: {
      male: 25,
      female: 75,
    },
    catch_rate: 170,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 175,
    generation: 2,
    category: "Pokémon Balle Pic",
    name: {
      fr: "Togepi",
      en: "Togepi",
      jp: "トゲピー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/175/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/175/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Fée",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/fee.png",
      },
    ],
    talents: [
      {
        name: "Sérénité",
        tc: false,
      },
      {
        name: "Agitation",
        tc: false,
      },
      {
        name: "Chanceux",
        tc: true,
      },
    ],
    stats: {
      hp: 35,
      atk: 20,
      def: 65,
      spe_atk: 40,
      spe_def: 65,
      vit: 20,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 0,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 176,
          name: "Togetic",
          condition: "+1 Niveau + Bonheur",
        },
        {
          pokedex_id: 468,
          name: "Togekiss",
          condition: "Pierre Éclat",
        },
      ],
      mega: null,
    },
    height: "0,3 m",
    weight: "1,5 kg",
    egg_groups: null,
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 190,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 176,
    generation: 2,
    category: "Pokémon Bonheur",
    name: {
      fr: "Togetic",
      en: "Togetic",
      jp: "トゲチック",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/176/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/176/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Fée",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/fee.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Sérénité",
        tc: false,
      },
      {
        name: "Agitation",
        tc: false,
      },
      {
        name: "Chanceux",
        tc: true,
      },
    ],
    stats: {
      hp: 55,
      atk: 40,
      def: 85,
      spe_atk: 80,
      spe_def: 105,
      vit: 40,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.25,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.25,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 0,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 175,
          name: "Togepi",
          condition: "+1 Niveau + Bonheur",
        },
      ],
      next: [
        {
          pokedex_id: 468,
          name: "Togekiss",
          condition: "Pierre Éclat",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "3,2 kg",
    egg_groups: ["Aérien", "Féerique"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 75,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 177,
    generation: 2,
    category: "Pokémon Minoiseau",
    name: {
      fr: "Natu",
      en: "Natu",
      jp: "ネイティ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/177/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/177/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Synchro",
        tc: false,
      },
      {
        name: "Matinal",
        tc: false,
      },
      {
        name: "Miroir Magik",
        tc: true,
      },
    ],
    stats: {
      hp: 40,
      atk: 50,
      def: 45,
      spe_atk: 70,
      spe_def: 45,
      vit: 70,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.25,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 178,
          name: "Xatu",
          condition: "Niveau 25",
        },
      ],
      mega: null,
    },
    height: "0,2 m",
    weight: "2,0 kg",
    egg_groups: ["Aérien"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 190,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 178,
    generation: 2,
    category: "Pokémon Mystique",
    name: {
      fr: "Xatu",
      en: "Xatu",
      jp: "ネイティオ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/178/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/178/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Synchro",
        tc: false,
      },
      {
        name: "Matinal",
        tc: false,
      },
      {
        name: "Miroir Magik",
        tc: true,
      },
    ],
    stats: {
      hp: 65,
      atk: 75,
      def: 70,
      spe_atk: 95,
      spe_def: 70,
      vit: 95,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.25,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 177,
          name: "Natu",
          condition: "Niveau 25",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,5 m",
    weight: "15,0 kg",
    egg_groups: ["Aérien"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 75,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 179,
    generation: 2,
    category: "Pokémon Laine",
    name: {
      fr: "Wattouat",
      en: "Mareep",
      jp: "メリープ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/179/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/179/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Électrik",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/electrik.png",
      },
    ],
    talents: [
      {
        name: "Statik",
        tc: false,
      },
      {
        name: "Plus",
        tc: true,
      },
    ],
    stats: {
      hp: 55,
      atk: 40,
      def: 40,
      spe_atk: 65,
      spe_def: 45,
      vit: 35,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 180,
          name: "Lainergie",
          condition: "Niveau 15",
        },
        {
          pokedex_id: 181,
          name: "Pharamp",
          condition: "Niveau 30",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "7,8 kg",
    egg_groups: ["Terrestre", "Monstrueux"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 235,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 180,
    generation: 2,
    category: "Pokémon Laine",
    name: {
      fr: "Lainergie",
      en: "Flaaffy",
      jp: "モココ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/180/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/180/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Électrik",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/electrik.png",
      },
    ],
    talents: [
      {
        name: "Statik",
        tc: false,
      },
      {
        name: "Plus",
        tc: true,
      },
    ],
    stats: {
      hp: 70,
      atk: 55,
      def: 55,
      spe_atk: 80,
      spe_def: 60,
      vit: 45,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 179,
          name: "Wattouat",
          condition: "Niveau 15",
        },
      ],
      next: [
        {
          pokedex_id: 181,
          name: "Pharamp",
          condition: "Niveau 30",
        },
      ],
      mega: null,
    },
    height: "0,8 m",
    weight: "13,3 kg",
    egg_groups: ["Terrestre", "Monstrueux"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 120,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 181,
    generation: 2,
    category: "Pokémon Lumière",
    name: {
      fr: "Pharamp",
      en: "Ampharos",
      jp: "デンリュウ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/181/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/181/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Électrik",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/electrik.png",
      },
    ],
    talents: [
      {
        name: "Statik",
        tc: false,
      },
      {
        name: "Plus",
        tc: true,
      },
    ],
    stats: {
      hp: 90,
      atk: 75,
      def: 85,
      spe_atk: 115,
      spe_def: 90,
      vit: 55,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 179,
          name: "Wattouat",
          condition: "Niveau 15",
        },
        {
          pokedex_id: 180,
          name: "Lainergie",
          condition: "Niveau 30",
        },
      ],
      next: null,
      mega: [
        {
          orbe: "Pharampite",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/181/mega-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/181/mega-shiny.png",
          },
        },
      ],
    },
    height: "1,4 m",
    weight: "61,5 kg",
    egg_groups: ["Monstrueux", "Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 182,
    generation: 2,
    category: "Pokémon Fleur",
    name: {
      fr: "Joliflor",
      en: "Bellossom",
      jp: "キレイハナ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/182/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/182/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
    ],
    talents: [
      {
        name: "Chlorophylle",
        tc: false,
      },
      {
        name: "Cœur Soin",
        tc: true,
      },
    ],
    stats: {
      hp: 75,
      atk: 80,
      def: 95,
      spe_atk: 90,
      spe_def: 100,
      vit: 50,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 43,
          name: "Mytherbe",
          condition: "Niveau 21",
        },
        {
          pokedex_id: 44,
          name: "Ortide",
          condition: "Pierre Soleil",
        },
      ],
      next: null,
      mega: null,
    },
    height: "0,4 m",
    weight: "5,8 kg",
    egg_groups: ["Végétal"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 183,
    generation: 2,
    category: "Pokémon Aquasouris",
    name: {
      fr: "Marill",
      en: "Marill",
      jp: "マリル",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/183/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/183/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Fée",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/fee.png",
      },
    ],
    talents: [
      {
        name: "Isograisse",
        tc: false,
      },
      {
        name: "Coloforce",
        tc: false,
      },
      {
        name: "Herbivore",
        tc: true,
      },
    ],
    stats: {
      hp: 70,
      atk: 20,
      def: 50,
      spe_atk: 20,
      spe_def: 50,
      vit: 40,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0,
      },
      {
        name: "Feu",
        multiplier: 0,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 0,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 298,
          name: "Azurill",
          condition: "+1 Niveau + Bonheur",
        },
      ],
      next: [
        {
          pokedex_id: 184,
          name: "Azumarill",
          condition: "Niveau 18",
        },
      ],
      mega: null,
    },
    height: "0,4 m",
    weight: "8,5 kg",
    egg_groups: ["Aquatique 1", "Féerique"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 190,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 184,
    generation: 2,
    category: "Pokémon Aqualapin",
    name: {
      fr: "Azumarill",
      en: "Azumarill",
      jp: "マリルリ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/184/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/184/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Fée",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/fee.png",
      },
    ],
    talents: [
      {
        name: "Isograisse",
        tc: false,
      },
      {
        name: "Coloforce",
        tc: false,
      },
      {
        name: "Herbivore",
        tc: true,
      },
    ],
    stats: {
      hp: 100,
      atk: 50,
      def: 80,
      spe_atk: 60,
      spe_def: 80,
      vit: 50,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0,
      },
      {
        name: "Feu",
        multiplier: 0,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 0,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 298,
          name: "Azurill",
          condition: "+1 Niveau + Bonheur",
        },
        {
          pokedex_id: 183,
          name: "Marill",
          condition: "Niveau 18",
        },
      ],
      next: null,
      mega: null,
    },
    height: "0,8 m",
    weight: "28,5 kg",
    egg_groups: ["Aquatique 1", "Féerique"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 75,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 185,
    generation: 2,
    category: "Pokémon Imitation",
    name: {
      fr: "Simularbre",
      en: "Sudowoodo",
      jp: "ウソッキー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/185/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/185/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Roche",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/roche.png",
      },
    ],
    talents: [
      {
        name: "Fermeté",
        tc: false,
      },
      {
        name: "Tête de Roc",
        tc: false,
      },
      {
        name: "Phobique",
        tc: true,
      },
    ],
    stats: {
      hp: 70,
      atk: 100,
      def: 115,
      spe_atk: 30,
      spe_def: 65,
      vit: 30,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 438,
          name: "Manzaí",
          condition: "Connaitre Copie + 1 Niveau",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,2 m",
    weight: "38,0 kg",
    egg_groups: ["Minéral"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 65,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 186,
    generation: 2,
    category: "Pokémon Grenouille",
    name: {
      fr: "Tarpaud",
      en: "Politoed",
      jp: "ニョロトノ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/186/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/186/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Absorbe-Eau",
        tc: false,
      },
      {
        name: "Moiteur",
        tc: false,
      },
      {
        name: "Crachin",
        tc: true,
      },
    ],
    stats: {
      hp: 90,
      atk: 75,
      def: 75,
      spe_atk: 90,
      spe_def: 100,
      vit: 70,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 60,
          name: "Ptitard",
          condition: "Niveau 25",
        },
        {
          pokedex_id: 61,
          name: "Têtarte",
          condition: "Echange avec Roche Royale",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,1 m",
    weight: "33,9 kg",
    egg_groups: ["Aquatique 1"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 187,
    generation: 2,
    category: "Pokémon Pissenlit",
    name: {
      fr: "Granivol",
      en: "Hoppip",
      jp: "ハネッコ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/187/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/187/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Chlorophylle",
        tc: false,
      },
      {
        name: "Feuille Garde",
        tc: false,
      },
      {
        name: "Infiltration",
        tc: true,
      },
    ],
    stats: {
      hp: 35,
      atk: 35,
      def: 40,
      spe_atk: 35,
      spe_def: 55,
      vit: 50,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 4,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 188,
          name: "Floravol",
          condition: "Niveau 18",
        },
        {
          pokedex_id: 189,
          name: "Cotovol",
          condition: "Niveau 27",
        },
      ],
      mega: null,
    },
    height: "0,4 m",
    weight: "0,5 kg",
    egg_groups: ["Féerique", "Végétal"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 188,
    generation: 2,
    category: "Pokémon Pissenlit",
    name: {
      fr: "Floravol",
      en: "Skiploom",
      jp: "ポポッコ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/188/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/188/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Chlorophylle",
        tc: false,
      },
      {
        name: "Feuille Garde",
        tc: false,
      },
      {
        name: "Infiltration",
        tc: true,
      },
    ],
    stats: {
      hp: 55,
      atk: 45,
      def: 50,
      spe_atk: 45,
      spe_def: 65,
      vit: 80,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 4,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 187,
          name: "Granivol",
          condition: "Niveau 18",
        },
      ],
      next: [
        {
          pokedex_id: 189,
          name: "Cotovol",
          condition: "Niveau 27",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "1,0 kg",
    egg_groups: ["Féerique", "Végétal"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 120,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 189,
    generation: 2,
    category: "Pokémon Pissenlit",
    name: {
      fr: "Cotovol",
      en: "Jumpluff",
      jp: "ワタッコ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/189/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/189/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Chlorophylle",
        tc: false,
      },
      {
        name: "Feuille Garde",
        tc: false,
      },
      {
        name: "Infiltration",
        tc: true,
      },
    ],
    stats: {
      hp: 75,
      atk: 55,
      def: 70,
      spe_atk: 55,
      spe_def: 95,
      vit: 110,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 4,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 187,
          name: "Granivol",
          condition: "Niveau 18",
        },
        {
          pokedex_id: 188,
          name: "Cotovol",
          condition: "Niveau 27",
        },
      ],
      next: null,
      mega: null,
    },
    height: "0,8 m",
    weight: "3,0 kg",
    egg_groups: ["Féerique", "Végétal"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 190,
    generation: 2,
    category: "Pokémon Longqueue",
    name: {
      fr: "Capumain",
      en: "Aipom",
      jp: "エイパム",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/190/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/190/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Fuite",
        tc: false,
      },
      {
        name: "Ramassage",
        tc: false,
      },
      {
        name: "Multi-Coups",
        tc: true,
      },
    ],
    stats: {
      hp: 55,
      atk: 70,
      def: 55,
      spe_atk: 40,
      spe_def: 55,
      vit: 85,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 424,
          name: "Capidextre",
          condition: "+1 Niveau avec Coup Double",
        },
      ],
      mega: null,
    },
    height: "0,8 m",
    weight: "11,5 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 191,
    generation: 2,
    category: "Pokémon Graine",
    name: {
      fr: "Tournegrin",
      en: "Sunkern",
      jp: "ヒマナッツ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/191/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/191/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
    ],
    talents: [
      {
        name: "Chlorophylle",
        tc: false,
      },
      {
        name: "Force Soleil",
        tc: false,
      },
      {
        name: "Matinal",
        tc: true,
      },
    ],
    stats: {
      hp: 30,
      atk: 30,
      def: 30,
      spe_atk: 30,
      spe_def: 30,
      vit: 30,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 192,
          name: "Héliatronc",
          condition: "Pierre Soleil",
        },
      ],
      mega: null,
    },
    height: "0,3 m",
    weight: "1,8 kg",
    egg_groups: ["Végétal"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 235,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 192,
    generation: 2,
    category: "Pokémon Soleil",
    name: {
      fr: "Héliatronc",
      en: "Sunflora",
      jp: "キマワリ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/192/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/192/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
    ],
    talents: [
      {
        name: "Chlorophylle",
        tc: false,
      },
      {
        name: "Force Soleil",
        tc: false,
      },
      {
        name: "Matinal",
        tc: true,
      },
    ],
    stats: {
      hp: 75,
      atk: 75,
      def: 55,
      spe_atk: 105,
      spe_def: 85,
      vit: 30,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 191,
          name: "Tournegrin",
          condition: "Pierre Soleil",
        },
      ],
      next: null,
      mega: null,
    },
    height: "0,8 m",
    weight: "8,5 kg",
    egg_groups: ["Végétal"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 120,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 193,
    generation: 2,
    category: "Pokémon Translaile",
    name: {
      fr: "Yanma",
      en: "Yanma",
      jp: "ヤンヤンマ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/193/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/193/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Turbo",
        tc: false,
      },
      {
        name: "Œil Composé",
        tc: false,
      },
      {
        name: "Fouille",
        tc: true,
      },
    ],
    stats: {
      hp: 65,
      atk: 65,
      def: 45,
      spe_atk: 75,
      spe_def: 45,
      vit: 95,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.25,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 4,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 469,
          name: "Yanmega",
          condition: "+1 Niveau avec Pouvoir Antique",
        },
      ],
      mega: null,
    },
    height: "1,2 m",
    weight: "38,0 kg",
    egg_groups: ["Insectoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 75,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 194,
    generation: 2,
    category: "Pokémon Poisson",
    name: {
      fr: "Axoloto",
      en: "Wooper",
      jp: "ウパー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/194/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/194/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
    ],
    talents: [
      {
        name: "Absorbe-Eau",
        tc: false,
      },
      {
        name: "Moiteur",
        tc: false,
      },
      {
        name: "Inconscient",
        tc: true,
      },
    ],
    stats: {
      hp: 55,
      atk: 45,
      def: 45,
      spe_atk: 25,
      spe_def: 25,
      vit: 15,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 4,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 195,
          name: "Maraiste",
          condition: "Niveau 20",
        },
      ],
      mega: null,
    },
    height: "0,4 m",
    weight: "8,5 kg",
    egg_groups: ["Aquatique 1", "Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 1000000,
    formes: [
      {
        region: "paldea",
        name: {
          fr: "Axoloto de Paldea",
          en: "Paldean Wooper",
          jp: "パルデアのウパー",
        },
      },
    ],
  },
  {
    pokedex_id: 195,
    generation: 2,
    category: "Pokémon Poisson",
    name: {
      fr: "Maraiste",
      en: "Quagsire",
      jp: "ヌオー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/195/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/195/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
    ],
    talents: [
      {
        name: "Absorbe-Eau",
        tc: false,
      },
      {
        name: "Moiteur",
        tc: false,
      },
      {
        name: "Inconscient",
        tc: true,
      },
    ],
    stats: {
      hp: 95,
      atk: 85,
      def: 85,
      spe_atk: 65,
      spe_def: 65,
      vit: 35,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 4,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 194,
          name: "Axoloto",
          condition: "Niveau 20",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,4 m",
    weight: "75,0 kg",
    egg_groups: ["Aquatique 1", "Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 90,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 196,
    generation: 2,
    category: "Pokémon Soleil",
    name: {
      fr: "Mentali",
      en: "Espeon",
      jp: "エーフィ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/196/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/196/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Synchro",
        tc: false,
      },
      {
        name: "Miroir Magik",
        tc: true,
      },
    ],
    stats: {
      hp: 65,
      atk: 65,
      def: 60,
      spe_atk: 130,
      spe_def: 95,
      vit: 110,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 133,
          name: "Évoli",
          condition: "Bonheur + Jour + 1 niveau + aucune capacité Fée",
        },
      ],
      next: null,
      mega: null,
    },
    height: "0,9 m",
    weight: "26,5 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 197,
    generation: 2,
    category: "Pokémon Lune",
    name: {
      fr: "Noctali",
      en: "Umbreon",
      jp: "ブラッキー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/197/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/197/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Ténèbres",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/tenebres.png",
      },
    ],
    talents: [
      {
        name: "Synchro",
        tc: false,
      },
      {
        name: "Attention",
        tc: true,
      },
    ],
    stats: {
      hp: 95,
      atk: 65,
      def: 110,
      spe_atk: 60,
      spe_def: 130,
      vit: 65,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0.5,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 133,
          name: "Évoli",
          condition: "Bonheur + Nuit + 1 niveau + aucune capacité Fée",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,0 m",
    weight: "27,0 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 198,
    generation: 2,
    category: "Pokémon Obscurité",
    name: {
      fr: "Cornèbre",
      en: "Murkrow",
      jp: "ヤミカラス ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/198/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/198/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Ténèbres",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/tenebres.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Insomnia",
        tc: false,
      },
      {
        name: "Chanceux",
        tc: false,
      },
      {
        name: "Farceur",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 85,
      def: 42,
      spe_atk: 85,
      spe_def: 42,
      vit: 91,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 0.5,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 430,
          name: "Corboss",
          condition: "Pierre Nuit",
        },
      ],
      mega: null,
    },
    height: "0,5 m",
    weight: "2,1 kg",
    egg_groups: ["Aérien"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 30,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 199,
    generation: 2,
    category: "Pokémon Royal",
    name: {
      fr: "Roigada",
      en: "Slowking",
      jp: "ヤドキング",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/199/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/199/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Benêt",
        tc: false,
      },
      {
        name: "Tempo Perso",
        tc: false,
      },
      {
        name: "Régé-Force",
        tc: true,
      },
    ],
    stats: {
      hp: 95,
      atk: 75,
      def: 80,
      spe_atk: 100,
      spe_def: 110,
      vit: 30,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 79,
          name: "Ramoloss",
          condition: "Echange Ramoloss avec Roche Royale",
        },
      ],
      next: null,
      mega: null,
    },
    height: "2,0 m",
    weight: "79,5 kg",
    egg_groups: ["Monstrueux", "Aquatique 1"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 70,
    level_100: 1000000,
    formes: [
      {
        region: "galar",
        name: {
          fr: "Roigada de Galar",
          en: "Galarian Slowking",
          jp: "ガラルのヤドキング",
        },
      },
    ],
  },
  {
    pokedex_id: 200,
    generation: 2,
    category: "Pokémon Strident",
    name: {
      fr: "Feuforêve",
      en: "Misdreavus",
      jp: "ムウマ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/200/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/200/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Spectre",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/spectre.png",
      },
    ],
    talents: [
      {
        name: "Lévitation",
        tc: false,
      },
    ],
    stats: {
      hp: 60,
      atk: 60,
      def: 60,
      spe_atk: 85,
      spe_def: 85,
      vit: 85,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 429,
          name: "Magirêve",
          condition: "Pierre Nuit",
        },
      ],
      mega: null,
    },
    height: "0,7 m",
    weight: "1,0 kg",
    egg_groups: ["Amorphe"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 201,
    generation: 2,
    category: "Pokémon Symbolique",
    name: {
      fr: "Zarbi",
      en: "Unown",
      jp: "アンノーン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/201/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/201/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Lévitation",
        tc: false,
      },
    ],
    stats: {
      hp: 48,
      atk: 72,
      def: 48,
      spe_atk: 72,
      spe_def: 48,
      vit: 48,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "0,5 m",
    weight: "5,0 kg",
    egg_groups: null,
    sexe: null,
    catch_rate: 225,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 202,
    generation: 2,
    category: "Pokémon Patient",
    name: {
      fr: "Qulbutoké",
      en: "Wobbuffet",
      jp: "ソーナンス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/202/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/202/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Marque Ombre",
        tc: false,
      },
      {
        name: "Télépathe",
        tc: true,
      },
    ],
    stats: {
      hp: 190,
      atk: 33,
      def: 58,
      spe_atk: 33,
      spe_def: 58,
      vit: 33,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 360,
          name: "Okéoké",
          condition: "Niveau 15",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,3 m",
    weight: "28,5 kg",
    egg_groups: ["Amorphe"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 203,
    generation: 2,
    category: "Pokémon Long-Cou",
    name: {
      fr: "Girafarig",
      en: "Girafarig",
      jp: "キリンリキ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/203/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/203/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Attention",
        tc: false,
      },
      {
        name: "Matinal",
        tc: false,
      },
      {
        name: "Herbivore",
        tc: true,
      },
    ],
    stats: {
      hp: 70,
      atk: 80,
      def: 65,
      spe_atk: 90,
      spe_def: 65,
      vit: 85,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 981,
          name: "Farigiraf",
          condition: "+1 Niveau avec Double Laser",
        },
      ],
      mega: null,
    },
    height: "1,5 m",
    weight: "41,5 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 60,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 204,
    generation: 2,
    category: "Pokémon Ver Caché",
    name: {
      fr: "Pomdepik",
      en: "Pineco",
      jp: "クヌギダマ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/204/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/204/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
    ],
    talents: [
      {
        name: "Fermeté",
        tc: false,
      },
      {
        name: "Envelocape",
        tc: true,
      },
    ],
    stats: {
      hp: 50,
      atk: 65,
      def: 90,
      spe_atk: 35,
      spe_def: 35,
      vit: 15,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 205,
          name: "Foretress",
          condition: "Niveau 31",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "7,2 kg",
    egg_groups: ["Insectoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 190,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 205,
    generation: 2,
    category: "Pokémon Ver Caché",
    name: {
      fr: "Foretress",
      en: "Forretress",
      jp: "フォレトス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/205/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/205/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
      {
        name: "Acier",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/acier.png",
      },
    ],
    talents: [
      {
        name: "Fermeté",
        tc: false,
      },
      {
        name: "Envelocape",
        tc: true,
      },
    ],
    stats: {
      hp: 75,
      atk: 90,
      def: 140,
      spe_atk: 60,
      spe_def: 60,
      vit: 40,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 4,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 0.5,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 204,
          name: "Pomdepik",
          condition: "Niveau 31",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,2 m",
    weight: "125,8 kg",
    egg_groups: ["Insectoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 75,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 206,
    generation: 2,
    category: "Pokémon Serpent",
    name: {
      fr: "Insolourdo",
      en: "Dunsparce",
      jp: "ノコッチ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/206/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/206/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Sérénité",
        tc: false,
      },
      {
        name: "Fuite",
        tc: false,
      },
      {
        name: "Phobique",
        tc: true,
      },
    ],
    stats: {
      hp: 100,
      atk: 70,
      def: 70,
      spe_atk: 65,
      spe_def: 65,
      vit: 45,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 982,
          name: "Deusolourdo",
          condition: "+1 Niveau avec Hyperceuse",
        },
      ],
      mega: null,
    },
    height: "1,5 m",
    weight: "14,0 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 190,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 207,
    generation: 2,
    category: "Pokémon Scorpivol",
    name: {
      fr: "Scorplane",
      en: "Gligar",
      jp: "グライガー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/207/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/207/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Voile Sable",
        tc: false,
      },
      {
        name: "Hyper Cutter",
        tc: false,
      },
      {
        name: "Vaccin",
        tc: true,
      },
    ],
    stats: {
      hp: 65,
      atk: 75,
      def: 105,
      spe_atk: 35,
      spe_def: 65,
      vit: 85,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 4,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 472,
          name: "Scorvol",
          condition: "+1 Niveau avec Croc Rasoir / Contact d'un Croc Rasoir (PLA)",
        },
      ],
      mega: null,
    },
    height: "1,1 m",
    weight: "64,8 kg",
    egg_groups: ["Insectoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 60,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 208,
    generation: 2,
    category: "Pokémon Serpenfer",
    name: {
      fr: "Steelix",
      en: "Steelix",
      jp: "ハガネール",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/208/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/208/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Acier",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/acier.png",
      },
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
    ],
    talents: [
      {
        name: "Tête de Roc",
        tc: false,
      },
      {
        name: "Fermeté",
        tc: false,
      },
      {
        name: "Sans Limite",
        tc: true,
      },
    ],
    stats: {
      hp: 75,
      atk: 85,
      def: 200,
      spe_atk: 55,
      spe_def: 65,
      vit: 30,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 0,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 0.25,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 0.5,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 95,
          name: "Onix",
          condition: "Echange avec Peau Métal / Au contact d'une Peau Métal (PLA)",
        },
      ],
      next: null,
      mega: null,
    },
    height: "9,2 m",
    weight: "400,0 kg",
    egg_groups: ["Minéral"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 25,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 209,
    generation: 2,
    category: "Pokémon Fée",
    name: {
      fr: "Snubbull",
      en: "Snubbull",
      jp: "ブルー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/209/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/209/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Fée",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/fee.png",
      },
    ],
    talents: [
      {
        name: "Fuite",
        tc: false,
      },
      {
        name: "Intimidation",
        tc: false,
      },
      {
        name: "Phobique",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 80,
      def: 50,
      spe_atk: 40,
      spe_def: 40,
      vit: 30,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 0,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 210,
          name: "Granbull",
          condition: "Niveau 23",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "7,8 kg",
    egg_groups: ["Terrestre", "Féerique"],
    sexe: {
      male: 25,
      female: 75,
    },
    catch_rate: 190,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 210,
    generation: 2,
    category: "Pokémon Fée",
    name: {
      fr: "Granbull",
      en: "Granbull",
      jp: "グランブル",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/210/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/210/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Fée",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/fee.png",
      },
    ],
    talents: [
      {
        name: "Pied Véloce",
        tc: false,
      },
      {
        name: "Intimidation",
        tc: false,
      },
      {
        name: "Phobique",
        tc: true,
      },
    ],
    stats: {
      hp: 90,
      atk: 120,
      def: 75,
      spe_atk: 60,
      spe_def: 60,
      vit: 45,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 0,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 209,
          name: "Snubbull",
          condition: "Niveau 23",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,4 m",
    weight: "48,7 kg",
    egg_groups: ["Terrestre", "Féerique"],
    sexe: {
      male: 25,
      female: 75,
    },
    catch_rate: 75,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 211,
    generation: 2,
    category: "Pokémon Bouboule",
    name: {
      fr: "Qwilfish",
      en: "Qwilfish",
      jp: "ハリーセン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/211/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/211/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Glissade",
        tc: false,
      },
      {
        name: "Point Poison",
        tc: false,
      },
      {
        name: "Intimidation",
        tc: true,
      },
    ],
    stats: {
      hp: 65,
      atk: 95,
      def: 85,
      spe_atk: 55,
      spe_def: 55,
      vit: 85,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: null,
    height: "0,5 m",
    weight: "3,9 kg",
    egg_groups: ["Aquatique 2"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: [
      {
        region: "hisui",
        name: {
          fr: "Qwilfish de Hisui",
          en: "Hisuian Qwilfish",
          jp: "ヒスイのハリーセン",
        },
      },
    ],
  },
  {
    pokedex_id: 212,
    generation: 2,
    category: "Pokémon Pince",
    name: {
      fr: "Cizayox",
      en: "Scizor",
      jp: "ハッサム",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/212/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/212/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
      {
        name: "Acier",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/acier.png",
      },
    ],
    talents: [
      {
        name: "Essaim",
        tc: false,
      },
      {
        name: "Technicien",
        tc: false,
      },
      {
        name: "Light Metal",
        tc: true,
      },
    ],
    stats: {
      hp: 70,
      atk: 130,
      def: 100,
      spe_atk: 55,
      spe_def: 80,
      vit: 65,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 4,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 0.5,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 123,
          name: "Insécateur",
          condition: "Echange avec Peau Métal / Au contact d'une Peau Métal (PLA)",
        },
      ],
      next: null,
      mega: [
        {
          orbe: "Cizayoxite",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/212/mega-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/212/mega-shiny.png",
          },
        },
      ],
    },
    height: "1,8 m",
    weight: "118,0 kg",
    egg_groups: ["Insectoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 25,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 213,
    generation: 2,
    category: "Pokémon Pourri",
    name: {
      fr: "Caratroc",
      en: "Shuckle",
      jp: "ツボツボ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/213/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/213/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
      {
        name: "Roche",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/roche.png",
      },
    ],
    talents: [
      {
        name: "Fermeté",
        tc: false,
      },
      {
        name: "Gloutonnerie",
        tc: false,
      },
      {
        name: "Contestation",
        tc: true,
      },
    ],
    stats: {
      hp: 20,
      atk: 10,
      def: 230,
      spe_atk: 10,
      spe_def: 230,
      vit: 5,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "0,6 m",
    weight: "20,5 kg",
    egg_groups: ["Insectoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 190,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 214,
    generation: 2,
    category: "Pokémon Unicorne",
    name: {
      fr: "Scarhino",
      en: "Heracross",
      jp: "ヘラクロス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/214/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/214/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
      {
        name: "Combat",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/combat.png",
      },
    ],
    talents: [
      {
        name: "Cran",
        tc: false,
      },
      {
        name: "Essaim",
        tc: false,
      },
      {
        name: "Impudence",
        tc: true,
      },
    ],
    stats: {
      hp: 80,
      atk: 125,
      def: 75,
      spe_atk: 40,
      spe_def: 95,
      vit: 85,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 4,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: null,
      next: null,
      mega: [
        {
          orbe: "Scarhinoíte",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/214/mega-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/214/mega-shiny.png",
          },
        },
      ],
    },
    height: "1,5 m",
    weight: "54,0 kg",
    egg_groups: ["Insectoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 215,
    generation: 2,
    category: "Pokémon Grifacérée",
    name: {
      fr: "Farfuret",
      en: "Sneasel",
      jp: "ニューラ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/215/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/215/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Ténèbres",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/tenebres.png",
      },
      {
        name: "Glace",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/glace.png",
      },
    ],
    talents: [
      {
        name: "Attention",
        tc: false,
      },
      {
        name: "Regard Vif",
        tc: false,
      },
      {
        name: "Pickpocket",
        tc: true,
      },
    ],
    stats: {
      hp: 55,
      atk: 95,
      def: 55,
      spe_atk: 35,
      spe_def: 75,
      vit: 115,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 4,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 0.5,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 461,
          name: "Dimoret",
          condition: "+1 Niveau avec Griffe Rasoir / Contact d'une Griffe Rasoir",
        },
      ],
      mega: null,
    },
    height: "0,9 m",
    weight: "28,0 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 60,
    level_100: 1059862,
    formes: [
      {
        region: "hisui",
        name: {
          fr: "Farfuret de Hisui",
          en: "Hisuian Sneasel",
          jp: "ヒスイのニューラ",
        },
      },
    ],
  },
  {
    pokedex_id: 216,
    generation: 2,
    category: "Pokémon Mini Ours",
    name: {
      fr: "Teddiursa",
      en: "Teddiursa",
      jp: "ヒメグマ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/216/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/216/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Ramassage",
        tc: false,
      },
      {
        name: "Pied Véloce",
        tc: false,
      },
      {
        name: "Cherche Miel",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 80,
      def: 50,
      spe_atk: 50,
      spe_def: 50,
      vit: 40,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 217,
          name: "Ursaring",
          condition: "Niveau 30",
        },
        {
          pokedex_id: 901,
          name: "Ursaking",
          condition: "Bloc de Tourbe en nuit de pleine lune",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "8,8 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 120,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 217,
    generation: 2,
    category: "Pokémon Hibernant",
    name: {
      fr: "Ursaring",
      en: "Ursaring",
      jp: "リングマ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/217/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/217/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Cran",
        tc: false,
      },
      {
        name: "Pied Véloce",
        tc: false,
      },
      {
        name: "Tension",
        tc: true,
      },
    ],
    stats: {
      hp: 90,
      atk: 130,
      def: 75,
      spe_atk: 75,
      spe_def: 75,
      vit: 55,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 216,
          name: "Teddiursa",
          condition: "Niveau 30",
        },
      ],
      next: [
        {
          pokedex_id: 901,
          name: "Ursaking",
          condition: "Bloc de Tourbe en nuit de pleine lune",
        },
      ],
      mega: null,
    },
    height: "1,8 m",
    weight: "125,8 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 60,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 218,
    generation: 2,
    category: "Pokémon Lave",
    name: {
      fr: "Limagma",
      en: "Slugma",
      jp: "マグマッグ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/218/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/218/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Feu",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png",
      },
    ],
    talents: [
      {
        name: "Armumagma",
        tc: false,
      },
      {
        name: "Corps Ardent",
        tc: false,
      },
      {
        name: "Armurouillée",
        tc: true,
      },
    ],
    stats: {
      hp: 40,
      atk: 40,
      def: 40,
      spe_atk: 70,
      spe_def: 40,
      vit: 20,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 219,
          name: "Volcaropod",
          condition: "Niveau 38",
        },
      ],
      mega: null,
    },
    height: "0,7 m",
    weight: "35,0 kg",
    egg_groups: ["Amorphe"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 190,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 219,
    generation: 2,
    category: "Pokémon Lave",
    name: {
      fr: "Volcaropod",
      en: "Magcargo",
      jp: "マグカルゴ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/219/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/219/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Feu",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png",
      },
      {
        name: "Roche",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/roche.png",
      },
    ],
    talents: [
      {
        name: "Armumagma",
        tc: false,
      },
      {
        name: "Corps Ardent",
        tc: false,
      },
      {
        name: "Armurouillée",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 50,
      def: 120,
      spe_atk: 90,
      spe_def: 80,
      vit: 30,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 0.25,
      },
      {
        name: "Eau",
        multiplier: 4,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 4,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 218,
          name: "Limagma",
          condition: "Niveau 38",
        },
      ],
      next: null,
      mega: null,
    },
    height: "0,8 m",
    weight: "55,0 kg",
    egg_groups: ["Amorphe"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 75,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 220,
    generation: 2,
    category: "Pokémon Cochon",
    name: {
      fr: "Marcacrin",
      en: "Swinub",
      jp: "ウリムー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/220/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/220/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Glace",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/glace.png",
      },
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
    ],
    talents: [
      {
        name: "Benêt",
        tc: false,
      },
      {
        name: "Rideau Neige",
        tc: false,
      },
      {
        name: "Isograisse",
        tc: true,
      },
    ],
    stats: {
      hp: 50,
      atk: 50,
      def: 40,
      spe_atk: 30,
      spe_def: 30,
      vit: 50,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 0,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 221,
          name: "Cochignon",
          condition: "Niveau 33",
        },
        {
          pokedex_id: 473,
          name: "Mammochon",
          condition: "+1 Niveau avec Pouvoir Antique",
        },
      ],
      mega: null,
    },
    height: "0,4 m",
    weight: "6,5 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 225,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 221,
    generation: 2,
    category: "Pokémon Porc",
    name: {
      fr: "Cochignon",
      en: "Piloswine",
      jp: "イノムー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/221/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/221/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Glace",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/glace.png",
      },
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
    ],
    talents: [
      {
        name: "Benêt",
        tc: false,
      },
      {
        name: "Rideau Neige",
        tc: false,
      },
      {
        name: "Isograisse",
        tc: true,
      },
    ],
    stats: {
      hp: 100,
      atk: 100,
      def: 80,
      spe_atk: 60,
      spe_def: 60,
      vit: 50,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 0,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 220,
          name: "Marcacrin",
          condition: "Niveau 33",
        },
      ],
      next: [
        {
          pokedex_id: 473,
          name: "Mammochon",
          condition: "+1 Niveau avec Pouvoir Antique",
        },
      ],
      mega: null,
    },
    height: "1,1 m",
    weight: "55,8 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 75,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 222,
    generation: 2,
    category: "Pokémon Corail",
    name: {
      fr: "Corayon",
      en: "Corsola",
      jp: "サニーゴ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/222/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/222/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Roche",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/roche.png",
      },
    ],
    talents: [
      {
        name: "Agitation",
        tc: false,
      },
      {
        name: "Médic Nature",
        tc: false,
      },
      {
        name: "Régé-Force",
        tc: true,
      },
    ],
    stats: {
      hp: 65,
      atk: 55,
      def: 95,
      spe_atk: 65,
      spe_def: 95,
      vit: 35,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 4,
      },
      {
        name: "Feu",
        multiplier: 0.25,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "0,6 m",
    weight: "5,0 kg",
    egg_groups: ["Aquatique 1", "Aquatique 3"],
    sexe: {
      male: 25,
      female: 75,
    },
    catch_rate: 60,
    level_100: 800000,
    formes: [
      {
        region: "galar",
        name: {
          fr: "Corayon de Galar",
          en: "Galarian Corsola",
          jp: "ガラルのサニーゴ",
        },
      },
    ],
  },
  {
    pokedex_id: 223,
    generation: 2,
    category: "Pokémon Jet",
    name: {
      fr: "Rémoraid",
      en: "Remoraid",
      jp: "テッポウオ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/223/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/223/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Agitation",
        tc: false,
      },
      {
        name: "Sniper",
        tc: false,
      },
      {
        name: "Lunatique",
        tc: true,
      },
    ],
    stats: {
      hp: 35,
      atk: 65,
      def: 35,
      spe_atk: 65,
      spe_def: 35,
      vit: 65,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 224,
          name: "Octillery",
          condition: "Niveau 25",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "12,0 kg",
    egg_groups: ["Aquatique 1", "Aquatique 2"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 190,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 224,
    generation: 2,
    category: "Pokémon Jet",
    name: {
      fr: "Octillery",
      en: "Octillery",
      jp: "オクタン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/224/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/224/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Ventouse",
        tc: false,
      },
      {
        name: "Sniper",
        tc: false,
      },
      {
        name: "Lunatique",
        tc: true,
      },
    ],
    stats: {
      hp: 75,
      atk: 105,
      def: 75,
      spe_atk: 105,
      spe_def: 75,
      vit: 45,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 223,
          name: "Rémoraid",
          condition: "Niveau 25",
        },
      ],
      next: null,
      mega: null,
    },
    height: "0,9 m",
    weight: "28,5 kg",
    egg_groups: ["Aquatique 1", "Aquatique 2"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 75,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 225,
    generation: 2,
    category: "Pokémon Livraison",
    name: {
      fr: "Cadoizo",
      en: "Delibird",
      jp: "デリバード",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/225/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/225/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Glace",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/glace.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Esprit Vital",
        tc: false,
      },
      {
        name: "Agitation",
        tc: false,
      },
      {
        name: "Insomnia",
        tc: true,
      },
    ],
    stats: {
      hp: 45,
      atk: 55,
      def: 45,
      spe_atk: 65,
      spe_def: 45,
      vit: 75,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 4,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "0,9 m",
    weight: "16,0 kg",
    egg_groups: ["Aquatique 1", "Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 226,
    generation: 2,
    category: "Pokémon Cervolant",
    name: {
      fr: "Démanta",
      en: "Mantine",
      jp: "マンタイン ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/226/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/226/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Glissade",
        tc: false,
      },
      {
        name: "Absorbe-Eau",
        tc: false,
      },
      {
        name: "Ignifu-Voile",
        tc: true,
      },
    ],
    stats: {
      hp: 85,
      atk: 40,
      def: 70,
      spe_atk: 80,
      spe_def: 140,
      vit: 70,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0,
      },
      {
        name: "Électrik",
        multiplier: 4,
      },
      {
        name: "Glace",
        multiplier: 0,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 458,
          name: "Babimanta",
          condition: "Gain de niveau avec Rémoraid dans l'équipe",
        },
      ],
      next: null,
      mega: null,
    },
    height: "2,1 m",
    weight: "220,0 kg",
    egg_groups: ["Aquatique 1"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 25,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 227,
    generation: 2,
    category: "Pokémon Armoiseau",
    name: {
      fr: "Airmure",
      en: "Skarmory",
      jp: "エアームド",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/227/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/227/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Acier",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/acier.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Fermeté",
        tc: false,
      },
      {
        name: "Regard Vif",
        tc: false,
      },
      {
        name: "Armurouillée",
        tc: true,
      },
    ],
    stats: {
      hp: 65,
      atk: 80,
      def: 140,
      spe_atk: 40,
      spe_def: 70,
      vit: 70,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 0.25,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 0.5,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: null,
    height: "1,7 m",
    weight: "50,5 kg",
    egg_groups: ["Aérien"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 25,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 228,
    generation: 2,
    category: "Pokémon Sombre",
    name: {
      fr: "Malosse",
      en: "Houndour",
      jp: "デルビル",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/228/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/228/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Ténèbres",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/tenebres.png",
      },
      {
        name: "Feu",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png",
      },
    ],
    talents: [
      {
        name: "Torche",
        tc: false,
      },
      {
        name: "Matinal",
        tc: false,
      },
      {
        name: "Tension",
        tc: true,
      },
    ],
    stats: {
      hp: 45,
      atk: 60,
      def: 30,
      spe_atk: 80,
      spe_def: 50,
      vit: 65,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 0.5,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 229,
          name: "Démolosse",
          condition: "Niveau 24",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "10,8 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 120,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 229,
    generation: 2,
    category: "Pokémon Sombre",
    name: {
      fr: "Démolosse",
      en: "Houndoom",
      jp: "ヘルガー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/229/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/229/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Ténèbres",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/tenebres.png",
      },
      {
        name: "Feu",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png",
      },
    ],
    talents: [
      {
        name: "Torche",
        tc: false,
      },
      {
        name: "Matinal",
        tc: false,
      },
      {
        name: "Tension",
        tc: true,
      },
    ],
    stats: {
      hp: 75,
      atk: 90,
      def: 50,
      spe_atk: 110,
      spe_def: 80,
      vit: 95,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 0.5,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 228,
          name: "Malosse",
          condition: "Niveau 24",
        },
      ],
      next: null,
      mega: [
        {
          orbe: "Démolossite",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/229/mega-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/229/mega-shiny.png",
          },
        },
      ],
    },
    height: "1,4 m",
    weight: "35,0 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 230,
    generation: 2,
    category: "Pokémon Dragon",
    name: {
      fr: "Hyporoi",
      en: "Kingdra",
      jp: "キングドラ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/230/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/230/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Dragon",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/dragon.png",
      },
    ],
    talents: [
      {
        name: "Glissade",
        tc: false,
      },
      {
        name: "Sniper",
        tc: false,
      },
      {
        name: "Moiteur",
        tc: true,
      },
    ],
    stats: {
      hp: 75,
      atk: 95,
      def: 95,
      spe_atk: 95,
      spe_def: 95,
      vit: 85,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 0.25,
      },
      {
        name: "Eau",
        multiplier: 0.25,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 2,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 116,
          name: "Hypotrempe",
          condition: "Niveau 32",
        },
        {
          pokedex_id: 117,
          name: "Hypocéan",
          condition: "Echange avec Écaille Draco",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,8 m",
    weight: "152,0 kg",
    egg_groups: ["Aquatique 1", "Draconique"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 231,
    generation: 2,
    category: "Pokémon Long-Nez",
    name: {
      fr: "Phanpy",
      en: "Phanpy",
      jp: "ゴマゾウ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/231/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/231/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
    ],
    talents: [
      {
        name: "Ramassage",
        tc: false,
      },
      {
        name: "Voile Sable",
        tc: true,
      },
    ],
    stats: {
      hp: 90,
      atk: 60,
      def: 60,
      spe_atk: 40,
      spe_def: 40,
      vit: 40,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 232,
          name: "Donphan",
          condition: "Niveau 25",
        },
      ],
      mega: null,
    },
    height: "0,5 m",
    weight: "33,5 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 120,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 232,
    generation: 2,
    category: "Pokémon Armure",
    name: {
      fr: "Donphan",
      en: "Donphan",
      jp: "ドンファン ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/232/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/232/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
    ],
    talents: [
      {
        name: "Fermeté",
        tc: false,
      },
      {
        name: "Voile Sable",
        tc: true,
      },
    ],
    stats: {
      hp: 90,
      atk: 120,
      def: 120,
      spe_atk: 60,
      spe_def: 60,
      vit: 50,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 231,
          name: "Phanpy",
          condition: "Niveau 25",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,1 m",
    weight: "120,0 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 60,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 233,
    generation: 2,
    category: "Pokémon Virtuel",
    name: {
      fr: "Porygon2",
      en: "Porygon2",
      jp: "ポリゴン2",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/233/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/233/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Calque",
        tc: false,
      },
      {
        name: "Télécharge",
        tc: false,
      },
      {
        name: "Analyste",
        tc: true,
      },
    ],
    stats: {
      hp: 85,
      atk: 80,
      def: 90,
      spe_atk: 105,
      spe_def: 95,
      vit: 60,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 137,
          name: "Porygon",
          condition: "Echange avec Améliorator/Contact d'un Améliorator (PLA)",
        },
      ],
      next: [
        {
          pokedex_id: 474,
          name: "Porygon-Z",
          condition: "Echange avec CD Douteux/Contact d'un CD Douteux (PLA)",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "32,5 kg",
    egg_groups: ["Minéral"],
    sexe: null,
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 234,
    generation: 2,
    category: "Pokémon Maxi Corne",
    name: {
      fr: "Cerfrousse",
      en: "Stantler",
      jp: "オドシシ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/234/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/234/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Intimidation",
        tc: false,
      },
      {
        name: "Fouille",
        tc: false,
      },
      {
        name: "Herbivore",
        tc: true,
      },
    ],
    stats: {
      hp: 73,
      atk: 95,
      def: 62,
      spe_atk: 85,
      spe_def: 65,
      vit: 85,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 899,
          name: "Cerbyllin",
          condition: "20x capacité Sprint Bouclier sous Style Rapide",
        },
      ],
      mega: null,
    },
    height: "1,4 m",
    weight: "71,2 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 235,
    generation: 2,
    category: "Pokémon Peintre",
    name: {
      fr: "Queulorior",
      en: "Smeargle",
      jp: "ドーブル",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/235/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/235/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Technicien",
        tc: false,
      },
      {
        name: "Tempo Perso",
        tc: false,
      },
      {
        name: "Lunatique",
        tc: true,
      },
    ],
    stats: {
      hp: 55,
      atk: 20,
      def: 35,
      spe_atk: 20,
      spe_def: 45,
      vit: 75,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "1,2 m",
    weight: "58,0 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 236,
    generation: 2,
    category: "Pokémon Bagarreur",
    name: {
      fr: "Debugant",
      en: "Tyrogue",
      jp: "バルキー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/236/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/236/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Combat",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/combat.png",
      },
    ],
    talents: [
      {
        name: "Cran",
        tc: false,
      },
      {
        name: "Impassible",
        tc: false,
      },
      {
        name: "Esprit Vital",
        tc: true,
      },
    ],
    stats: {
      hp: 35,
      atk: 35,
      def: 35,
      spe_atk: 35,
      spe_def: 35,
      vit: 35,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 106,
          name: "Kicklee",
          condition: "Niveau 20 + Attaque \u003E Défense",
        },
        {
          pokedex_id: 107,
          name: "Tygnon",
          condition: "Niveau 20 + Attaque \u003C Défense",
        },
        {
          pokedex_id: 237,
          name: "Kapoera",
          condition: "Niveau 20 + Attaque = Défense",
        },
      ],
      mega: null,
    },
    height: "0,7 m",
    weight: "21,0 kg",
    egg_groups: null,
    sexe: {
      male: 100,
      female: 0,
    },
    catch_rate: 75,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 237,
    generation: 2,
    category: "Pokémon Poirier",
    name: {
      fr: "Kapoera",
      en: "Hitmontop",
      jp: "カポエラー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/237/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/237/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Combat",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/combat.png",
      },
    ],
    talents: [
      {
        name: "Intimidation",
        tc: false,
      },
      {
        name: "Technicien",
        tc: false,
      },
      {
        name: "Impassible",
        tc: true,
      },
    ],
    stats: {
      hp: 50,
      atk: 95,
      def: 95,
      spe_atk: 35,
      spe_def: 110,
      vit: 70,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 236,
          name: "Debugant",
          condition: "Niveau 20 + Attaque = Défense",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,4 m",
    weight: "48,0 kg",
    egg_groups: ["Humanoïde"],
    sexe: {
      male: 100,
      female: 0,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 238,
    generation: 2,
    category: "Pokémon Bisou",
    name: {
      fr: "Lippouti",
      en: "Smoochum",
      jp: "ムチュール",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/238/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/238/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Glace",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/glace.png",
      },
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Benêt",
        tc: false,
      },
      {
        name: "Prédiction",
        tc: false,
      },
      {
        name: "Hydratation",
        tc: true,
      },
    ],
    stats: {
      hp: 45,
      atk: 30,
      def: 15,
      spe_atk: 85,
      spe_def: 65,
      vit: 65,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 124,
          name: "Lippoutou",
          condition: "Niveau 30",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "6,0 kg",
    egg_groups: null,
    sexe: {
      male: 0,
      female: 100,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 239,
    generation: 2,
    category: "Pokémon Électrique",
    name: {
      fr: "Élekid",
      en: "Elekid",
      jp: "エレキッド",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/239/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/239/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Électrik",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/electrik.png",
      },
    ],
    talents: [
      {
        name: "Statik",
        tc: false,
      },
      {
        name: "Esprit Vital",
        tc: true,
      },
    ],
    stats: {
      hp: 45,
      atk: 63,
      def: 37,
      spe_atk: 65,
      spe_def: 55,
      vit: 95,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 125,
          name: "Élektek",
          condition: "Niveau 30",
        },
        {
          pokedex_id: 466,
          name: "Élekable",
          condition: "Echange avec Électriseur/Contact d'un Électriseur",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "23,5 kg",
    egg_groups: null,
    sexe: {
      male: 75,
      female: 25,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 240,
    generation: 2,
    category: "Pokémon Charbon",
    name: {
      fr: "Magby",
      en: "Magby",
      jp: "ブビィ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/240/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/240/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Feu",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png",
      },
    ],
    talents: [
      {
        name: "Corps Ardent",
        tc: false,
      },
      {
        name: "Esprit Vital",
        tc: true,
      },
    ],
    stats: {
      hp: 45,
      atk: 75,
      def: 37,
      spe_atk: 70,
      spe_def: 55,
      vit: 83,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 126,
          name: "Magmar",
          condition: "Niveau 30",
        },
        {
          pokedex_id: 467,
          name: "Maganon",
          condition: "Echange avec Magmariseur/Contact d'un Magmariseur",
        },
      ],
      mega: null,
    },
    height: "0,7 m",
    weight: "21,4 kg",
    egg_groups: null,
    sexe: {
      male: 75,
      female: 25,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 241,
    generation: 2,
    category: "Pokémon Vachalait",
    name: {
      fr: "Écrémeuh",
      en: "Miltank",
      jp: "ミルタンク",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/241/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/241/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Isograisse",
        tc: false,
      },
      {
        name: "Querelleur",
        tc: false,
      },
      {
        name: "Herbivore",
        tc: true,
      },
    ],
    stats: {
      hp: 95,
      atk: 80,
      def: 105,
      spe_atk: 40,
      spe_def: 70,
      vit: 100,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0,
      },
      {
        name: "Feu",
        multiplier: 0,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "1,2 m",
    weight: "75,5 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 0,
      female: 100,
    },
    catch_rate: 45,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 242,
    generation: 2,
    category: "Pokémon Bonheur",
    name: {
      fr: "Leuphorie",
      en: "Blissey",
      jp: "ハピナス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/242/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/242/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Médic Nature",
        tc: false,
      },
      {
        name: "Sérénité",
        tc: false,
      },
      {
        name: "Cœur Soin",
        tc: true,
      },
    ],
    stats: {
      hp: 255,
      atk: 10,
      def: 10,
      spe_atk: 75,
      spe_def: 135,
      vit: 55,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 440,
          name: "Ptiravi",
          condition: "+1 Niveau la journée avec Pierre Ovale / Contact avec Pierre Ovale le jour (PLA)",
        },
        {
          pokedex_id: 113,
          name: "Leveinard",
          condition: "+1 Niveau + Bonheur",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,5 m",
    weight: "46,8 kg",
    egg_groups: ["Féerique"],
    sexe: {
      male: 0,
      female: 100,
    },
    catch_rate: 30,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 243,
    generation: 2,
    category: "Pokémon Foudre",
    name: {
      fr: "Raikou",
      en: "Raikou",
      jp: "ライコウ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/243/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/243/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Électrik",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/electrik.png",
      },
    ],
    talents: [
      {
        name: "Pression",
        tc: false,
      },
      {
        name: "Attention",
        tc: true,
      },
    ],
    stats: {
      hp: 90,
      atk: 85,
      def: 75,
      spe_atk: 115,
      spe_def: 100,
      vit: 115,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "1,9 m",
    weight: "178,0 kg",
    egg_groups: null,
    sexe: null,
    catch_rate: 3,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 244,
    generation: 2,
    category: "Pokémon Volcan",
    name: {
      fr: "Entei",
      en: "Entei",
      jp: "エンテイ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/244/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/244/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Feu",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png",
      },
    ],
    talents: [
      {
        name: "Pression",
        tc: false,
      },
      {
        name: "Attention",
        tc: true,
      },
    ],
    stats: {
      hp: 115,
      atk: 115,
      def: 85,
      spe_atk: 90,
      spe_def: 75,
      vit: 100,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: null,
    height: "2,1 m",
    weight: "198,0 kg",
    egg_groups: null,
    sexe: null,
    catch_rate: 3,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 245,
    generation: 2,
    category: "Pokémon Aurore",
    name: {
      fr: "Suicune",
      en: "Suicune",
      jp: "スイクン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/245/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/245/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Pression",
        tc: false,
      },
      {
        name: "Attention",
        tc: true,
      },
    ],
    stats: {
      hp: 100,
      atk: 75,
      def: 115,
      spe_atk: 90,
      spe_def: 115,
      vit: 85,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "2,0 m",
    weight: "187,0 kg",
    egg_groups: null,
    sexe: null,
    catch_rate: 3,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 246,
    generation: 2,
    category: "Pokémon Peaupierre",
    name: {
      fr: "Embrylex",
      en: "Larvitar",
      jp: "ヨーギラス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/246/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/246/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Roche",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/roche.png",
      },
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
    ],
    talents: [
      {
        name: "Cran",
        tc: false,
      },
      {
        name: "Voile Sable",
        tc: true,
      },
    ],
    stats: {
      hp: 50,
      atk: 64,
      def: 50,
      spe_atk: 45,
      spe_def: 50,
      vit: 41,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 4,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 4,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 0.25,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 247,
          name: "Ymphect",
          condition: "Niveau 30",
        },
        {
          pokedex_id: 248,
          name: "Tyranocif",
          condition: "Niveau 55",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "72,0 kg",
    egg_groups: ["Monstrueux"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 247,
    generation: 2,
    category: "Pokémon Carapadure",
    name: {
      fr: "Ymphect",
      en: "Pupitar",
      jp: "サナギラス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/247/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/247/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Roche",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/roche.png",
      },
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
    ],
    talents: [
      {
        name: "Mue",
        tc: false,
      },
    ],
    stats: {
      hp: 70,
      atk: 84,
      def: 70,
      spe_atk: 65,
      spe_def: 70,
      vit: 51,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 4,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 4,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 0.25,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 246,
          name: "Embrylex",
          condition: "Niveau 30",
        },
      ],
      next: [
        {
          pokedex_id: 248,
          name: "Tyranocif",
          condition: "Niveau 55",
        },
      ],
      mega: null,
    },
    height: "1,2 m",
    weight: "152,0 kg",
    egg_groups: ["Monstrueux"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 248,
    generation: 2,
    category: "Pokémon Armure",
    name: {
      fr: "Tyranocif",
      en: "Tyranitar",
      jp: "バンギラス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/248/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/248/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Roche",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/roche.png",
      },
      {
        name: "Ténèbres",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/tenebres.png",
      },
    ],
    talents: [
      {
        name: "Sable Volant",
        tc: false,
      },
      {
        name: "Tension",
        tc: true,
      },
    ],
    stats: {
      hp: 100,
      atk: 134,
      def: 110,
      spe_atk: 95,
      spe_def: 100,
      vit: 61,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 4,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 0,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0.5,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 246,
          name: "Embrylex",
          condition: "Niveau 30",
        },
        {
          pokedex_id: 247,
          name: "Ymphect",
          condition: "Niveau 55",
        },
      ],
      next: null,
      mega: [
        {
          orbe: "Tyranocivite",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/248/mega-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/248/mega-shiny.png",
          },
        },
      ],
    },
    height: "2,0 m",
    weight: "202,0 kg",
    egg_groups: ["Monstrueux"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 249,
    generation: 2,
    category: "Pokémon Plongeon",
    name: {
      fr: "Lugia",
      en: "Lugia",
      jp: "ルギア",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/249/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/249/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Pression",
        tc: false,
      },
      {
        name: "Multiécaille",
        tc: true,
      },
    ],
    stats: {
      hp: 106,
      atk: 90,
      def: 130,
      spe_atk: 90,
      spe_def: 154,
      vit: 110,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.25,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 0,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "5,2 m",
    weight: "216,0 kg",
    egg_groups: null,
    sexe: null,
    catch_rate: 3,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 250,
    generation: 2,
    category: "Pokémon Arc-en-ciel",
    name: {
      fr: "Ho-Oh",
      en: "Ho-Oh",
      jp: "ホウオウ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/250/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/250/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Feu",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Pression",
        tc: false,
      },
      {
        name: "Régé-Force",
        tc: true,
      },
    ],
    stats: {
      hp: 106,
      atk: 130,
      def: 90,
      spe_atk: 110,
      spe_def: 154,
      vit: 90,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.25,
      },
      {
        name: "Roche",
        multiplier: 4,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: null,
    height: "3,8 m",
    weight: "199,0 kg",
    egg_groups: null,
    sexe: null,
    catch_rate: 3,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 251,
    generation: 2,
    category: "Pokémon Temporel",
    name: {
      fr: "Celebi",
      en: "Celebi",
      jp: "セレビィ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/251/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/251/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
    ],
    talents: [
      {
        name: "Médic Nature",
        tc: false,
      },
    ],
    stats: {
      hp: 100,
      atk: 100,
      def: 100,
      spe_atk: 100,
      spe_def: 100,
      vit: 100,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 4,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "0,6 m",
    weight: "5,0 kg",
    egg_groups: null,
    sexe: null,
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 252,
    generation: 3,
    category: "Pokémon Bois Gecko",
    name: {
      fr: "Arcko",
      en: "Treecko",
      jp: "キモリ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/252/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/252/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
    ],
    talents: [
      {
        name: "Engrais",
        tc: false,
      },
      {
        name: "Délestage",
        tc: true,
      },
    ],
    stats: {
      hp: 40,
      atk: 45,
      def: 35,
      spe_atk: 65,
      spe_def: 55,
      vit: 70,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 253,
          name: "Massko",
          condition: "Niveau 16",
        },
        {
          pokedex_id: 254,
          name: "Jungko",
          condition: "Niveau 36",
        },
      ],
      mega: null,
    },
    height: "0,5 m",
    weight: "5,0 kg",
    egg_groups: ["Monstrueux", "Draconique"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 253,
    generation: 3,
    category: "Pokémon Bois Gecko",
    name: {
      fr: "Massko",
      en: "Grovyle",
      jp: "ジュプトル",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/253/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/253/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
    ],
    talents: [
      {
        name: "Engrais",
        tc: false,
      },
      {
        name: "Délestage",
        tc: true,
      },
    ],
    stats: {
      hp: 50,
      atk: 65,
      def: 45,
      spe_atk: 85,
      spe_def: 65,
      vit: 95,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 252,
          name: "Arcko",
          condition: "Niveau 16",
        },
      ],
      next: [
        {
          pokedex_id: 254,
          name: "Jungko",
          condition: "Niveau 36",
        },
      ],
      mega: null,
    },
    height: "0,9 m",
    weight: "21,6 kg",
    egg_groups: ["Monstrueux", "Draconique"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 254,
    generation: 3,
    category: "Pokémon Forêt",
    name: {
      fr: "Jungko",
      en: "Sceptile",
      jp: "ジュカイン ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/254/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/254/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
    ],
    talents: [
      {
        name: "Engrais",
        tc: false,
      },
      {
        name: "Délestage",
        tc: true,
      },
    ],
    stats: {
      hp: 70,
      atk: 85,
      def: 65,
      spe_atk: 105,
      spe_def: 85,
      vit: 120,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 252,
          name: "Arcko",
          condition: "Niveau 16",
        },
        {
          pokedex_id: 253,
          name: "Massko",
          condition: "Niveau 36",
        },
      ],
      next: null,
      mega: [
        {
          orbe: "Jungkite",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/254/mega-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/254/mega-shiny.png",
          },
        },
      ],
    },
    height: "1,7 m",
    weight: "52,2 kg",
    egg_groups: ["Monstrueux", "Draconique"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 255,
    generation: 3,
    category: "Pokémon Poussin",
    name: {
      fr: "Poussifeu",
      en: "Torchic",
      jp: "アチャモ ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/255/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/255/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Feu",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png",
      },
    ],
    talents: [
      {
        name: "Brasier",
        tc: false,
      },
      {
        name: "Turbo",
        tc: true,
      },
    ],
    stats: {
      hp: 45,
      atk: 60,
      def: 40,
      spe_atk: 70,
      spe_def: 50,
      vit: 45,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 256,
          name: "Galifeu",
          condition: "Niveau 16",
        },
        {
          pokedex_id: 257,
          name: "Braségali",
          condition: "Niveau 36",
        },
      ],
      mega: null,
    },
    height: "0,4 m",
    weight: "2,5 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 256,
    generation: 3,
    category: "Pokémon Poulet",
    name: {
      fr: "Galifeu",
      en: "Combusken",
      jp: "ワカシャモ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/256/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/256/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Feu",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png",
      },
      {
        name: "Combat",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/combat.png",
      },
    ],
    talents: [
      {
        name: "Brasier",
        tc: false,
      },
      {
        name: "Turbo",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 85,
      def: 60,
      spe_atk: 85,
      spe_def: 60,
      vit: 55,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.25,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 255,
          name: "Poussifeu",
          condition: "Niveau 16",
        },
      ],
      next: [
        {
          pokedex_id: 257,
          name: "Braségali",
          condition: "Niveau 36",
        },
      ],
      mega: null,
    },
    height: "0,9 m",
    weight: "19,5 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 257,
    generation: 3,
    category: "Pokémon Ardent",
    name: {
      fr: "Braségali",
      en: "Blaziken",
      jp: "バシャーモ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/257/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/257/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Feu",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png",
      },
      {
        name: "Combat",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/combat.png",
      },
    ],
    talents: [
      {
        name: "Brasier",
        tc: false,
      },
      {
        name: "Turbo",
        tc: true,
      },
    ],
    stats: {
      hp: 80,
      atk: 120,
      def: 70,
      spe_atk: 110,
      spe_def: 70,
      vit: 80,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.25,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 255,
          name: "Poussifeu",
          condition: "Niveau 16",
        },
        {
          pokedex_id: 256,
          name: "Galifeu",
          condition: "Niveau 36",
        },
      ],
      next: null,
      mega: [
        {
          orbe: "Braségalite",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/257/mega-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/257/mega-shiny.png",
          },
        },
      ],
    },
    height: "1,9 m",
    weight: "52,0 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 258,
    generation: 3,
    category: "Pokémon Poissonboue",
    name: {
      fr: "Gobou",
      en: "Mudkip",
      jp: "ミズゴロウ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/258/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/258/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Torrent",
        tc: false,
      },
      {
        name: "Moiteur",
        tc: true,
      },
    ],
    stats: {
      hp: 50,
      atk: 70,
      def: 50,
      spe_atk: 50,
      spe_def: 50,
      vit: 40,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 259,
          name: "Flobio",
          condition: "Niveau 16",
        },
        {
          pokedex_id: 260,
          name: "Laggron",
          condition: "Niveau 36",
        },
      ],
      mega: null,
    },
    height: "0,4 m",
    weight: "7,6 kg",
    egg_groups: ["Monstrueux", "Aquatique 1"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 259,
    generation: 3,
    category: "Pokémon Poissonboue",
    name: {
      fr: "Flobio",
      en: "Marshtomp",
      jp: "ヌマクロー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/259/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/259/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
    ],
    talents: [
      {
        name: "Torrent",
        tc: false,
      },
      {
        name: "Moiteur",
        tc: true,
      },
    ],
    stats: {
      hp: 70,
      atk: 85,
      def: 70,
      spe_atk: 60,
      spe_def: 70,
      vit: 50,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 4,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 258,
          name: "Gobou",
          condition: "Niveau 16",
        },
      ],
      next: [
        {
          pokedex_id: 260,
          name: "Laggron",
          condition: "Niveau 36",
        },
      ],
      mega: null,
    },
    height: "0,7 m",
    weight: "28,0 kg",
    egg_groups: ["Monstrueux", "Aquatique 1"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 260,
    generation: 3,
    category: "Pokémon Poissonboue",
    name: {
      fr: "Laggron",
      en: "Swampert",
      jp: "ラグラージ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/260/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/260/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
    ],
    talents: [
      {
        name: "Torrent",
        tc: false,
      },
      {
        name: "Moiteur",
        tc: true,
      },
    ],
    stats: {
      hp: 100,
      atk: 110,
      def: 90,
      spe_atk: 85,
      spe_def: 90,
      vit: 60,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 4,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 258,
          name: "Gobou",
          condition: "Niveau 16",
        },
        {
          pokedex_id: 259,
          name: "Flobio",
          condition: "Niveau 36",
        },
      ],
      next: null,
      mega: [
        {
          orbe: "Laggronite",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/260/mega-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/260/mega-shiny.png",
          },
        },
      ],
    },
    height: "1,6 m",
    weight: "81,9 kg",
    egg_groups: ["Monstrueux", "Aquatique 1"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 261,
    generation: 3,
    category: "Pokémon Morsure",
    name: {
      fr: "Medhyèna",
      en: "Poochyena",
      jp: "ポチエナ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/261/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/261/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Ténèbres",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/tenebres.png",
      },
    ],
    talents: [
      {
        name: "Fuite",
        tc: false,
      },
      {
        name: "Pied Véloce",
        tc: false,
      },
      {
        name: "Phobique",
        tc: true,
      },
    ],
    stats: {
      hp: 35,
      atk: 55,
      def: 35,
      spe_atk: 30,
      spe_def: 30,
      vit: 35,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0.5,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 262,
          name: "Grahyèna",
          condition: "Niveau 18",
        },
      ],
      mega: null,
    },
    height: "0,5 m",
    weight: "13,6 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 262,
    generation: 3,
    category: "Pokémon Morsure",
    name: {
      fr: "Grahyèna",
      en: "Mightyena",
      jp: "グラエナ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/262/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/262/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Ténèbres",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/tenebres.png",
      },
    ],
    talents: [
      {
        name: "Intimidation",
        tc: false,
      },
      {
        name: "Pied Véloce",
        tc: false,
      },
      {
        name: "Impudence",
        tc: true,
      },
    ],
    stats: {
      hp: 70,
      atk: 90,
      def: 70,
      spe_atk: 60,
      spe_def: 60,
      vit: 70,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0.5,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 261,
          name: "Medhyèna",
          condition: "Niveau 18",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,0 m",
    weight: "37,0 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 127,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 263,
    generation: 3,
    category: "Pokémon Petit Raton",
    name: {
      fr: "Zigzaton",
      en: "Zigzagoon",
      jp: "ジグザグマ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/263/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/263/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Ramassage",
        tc: false,
      },
      {
        name: "Gloutonnerie",
        tc: false,
      },
      {
        name: "Pied Véloce",
        tc: true,
      },
    ],
    stats: {
      hp: 38,
      atk: 30,
      def: 41,
      spe_atk: 30,
      spe_def: 41,
      vit: 60,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 264,
          name: "Linéon",
          condition: "Niveau 20",
        },
      ],
      mega: null,
    },
    height: "0,4 m",
    weight: "17,5 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 1000000,
    formes: [
      {
        region: "galar",
        name: {
          fr: "Zigzaton de Galar",
          en: "Galarian Zigzagoon",
          jp: "ガラルのジグザグマ",
        },
      },
    ],
  },
  {
    pokedex_id: 264,
    generation: 3,
    category: "Pokémon Fonceur",
    name: {
      fr: "Linéon",
      en: "Linoone",
      jp: "マッスグマ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/264/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/264/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Ramassage",
        tc: false,
      },
      {
        name: "Gloutonnerie",
        tc: false,
      },
      {
        name: "Pied Véloce",
        tc: true,
      },
    ],
    stats: {
      hp: 78,
      atk: 70,
      def: 61,
      spe_atk: 50,
      spe_def: 61,
      vit: 100,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 263,
          name: "Zigzaton",
          condition: "Niveau 20",
        },
      ],
      next: null,
      mega: null,
    },
    height: "0,5 m",
    weight: "32,5 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 90,
    level_100: 1000000,
    formes: [
      {
        region: "galar",
        name: {
          fr: "Linéon de Galar",
          en: "Galarian Linoone",
          jp: "ガラルのマッスグマ",
        },
      },
    ],
  },
  {
    pokedex_id: 265,
    generation: 3,
    category: "Pokémon Ver",
    name: {
      fr: "Chenipotte",
      en: "Wurmple",
      jp: "ケムッソ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/265/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/265/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
    ],
    talents: [
      {
        name: "Écran Poudre",
        tc: false,
      },
      {
        name: "Fuite",
        tc: true,
      },
    ],
    stats: {
      hp: 45,
      atk: 45,
      def: 35,
      spe_atk: 20,
      spe_def: 30,
      vit: 20,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 266,
          name: "Armulys",
          condition: "Niveau 7",
        },
        {
          pokedex_id: 267,
          name: "Charmillon",
          condition: "Niveau 10",
        },
        {
          pokedex_id: 268,
          name: "Blindalys",
          condition: "Niveau 7",
        },
        {
          pokedex_id: 269,
          name: "Papinox",
          condition: "Niveau 10",
        },
      ],
      mega: null,
    },
    height: "0,3 m",
    weight: "3,6 kg",
    egg_groups: ["Insectoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 266,
    generation: 3,
    category: "Pokémon Cocon",
    name: {
      fr: "Armulys",
      en: "Silcoon",
      jp: "カラサリス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/266/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/266/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
    ],
    talents: [
      {
        name: "Mue",
        tc: false,
      },
    ],
    stats: {
      hp: 50,
      atk: 35,
      def: 55,
      spe_atk: 25,
      spe_def: 25,
      vit: 15,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 265,
          name: "Chenipotte",
          condition: "Niveau 7",
        },
      ],
      next: [
        {
          pokedex_id: 267,
          name: "Charmillon",
          condition: "Niveau 10",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "10,0 kg",
    egg_groups: ["Insectoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 120,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 267,
    generation: 3,
    category: "Pokémon Papillon",
    name: {
      fr: "Charmillon",
      en: "Beautifly",
      jp: "アゲハント",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/267/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/267/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Essaim",
        tc: false,
      },
      {
        name: "Rivalité",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 70,
      def: 50,
      spe_atk: 100,
      spe_def: 50,
      vit: 65,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.25,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 4,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 265,
          name: "Chenipotte",
          condition: "Niveau 7",
        },
        {
          pokedex_id: 266,
          name: "Armulys",
          condition: "Niveau 10",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,0 m",
    weight: "28,4 kg",
    egg_groups: ["Insectoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 268,
    generation: 3,
    category: "Pokémon Cocon",
    name: {
      fr: "Blindalys",
      en: "Cascoon",
      jp: "マユルド",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/268/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/268/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
    ],
    talents: [
      {
        name: "Mue",
        tc: false,
      },
    ],
    stats: {
      hp: 50,
      atk: 35,
      def: 55,
      spe_atk: 25,
      spe_def: 25,
      vit: 15,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 265,
          name: "Chenipotte",
          condition: "Niveau 7",
        },
      ],
      next: [
        {
          pokedex_id: 269,
          name: "Papinox",
          condition: "Niveau 10",
        },
      ],
      mega: null,
    },
    height: "0,7 m",
    weight: "11,5 kg",
    egg_groups: ["Insectoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 120,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 269,
    generation: 3,
    category: "Pokémon Papipoison",
    name: {
      fr: "Papinox",
      en: "Dustox",
      jp: "ドクケイル",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/269/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/269/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Écran Poudre",
        tc: false,
      },
      {
        name: "Œil Composé",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 50,
      def: 70,
      spe_atk: 50,
      spe_def: 90,
      vit: 65,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.25,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 265,
          name: "Chenipotte",
          condition: "Niveau 7",
        },
        {
          pokedex_id: 268,
          name: "Blindalys",
          condition: "Niveau 10",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,2 m",
    weight: "31,6 kg",
    egg_groups: ["Insectoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 270,
    generation: 3,
    category: "Pokémon Aquaplante",
    name: {
      fr: "Nénupiot",
      en: "Lotad",
      jp: "ハスボー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/270/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/270/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
    ],
    talents: [
      {
        name: "Glissade",
        tc: false,
      },
      {
        name: "Cuvette",
        tc: false,
      },
      {
        name: "Tempo Perso",
        tc: true,
      },
    ],
    stats: {
      hp: 40,
      atk: 30,
      def: 30,
      spe_atk: 40,
      spe_def: 50,
      vit: 30,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 0.25,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 271,
          name: "Lombre",
          condition: "Niveau 14",
        },
        {
          pokedex_id: 272,
          name: "Ludicolo",
          condition: "Pierre Eau",
        },
      ],
      mega: null,
    },
    height: "0,5 m",
    weight: "2,6 kg",
    egg_groups: ["Aquatique 1", "Végétal"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 271,
    generation: 3,
    category: "Pokémon Jovial",
    name: {
      fr: "Lombre",
      en: "Lombre",
      jp: "ハスブレロ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/271/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/271/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
    ],
    talents: [
      {
        name: "Glissade",
        tc: false,
      },
      {
        name: "Cuvette",
        tc: false,
      },
      {
        name: "Tempo Perso",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 50,
      def: 50,
      spe_atk: 60,
      spe_def: 70,
      vit: 50,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 0.25,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 270,
          name: "Nénupiot",
          condition: "Niveau 14",
        },
      ],
      next: [
        {
          pokedex_id: 272,
          name: "Ludicolo",
          condition: "Pierre Eau",
        },
      ],
      mega: null,
    },
    height: "1,2 m",
    weight: "32,5 kg",
    egg_groups: ["Aquatique 1", "Végétal"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 120,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 272,
    generation: 3,
    category: "Pokémon Insouciant",
    name: {
      fr: "Ludicolo",
      en: "Ludicolo",
      jp: "ルンパッパ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/272/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/272/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
    ],
    talents: [
      {
        name: "Glissade",
        tc: false,
      },
      {
        name: "Cuvette",
        tc: false,
      },
      {
        name: "Tempo Perso",
        tc: true,
      },
    ],
    stats: {
      hp: 80,
      atk: 70,
      def: 70,
      spe_atk: 90,
      spe_def: 100,
      vit: 70,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 0.25,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 270,
          name: "Nénupiot",
          condition: "Niveau 14",
        },
        {
          pokedex_id: 271,
          name: "Lombre",
          condition: "Pierre Eau",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,5 m",
    weight: "55,0 kg",
    egg_groups: ["Aquatique 1", "Végétal"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 273,
    generation: 3,
    category: "Pokémon Gland",
    name: {
      fr: "Grainipiot",
      en: "Seedot",
      jp: "タネボー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/273/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/273/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
    ],
    talents: [
      {
        name: "Chlorophylle",
        tc: false,
      },
      {
        name: "Matinal",
        tc: false,
      },
      {
        name: "Pickpocket",
        tc: true,
      },
    ],
    stats: {
      hp: 40,
      atk: 40,
      def: 50,
      spe_atk: 30,
      spe_def: 30,
      vit: 30,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 274,
          name: "Pifeuil",
          condition: "Niveau 14",
        },
        {
          pokedex_id: 275,
          name: "Tengalice",
          condition: "Pierre Plante",
        },
      ],
      mega: null,
    },
    height: "0,5 m",
    weight: "4,0 kg",
    egg_groups: ["Terrestre", "Végétal"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 274,
    generation: 3,
    category: "Pokémon Malin",
    name: {
      fr: "Pifeuil",
      en: "Nuzleaf",
      jp: "コノハナ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/274/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/274/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
      {
        name: "Ténèbres",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/tenebres.png",
      },
    ],
    talents: [
      {
        name: "Chlorophylle",
        tc: false,
      },
      {
        name: "Matinal",
        tc: false,
      },
      {
        name: "Pickpocket",
        tc: true,
      },
    ],
    stats: {
      hp: 70,
      atk: 70,
      def: 40,
      spe_atk: 60,
      spe_def: 40,
      vit: 60,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 0,
      },
      {
        name: "Insecte",
        multiplier: 4,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0.5,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 273,
          name: "Grainipiot",
          condition: "Niveau 14",
        },
      ],
      next: [
        {
          pokedex_id: 275,
          name: "Tengalice",
          condition: "Pierre Plante",
        },
      ],
      mega: null,
    },
    height: "1,0 m",
    weight: "28,0 kg",
    egg_groups: ["Terrestre", "Végétal"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 120,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 275,
    generation: 3,
    category: "Pokémon Malveillant",
    name: {
      fr: "Tengalice",
      en: "Shiftry",
      jp: "ダーテング",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/275/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/275/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
      {
        name: "Ténèbres",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/tenebres.png",
      },
    ],
    talents: [
      {
        name: "Chlorophylle",
        tc: false,
      },
      {
        name: "Matinal",
        tc: false,
      },
      {
        name: "Pickpocket",
        tc: true,
      },
    ],
    stats: {
      hp: 90,
      atk: 100,
      def: 60,
      spe_atk: 90,
      spe_def: 60,
      vit: 80,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 0,
      },
      {
        name: "Insecte",
        multiplier: 4,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0.5,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 273,
          name: "Grainipiot",
          condition: "Niveau 14",
        },
        {
          pokedex_id: 274,
          name: "Pifeuil",
          condition: "Pierre Plante",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,3 m",
    weight: "59,6 kg",
    egg_groups: ["Terrestre", "Végétal"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 276,
    generation: 3,
    category: "Pokémon Minirondel",
    name: {
      fr: "Nirondelle",
      en: "Taillow",
      jp: "スバメ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/276/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/276/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Cran",
        tc: false,
      },
      {
        name: "Querelleur",
        tc: true,
      },
    ],
    stats: {
      hp: 40,
      atk: 55,
      def: 30,
      spe_atk: 30,
      spe_def: 30,
      vit: 85,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 277,
          name: "Hélédelle",
          condition: "Niveau 22",
        },
      ],
      mega: null,
    },
    height: "0,3 m",
    weight: "2,3 kg",
    egg_groups: ["Aérien"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 200,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 277,
    generation: 3,
    category: "Pokémon Hirondelle",
    name: {
      fr: "Hélédelle",
      en: "Swellow",
      jp: "オオスバメ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/277/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/277/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Cran",
        tc: false,
      },
      {
        name: "Querelleur",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 85,
      def: 60,
      spe_atk: 75,
      spe_def: 50,
      vit: 125,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 276,
          name: "Nirondelle",
          condition: "Niveau 22",
        },
      ],
      next: null,
      mega: null,
    },
    height: "0,7 m",
    weight: "19,8 kg",
    egg_groups: ["Aérien"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 278,
    generation: 3,
    category: "Pokémon Mouette",
    name: {
      fr: "Goélise",
      en: "Wingull",
      jp: "キャモメ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/278/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/278/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Regard Vif",
        tc: false,
      },
      {
        name: "Hydratation",
        tc: false,
      },
      {
        name: "Cuvette",
        tc: true,
      },
    ],
    stats: {
      hp: 40,
      atk: 30,
      def: 30,
      spe_atk: 55,
      spe_def: 30,
      vit: 85,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 4,
      },
      {
        name: "Glace",
        multiplier: 0,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 279,
          name: "Bekipan",
          condition: "Niveau 25",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "9,5 kg",
    egg_groups: ["Aquatique 1", "Aérien"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 190,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 279,
    generation: 3,
    category: "Pokémon Oiseaudo",
    name: {
      fr: "Bekipan",
      en: "Pelipper",
      jp: "ペリッパー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/279/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/279/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Regard Vif",
        tc: false,
      },
      {
        name: "Crachin",
        tc: false,
      },
      {
        name: "Cuvette",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 50,
      def: 100,
      spe_atk: 95,
      spe_def: 70,
      vit: 65,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 4,
      },
      {
        name: "Glace",
        multiplier: 0,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 278,
          name: "Goélise",
          condition: "Niveau 25",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,2 m",
    weight: "28,0 kg",
    egg_groups: ["Aquatique 1", "Aérien"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 280,
    generation: 3,
    category: "Pokémon Sentiment",
    name: {
      fr: "Tarsal",
      en: "Ralts",
      jp: "ラルトス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/280/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/280/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
      {
        name: "Fée",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/fee.png",
      },
    ],
    talents: [
      {
        name: "Synchro",
        tc: false,
      },
      {
        name: "Calque",
        tc: false,
      },
      {
        name: "Télépathe",
        tc: true,
      },
    ],
    stats: {
      hp: 28,
      atk: 25,
      def: 25,
      spe_atk: 45,
      spe_def: 35,
      vit: 40,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.25,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 0,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 281,
          name: "Kirlia",
          condition: "Niveau 20",
        },
        {
          pokedex_id: 282,
          name: "Gardevoir",
          condition: "Niveau 30",
        },
        {
          pokedex_id: 475,
          name: "Gallame",
          condition: "Mâle + Pierre Aube",
        },
      ],
      mega: null,
    },
    height: "0,4 m",
    weight: "6,6 kg",
    egg_groups: ["Amorphe", "Humanoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 235,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 281,
    generation: 3,
    category: "Pokémon Émotion",
    name: {
      fr: "Kirlia",
      en: "Kirlia",
      jp: "キルリア",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/281/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/281/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
      {
        name: "Fée",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/fee.png",
      },
    ],
    talents: [
      {
        name: "Synchro",
        tc: false,
      },
      {
        name: "Calque",
        tc: false,
      },
      {
        name: "Télépathe",
        tc: true,
      },
    ],
    stats: {
      hp: 38,
      atk: 35,
      def: 35,
      spe_atk: 65,
      spe_def: 55,
      vit: 50,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.25,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 0,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 280,
          name: "Tarsal",
          condition: "Niveau 20",
        },
      ],
      next: [
        {
          pokedex_id: 282,
          name: "Gardevoir",
          condition: "Niveau 30",
        },
        {
          pokedex_id: 475,
          name: "Gallame",
          condition: "Mâle + Pierre Aube",
        },
      ],
      mega: null,
    },
    height: "0,8 m",
    weight: "20,2 kg",
    egg_groups: ["Amorphe", "Humanoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 120,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 282,
    generation: 3,
    category: "Pokémon Étreinte",
    name: {
      fr: "Gardevoir",
      en: "Gardevoir",
      jp: "サーナイト",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/282/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/282/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
      {
        name: "Fée",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/fee.png",
      },
    ],
    talents: [
      {
        name: "Synchro",
        tc: false,
      },
      {
        name: "Calque",
        tc: false,
      },
      {
        name: "Télépathe",
        tc: true,
      },
    ],
    stats: {
      hp: 68,
      atk: 65,
      def: 65,
      spe_atk: 125,
      spe_def: 115,
      vit: 80,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.25,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 0,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 280,
          name: "Tarsal",
          condition: "Niveau 20",
        },
        {
          pokedex_id: 281,
          name: "Kirlia",
          condition: "Niveau 30",
        },
      ],
      next: null,
      mega: [
        {
          orbe: "Gardevoirite",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/282/mega-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/282/mega-shiny.png",
          },
        },
      ],
    },
    height: "1,6 m",
    weight: "48,4 kg",
    egg_groups: ["Amorphe", "Humanoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 283,
    generation: 3,
    category: "Pokémon Maresurfeur",
    name: {
      fr: "Arakdo",
      en: "Surskit",
      jp: "アメタマ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/283/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/283/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Glissade",
        tc: false,
      },
      {
        name: "Cuvette",
        tc: true,
      },
    ],
    stats: {
      hp: 40,
      atk: 30,
      def: 32,
      spe_atk: 50,
      spe_def: 50,
      vit: 65,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 284,
          name: "Maskadra",
          condition: "Niveau 22",
        },
      ],
      mega: null,
    },
    height: "0,5 m",
    weight: "1,7 kg",
    egg_groups: ["Aquatique 1", "Insectoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 200,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 284,
    generation: 3,
    category: "Pokémon Boule Œil",
    name: {
      fr: "Maskadra",
      en: "Masquerain",
      jp: "アメモース",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/284/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/284/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Intimidation",
        tc: false,
      },
      {
        name: "Tension",
        tc: true,
      },
    ],
    stats: {
      hp: 70,
      atk: 60,
      def: 62,
      spe_atk: 100,
      spe_def: 82,
      vit: 80,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.25,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 4,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 283,
          name: "Arakdo",
          condition: "Niveau 22",
        },
      ],
      next: null,
      mega: null,
    },
    height: "0,8 m",
    weight: "3,6 kg",
    egg_groups: ["Aquatique 1", "Insectoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 75,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 285,
    generation: 3,
    category: "Pokémon Champignon",
    name: {
      fr: "Balignon",
      en: "Shroomish",
      jp: "キノココ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/285/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/285/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
    ],
    talents: [
      {
        name: "Pose Spore",
        tc: false,
      },
      {
        name: "Soin Poison",
        tc: false,
      },
      {
        name: "Pied Véloce",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 40,
      def: 60,
      spe_atk: 40,
      spe_def: 60,
      vit: 35,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 286,
          name: "Chapignon",
          condition: "Niveau 23",
        },
      ],
      mega: null,
    },
    height: "0,4 m",
    weight: "4,5 kg",
    egg_groups: ["Féerique", "Végétal"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 1640000,
    formes: null,
  },
  {
    pokedex_id: 286,
    generation: 3,
    category: "Pokémon Champignon",
    name: {
      fr: "Chapignon",
      en: "Breloom",
      jp: "キノガッサ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/286/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/286/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
      {
        name: "Combat",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/combat.png",
      },
    ],
    talents: [
      {
        name: "Pose Spore",
        tc: false,
      },
      {
        name: "Soin Poison",
        tc: false,
      },
      {
        name: "Technicien",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 130,
      def: 80,
      spe_atk: 60,
      spe_def: 60,
      vit: 70,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 4,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 285,
          name: "Balignon",
          condition: "Niveau 23",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,2 m",
    weight: "39,2 kg",
    egg_groups: ["Féerique", "Végétal"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 90,
    level_100: 1640000,
    formes: null,
  },
  {
    pokedex_id: 287,
    generation: 3,
    category: "Pokémon Flâneur",
    name: {
      fr: "Parecool",
      en: "Slakoth",
      jp: "ナマケロ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/287/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/287/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Absentéisme",
        tc: false,
      },
    ],
    stats: {
      hp: 60,
      atk: 60,
      def: 60,
      spe_atk: 35,
      spe_def: 35,
      vit: 30,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 288,
          name: "Vigoroth",
          condition: "Niveau 18",
        },
        {
          pokedex_id: 289,
          name: "Monaflèmit",
          condition: "Niveau 36",
        },
      ],
      mega: null,
    },
    height: "0,8 m",
    weight: "24,0 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 288,
    generation: 3,
    category: "Pokémon Turbusinge",
    name: {
      fr: "Vigoroth",
      en: "Vigoroth",
      jp: "ヤルキモノ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/288/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/288/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Esprit Vital",
        tc: false,
      },
    ],
    stats: {
      hp: 80,
      atk: 80,
      def: 80,
      spe_atk: 55,
      spe_def: 55,
      vit: 90,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 287,
          name: "Parecool",
          condition: "Niveau 18",
        },
      ],
      next: [
        {
          pokedex_id: 289,
          name: "Monaflèmit",
          condition: "Niveau 36",
        },
      ],
      mega: null,
    },
    height: "1,4 m",
    weight: "46,5 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 120,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 289,
    generation: 3,
    category: "Pokémon Fainéant",
    name: {
      fr: "Monaflèmit",
      en: "Slaking",
      jp: "ケッキング",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/289/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/289/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Absentéisme",
        tc: false,
      },
    ],
    stats: {
      hp: 150,
      atk: 160,
      def: 100,
      spe_atk: 95,
      spe_def: 65,
      vit: 100,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 287,
          name: "Parecool",
          condition: "Niveau 18",
        },
        {
          pokedex_id: 288,
          name: "Vigoroth",
          condition: "Niveau 36",
        },
      ],
      next: null,
      mega: null,
    },
    height: "2,0 m",
    weight: "130,5 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 290,
    generation: 3,
    category: "Pokémon Apprenti",
    name: {
      fr: "Ningale",
      en: "Nincada",
      jp: "ツチニン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/290/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/290/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
    ],
    talents: [
      {
        name: "Œil Composé",
        tc: false,
      },
      {
        name: "Fuite",
        tc: true,
      },
    ],
    stats: {
      hp: 31,
      atk: 45,
      def: 90,
      spe_atk: 30,
      spe_def: 30,
      vit: 40,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 291,
          name: "Ninjask",
          condition: "Niveau 20",
        },
        {
          pokedex_id: 292,
          name: "Munjask",
          condition: "Niveau 20 + Pokeball + un emplacement de libre dans l'équipe",
        },
      ],
      mega: null,
    },
    height: "0,5 m",
    weight: "5,5 kg",
    egg_groups: ["Insectoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 600000,
    formes: null,
  },
  {
    pokedex_id: 291,
    generation: 3,
    category: "Pokémon Ninja",
    name: {
      fr: "Ninjask",
      en: "Ninjask",
      jp: "テッカニン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/291/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/291/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Turbo",
        tc: false,
      },
      {
        name: "Infiltration",
        tc: true,
      },
    ],
    stats: {
      hp: 61,
      atk: 90,
      def: 45,
      spe_atk: 50,
      spe_def: 50,
      vit: 160,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.25,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 4,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 290,
          name: "Ningale",
          condition: "Niveau 20",
        },
      ],
      next: null,
      mega: null,
    },
    height: "0,8 m",
    weight: "12,0 kg",
    egg_groups: ["Insectoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 120,
    level_100: 600000,
    formes: null,
  },
  {
    pokedex_id: 292,
    generation: 3,
    category: "Pokémon Exuvie",
    name: {
      fr: "Munja",
      en: "Shedinja",
      jp: "ヌケニン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/292/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/292/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
      {
        name: "Spectre",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/spectre.png",
      },
    ],
    talents: [
      {
        name: "Garde Mystik",
        tc: false,
      },
    ],
    stats: {
      hp: 1,
      atk: 90,
      def: 45,
      spe_atk: 30,
      spe_def: 30,
      vit: 40,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 0,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 290,
          name: "Ningale",
          condition: "Niveau 20 + Pokeball + un emplacement de libre dans l'équipe",
        },
      ],
      next: null,
      mega: null,
    },
    height: "0,8 m",
    weight: "1,2 kg",
    egg_groups: ["Minéral"],
    sexe: null,
    catch_rate: 45,
    level_100: 600000,
    formes: null,
  },
  {
    pokedex_id: 293,
    generation: 3,
    category: "Pokémon Chuchoteur",
    name: {
      fr: "Chuchmur",
      en: "Whismur",
      jp: "ゴニョニョ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/293/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/293/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Anti-Bruit",
        tc: false,
      },
      {
        name: "Phobique",
        tc: true,
      },
    ],
    stats: {
      hp: 64,
      atk: 51,
      def: 23,
      spe_atk: 51,
      spe_def: 23,
      vit: 28,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 294,
          name: "Ramboum",
          condition: "Niveau 20",
        },
        {
          pokedex_id: 295,
          name: "Brouhabam",
          condition: "Niveau 40",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "16,3 kg",
    egg_groups: ["Monstrueux", "Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 190,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 294,
    generation: 3,
    category: "Pokémon Grosse Voix",
    name: {
      fr: "Ramboum",
      en: "Loudred",
      jp: "ドゴーム",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/294/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/294/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Anti-Bruit",
        tc: false,
      },
      {
        name: "Querelleur",
        tc: true,
      },
    ],
    stats: {
      hp: 84,
      atk: 71,
      def: 43,
      spe_atk: 71,
      spe_def: 43,
      vit: 48,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 293,
          name: "Chuchmur",
          condition: "Niveau 20",
        },
      ],
      next: [
        {
          pokedex_id: 295,
          name: "Brouhabam",
          condition: "Niveau 40",
        },
      ],
      mega: null,
    },
    height: "1,0 m",
    weight: "40,5 kg",
    egg_groups: ["Monstrueux", "Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 120,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 295,
    generation: 3,
    category: "Pokémon Bruit Sourd",
    name: {
      fr: "Brouhabam",
      en: "Exploud",
      jp: "バクオング",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/295/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/295/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Anti-Bruit",
        tc: false,
      },
      {
        name: "Querelleur",
        tc: true,
      },
    ],
    stats: {
      hp: 104,
      atk: 91,
      def: 63,
      spe_atk: 91,
      spe_def: 73,
      vit: 68,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 293,
          name: "Chuchmur",
          condition: "Niveau 20",
        },
        {
          pokedex_id: 294,
          name: "Ramboum",
          condition: "Niveau 40",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,5 m",
    weight: "84,0 kg",
    egg_groups: ["Monstrueux", "Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 296,
    generation: 3,
    category: "Pokémon Tenace",
    name: {
      fr: "Makuhita",
      en: "Makuhita",
      jp: "マクノシタ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/296/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/296/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Combat",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/combat.png",
      },
    ],
    talents: [
      {
        name: "Isograisse",
        tc: false,
      },
      {
        name: "Cran",
        tc: false,
      },
      {
        name: "Sans Limite",
        tc: true,
      },
    ],
    stats: {
      hp: 72,
      atk: 60,
      def: 30,
      spe_atk: 20,
      spe_def: 30,
      vit: 25,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 0,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 297,
          name: "Hariyama",
          condition: "Niveau 24",
        },
      ],
      mega: null,
    },
    height: "1,0 m",
    weight: "86,4 kg",
    egg_groups: ["Humanoïde"],
    sexe: {
      male: 75,
      female: 25,
    },
    catch_rate: 180,
    level_100: 1640000,
    formes: null,
  },
  {
    pokedex_id: 297,
    generation: 3,
    category: "Pokémon Cogneur",
    name: {
      fr: "Hariyama",
      en: "Hariyama",
      jp: "ハリテヤマ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/297/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/297/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Combat",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/combat.png",
      },
    ],
    talents: [
      {
        name: "Isograisse",
        tc: false,
      },
      {
        name: "Cran",
        tc: false,
      },
      {
        name: "Sans Limite",
        tc: true,
      },
    ],
    stats: {
      hp: 144,
      atk: 120,
      def: 60,
      spe_atk: 40,
      spe_def: 60,
      vit: 50,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 0,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 296,
          name: "Makuhita",
          condition: "Niveau 24",
        },
      ],
      next: null,
      mega: null,
    },
    height: "2,3 m",
    weight: "253,8 kg",
    egg_groups: ["Humanoïde"],
    sexe: {
      male: 75,
      female: 25,
    },
    catch_rate: 200,
    level_100: 1640000,
    formes: null,
  },
  {
    pokedex_id: 298,
    generation: 3,
    category: "Pokémon Point Polka",
    name: {
      fr: "Azurill",
      en: "Azurill",
      jp: "ルリリ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/298/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/298/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
      {
        name: "Fée",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/fee.png",
      },
    ],
    talents: [
      {
        name: "Isograisse",
        tc: false,
      },
      {
        name: "Coloforce",
        tc: false,
      },
      {
        name: "Herbivore",
        tc: true,
      },
    ],
    stats: {
      hp: 50,
      atk: 20,
      def: 40,
      spe_atk: 20,
      spe_def: 40,
      vit: 20,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0,
      },
      {
        name: "Feu",
        multiplier: 0,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 0,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 183,
          name: "Marill",
          condition: "Bonheur",
        },
        {
          pokedex_id: 184,
          name: "Azumarill",
          condition: "Niveau 18",
        },
      ],
      mega: null,
    },
    height: "0,2 m",
    weight: "2,0 kg",
    egg_groups: null,
    sexe: {
      male: 25,
      female: 75,
    },
    catch_rate: 150,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 299,
    generation: 3,
    category: "Pokémon Boussole",
    name: {
      fr: "Tarinor",
      en: "Nosepass",
      jp: "ノズパス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/299/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/299/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Roche",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/roche.png",
      },
    ],
    talents: [
      {
        name: "Fermeté",
        tc: false,
      },
      {
        name: "Magnépiège",
        tc: false,
      },
      {
        name: "Force Sable",
        tc: true,
      },
    ],
    stats: {
      hp: 30,
      atk: 45,
      def: 135,
      spe_atk: 45,
      spe_def: 90,
      vit: 30,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 476,
          name: "Tarinorme",
          condition: "+1 Niveau dans Champ Magnétique / Pierre Foudre (PLA)",
        },
      ],
      mega: null,
    },
    height: "1,0 m",
    weight: "97,0 kg",
    egg_groups: ["Minéral"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 300,
    generation: 3,
    category: "Pokémon Chaton",
    name: {
      fr: "Skitty",
      en: "Skitty",
      jp: "エネコ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/300/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/300/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Joli Sourire",
        tc: false,
      },
      {
        name: "Normalise",
        tc: false,
      },
      {
        name: "Peau Miracle",
        tc: true,
      },
    ],
    stats: {
      hp: 50,
      atk: 45,
      def: 45,
      spe_atk: 35,
      spe_def: 35,
      vit: 50,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 301,
          name: "Delcatty",
          condition: "Pierre Lune",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "11,0 kg",
    egg_groups: ["Terrestre", "Féerique"],
    sexe: {
      male: 25,
      female: 75,
    },
    catch_rate: 255,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 301,
    generation: 3,
    category: "Pokémon Guindé",
    name: {
      fr: "Delcatty",
      en: "Delcatty",
      jp: "エネコロロ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/301/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/301/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Joli Sourire",
        tc: false,
      },
      {
        name: "Normalise",
        tc: false,
      },
      {
        name: "Peau Miracle",
        tc: true,
      },
    ],
    stats: {
      hp: 70,
      atk: 65,
      def: 65,
      spe_atk: 55,
      spe_def: 55,
      vit: 90,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 300,
          name: "Skitty",
          condition: "Pierre Lune",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,1 m",
    weight: "32,6 kg",
    egg_groups: ["Terrestre", "Féerique"],
    sexe: {
      male: 25,
      female: 75,
    },
    catch_rate: 60,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 302,
    generation: 3,
    category: "Pokémon Obscurité",
    name: {
      fr: "Ténéfix",
      en: "Sableye",
      jp: "ヤミラミ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/302/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/302/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Ténèbres",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/tenebres.png",
      },
      {
        name: "Spectre",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/spectre.png",
      },
    ],
    talents: [
      {
        name: "Regard Vif",
        tc: false,
      },
      {
        name: "Frein",
        tc: false,
      },
      {
        name: "Farceur",
        tc: true,
      },
    ],
    stats: {
      hp: 50,
      atk: 75,
      def: 75,
      spe_atk: 65,
      spe_def: 65,
      vit: 50,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: null,
      next: null,
      mega: [
        {
          orbe: "Ténéfixite",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/302/mega-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/302/mega-shiny.png",
          },
        },
      ],
    },
    height: "0,5 m",
    weight: "11,0 kg",
    egg_groups: ["Humanoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 303,
    generation: 3,
    category: "Pokémon Trompeur",
    name: {
      fr: "Mysdibule",
      en: "Mawile",
      jp: "クチート",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/303/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/303/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Acier",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/acier.png",
      },
      {
        name: "Fée",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/fee.png",
      },
    ],
    talents: [
      {
        name: "Hyper Cutter",
        tc: false,
      },
      {
        name: "Intimidation",
        tc: false,
      },
      {
        name: "Sans Limite",
        tc: true,
      },
    ],
    stats: {
      hp: 50,
      atk: 85,
      def: 85,
      spe_atk: 55,
      spe_def: 55,
      vit: 50,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 0.25,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 0,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,
      next: null,
      mega: [
        {
          orbe: "Mysdibulite",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/303/mega-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/303/mega-shiny.png",
          },
        },
      ],
    },
    height: "0,6 m",
    weight: "11,5 kg",
    egg_groups: ["Terrestre", "Féerique"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 304,
    generation: 3,
    category: "Pokémon Armurfer",
    name: {
      fr: "Galekid",
      en: "Aron",
      jp: "ココドラ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/304/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/304/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Acier",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/acier.png",
      },
      {
        name: "Roche",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/roche.png",
      },
    ],
    talents: [
      {
        name: "Fermeté",
        tc: false,
      },
      {
        name: "Tête de Roc",
        tc: false,
      },
      {
        name: "Heavy Metal",
        tc: true,
      },
    ],
    stats: {
      hp: 50,
      atk: 70,
      def: 100,
      spe_atk: 40,
      spe_def: 40,
      vit: 30,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.25,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 4,
      },
      {
        name: "Poison",
        multiplier: 0,
      },
      {
        name: "Sol",
        multiplier: 4,
      },
      {
        name: "Vol",
        multiplier: 0.25,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 0.5,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 305,
          name: "Galegon",
          condition: "Niveau 32",
        },
        {
          pokedex_id: 306,
          name: "Galeking",
          condition: "Niveau 42",
        },
      ],
      mega: null,
    },
    height: "0,4 m",
    weight: "60,0 kg",
    egg_groups: ["Monstrueux"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 180,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 305,
    generation: 3,
    category: "Pokémon Armurfer",
    name: {
      fr: "Galegon",
      en: "Lairon",
      jp: "コドラ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/305/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/305/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Acier",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/acier.png",
      },
      {
        name: "Roche",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/roche.png",
      },
    ],
    talents: [
      {
        name: "Fermeté",
        tc: false,
      },
      {
        name: "Tête de Roc",
        tc: false,
      },
      {
        name: "Heavy Metal",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 90,
      def: 140,
      spe_atk: 50,
      spe_def: 50,
      vit: 40,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.25,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 4,
      },
      {
        name: "Poison",
        multiplier: 0,
      },
      {
        name: "Sol",
        multiplier: 4,
      },
      {
        name: "Vol",
        multiplier: 0.25,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 0.5,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 304,
          name: "Galekid",
          condition: "Niveau 32",
        },
      ],
      next: [
        {
          pokedex_id: 306,
          name: "Galeking",
          condition: "Niveau 42",
        },
      ],
      mega: null,
    },
    height: "0,9 m",
    weight: "120,0 kg",
    egg_groups: ["Monstrueux"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 90,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 306,
    generation: 3,
    category: "Pokémon Armurfer",
    name: {
      fr: "Galeking",
      en: "Aggron",
      jp: "ボスゴドラ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/306/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/306/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Acier",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/acier.png",
      },
      {
        name: "Roche",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/roche.png",
      },
    ],
    talents: [
      {
        name: "Fermeté",
        tc: false,
      },
      {
        name: "Tête de Roc",
        tc: false,
      },
      {
        name: "Heavy Metal",
        tc: true,
      },
    ],
    stats: {
      hp: 70,
      atk: 110,
      def: 180,
      spe_atk: 60,
      spe_def: 60,
      vit: 50,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.25,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 4,
      },
      {
        name: "Poison",
        multiplier: 0,
      },
      {
        name: "Sol",
        multiplier: 4,
      },
      {
        name: "Vol",
        multiplier: 0.25,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 0.5,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 304,
          name: "Galekid",
          condition: "Niveau 32",
        },
        {
          pokedex_id: 305,
          name: "Galegon",
          condition: "Niveau 42",
        },
      ],
      next: null,
      mega: [
        {
          orbe: "Galekingite",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/306/mega-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/306/mega-shiny.png",
          },
        },
      ],
    },
    height: "2,1 m",
    weight: "360,0 kg",
    egg_groups: ["Monstrueux"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 307,
    generation: 3,
    category: "Pokémon Méditation",
    name: {
      fr: "Méditikka",
      en: "Meditite",
      jp: "アサナン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/307/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/307/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Combat",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/combat.png",
      },
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Force Pure",
        tc: false,
      },
      {
        name: "Télépathe",
        tc: true,
      },
    ],
    stats: {
      hp: 30,
      atk: 40,
      def: 55,
      spe_atk: 40,
      spe_def: 55,
      vit: 60,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 308,
          name: "Charmina",
          condition: "Niveau 37",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "11,2 kg",
    egg_groups: ["Humanoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 180,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 308,
    generation: 3,
    category: "Pokémon Méditation",
    name: {
      fr: "Charmina",
      en: "Medicham",
      jp: "チャーレム",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/308/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/308/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Combat",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/combat.png",
      },
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Force Pure",
        tc: false,
      },
      {
        name: "Télépathe",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 60,
      def: 75,
      spe_atk: 60,
      spe_def: 75,
      vit: 80,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 307,
          name: "Méditikka",
          condition: "Niveau 37",
        },
      ],
      next: null,
      mega: [
        {
          orbe: "Charminite",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/308/mega-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/308/mega-shiny.png",
          },
        },
      ],
    },
    height: "1,3 m",
    weight: "31,5 kg",
    egg_groups: ["Humanoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 90,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 309,
    generation: 3,
    category: "Pokémon Orage",
    name: {
      fr: "Dynavolt",
      en: "Electrike",
      jp: "ラクライ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/309/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/309/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Électrik",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/electrik.png",
      },
    ],
    talents: [
      {
        name: "Paratonnerre",
        tc: false,
      },
      {
        name: "Statik",
        tc: false,
      },
      {
        name: "Moins",
        tc: true,
      },
    ],
    stats: {
      hp: 40,
      atk: 45,
      def: 40,
      spe_atk: 65,
      spe_def: 40,
      vit: 65,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 310,
          name: "Élecsprint",
          condition: "Niveau 26",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "15,2 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 120,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 310,
    generation: 3,
    category: "Pokémon Décharge",
    name: {
      fr: "Élecsprint",
      en: "Manectric",
      jp: "ライボルト",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/310/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/310/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Électrik",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/electrik.png",
      },
    ],
    talents: [
      {
        name: "Statik",
        tc: false,
      },
      {
        name: "Paratonnerre",
        tc: false,
      },
      {
        name: "Moins",
        tc: true,
      },
    ],
    stats: {
      hp: 70,
      atk: 75,
      def: 60,
      spe_atk: 105,
      spe_def: 60,
      vit: 105,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 309,
          name: "Dynavolt",
          condition: "Niveau 26",
        },
      ],
      next: null,
      mega: [
        {
          orbe: "Élecsprintite",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/310/mega-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/310/mega-shiny.png",
          },
        },
      ],
    },
    height: "1,5 m",
    weight: "40,2 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 311,
    generation: 3,
    category: "Pokémon Acclameur",
    name: {
      fr: "Posipi",
      en: "Plusle",
      jp: "プラスル",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/311/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/311/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Électrik",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/electrik.png",
      },
    ],
    talents: [
      {
        name: "Plus",
        tc: false,
      },
      {
        name: "Paratonnerre",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 50,
      def: 40,
      spe_atk: 85,
      spe_def: 75,
      vit: 95,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "0,4 m",
    weight: "4,2 kg",
    egg_groups: ["Féerique"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 200,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 312,
    generation: 3,
    category: "Pokémon Acclameur",
    name: {
      fr: "Négapi",
      en: "Minun",
      jp: "マイナン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/312/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/312/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Électrik",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/electrik.png",
      },
    ],
    talents: [
      {
        name: "Moins",
        tc: false,
      },
      {
        name: "Absorbe-Volt",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 40,
      def: 50,
      spe_atk: 75,
      spe_def: 85,
      vit: 95,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "0,4 m",
    weight: "4,2 kg",
    egg_groups: ["Féerique"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 200,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 313,
    generation: 3,
    category: "Pokémon Luciole",
    name: {
      fr: "Muciole",
      en: "Volbeat",
      jp: "バルビート",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/313/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/313/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
    ],
    talents: [
      {
        name: "Lumiattirance",
        tc: false,
      },
      {
        name: "Essaim",
        tc: false,
      },
      {
        name: "Farceur",
        tc: true,
      },
    ],
    stats: {
      hp: 65,
      atk: 73,
      def: 75,
      spe_atk: 47,
      spe_def: 85,
      vit: 85,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "0,7 m",
    weight: "17,7 kg",
    egg_groups: ["Insectoïde", "Humanoïde"],
    sexe: {
      male: 100,
      female: 0,
    },
    catch_rate: 150,
    level_100: 600000,
    formes: null,
  },
  {
    pokedex_id: 314,
    generation: 3,
    category: "Pokémon Luciole",
    name: {
      fr: "Lumivole",
      en: "Illumise",
      jp: "イルミーゼ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/314/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/314/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
    ],
    talents: [
      {
        name: "Benêt",
        tc: false,
      },
      {
        name: "Lentiteintée",
        tc: false,
      },
      {
        name: "Farceur",
        tc: true,
      },
    ],
    stats: {
      hp: 65,
      atk: 47,
      def: 75,
      spe_atk: 73,
      spe_def: 85,
      vit: 85,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "0,6 m",
    weight: "17,7 kg",
    egg_groups: ["Insectoïde", "Humanoïde"],
    sexe: {
      male: 0,
      female: 100,
    },
    catch_rate: 150,
    level_100: 1640000,
    formes: null,
  },
  {
    pokedex_id: 315,
    generation: 3,
    category: "Pokémon Épine",
    name: {
      fr: "Rosélia",
      en: "Roselia",
      jp: "ロゼリア",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/315/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/315/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Médic Nature",
        tc: false,
      },
      {
        name: "Point Poison",
        tc: false,
      },
      {
        name: "Feuille Garde",
        tc: true,
      },
    ],
    stats: {
      hp: 50,
      atk: 60,
      def: 45,
      spe_atk: 100,
      spe_def: 80,
      vit: 65,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 406,
          name: "Rozbouton",
          condition: "Bonheur + Jour + 1 niveau",
        },
      ],
      next: [
        {
          pokedex_id: 407,
          name: "Roserade",
          condition: "Pierre Éclat",
        },
      ],
      mega: null,
    },
    height: "0,3 m",
    weight: "2,0 kg",
    egg_groups: ["Féerique", "Végétal"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 150,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 316,
    generation: 3,
    category: "Pokémon Estomac",
    name: {
      fr: "Gloupti",
      en: "Gulpin",
      jp: "ゴクリン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/316/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/316/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Suintement",
        tc: false,
      },
      {
        name: "Glu",
        tc: false,
      },
      {
        name: "Gloutonnerie",
        tc: true,
      },
    ],
    stats: {
      hp: 70,
      atk: 43,
      def: 53,
      spe_atk: 43,
      spe_def: 53,
      vit: 40,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 317,
          name: "Avaltout",
          condition: "Niveau 26",
        },
      ],
      mega: null,
    },
    height: "0,4 m",
    weight: "10,3 kg",
    egg_groups: ["Amorphe"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 225,
    level_100: 1640000,
    formes: null,
  },
  {
    pokedex_id: 317,
    generation: 3,
    category: "Pokémon Sac Poison",
    name: {
      fr: "Avaltout",
      en: "Swalot",
      jp: "マルノーム",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/317/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/317/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Suintement",
        tc: false,
      },
      {
        name: "Glu",
        tc: false,
      },
      {
        name: "Gloutonnerie",
        tc: true,
      },
    ],
    stats: {
      hp: 100,
      atk: 73,
      def: 83,
      spe_atk: 73,
      spe_def: 83,
      vit: 55,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 316,
          name: "Gloupti",
          condition: "Niveau 26",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,7 m",
    weight: "80,0 kg",
    egg_groups: ["Amorphe"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 75,
    level_100: 1640000,
    formes: null,
  },
  {
    pokedex_id: 318,
    generation: 3,
    category: "Pokémon Féroce",
    name: {
      fr: "Carvanha",
      en: "Carvanha",
      jp: "キバニア",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/318/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/318/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Ténèbres",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/tenebres.png",
      },
    ],
    talents: [
      {
        name: "Peau Dure",
        tc: false,
      },
      {
        name: "Turbo",
        tc: true,
      },
    ],
    stats: {
      hp: 45,
      atk: 90,
      def: 20,
      spe_atk: 65,
      spe_def: 20,
      vit: 65,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0.5,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 319,
          name: "Sharpedo",
          condition: "Niveau 30",
        },
      ],
      mega: null,
    },
    height: "0,8 m",
    weight: "20,8 kg",
    egg_groups: ["Aquatique 2"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 225,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 319,
    generation: 3,
    category: "Pokémon Brutal",
    name: {
      fr: "Sharpedo",
      en: "Sharpedo",
      jp: "サメハダー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/319/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/319/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Ténèbres",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/tenebres.png",
      },
    ],
    talents: [
      {
        name: "Peau Dure",
        tc: false,
      },
      {
        name: "Turbo",
        tc: true,
      },
    ],
    stats: {
      hp: 70,
      atk: 120,
      def: 40,
      spe_atk: 95,
      spe_def: 40,
      vit: 95,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0.5,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 318,
          name: "Carvanha",
          condition: "Niveau 30",
        },
      ],
      next: null,
      mega: [
        {
          orbe: "Sharpedite",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/319/mega-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/319/mega-shiny.png",
          },
        },
      ],
    },
    height: "1,8 m",
    weight: "88,8 kg",
    egg_groups: ["Aquatique 2"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 60,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 320,
    generation: 3,
    category: "Pokémon Baleinboule",
    name: {
      fr: "Wailmer",
      en: "Wailmer",
      jp: "ホエルコ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/320/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/320/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Ignifu-Voile",
        tc: false,
      },
      {
        name: "Benêt",
        tc: false,
      },
      {
        name: "Pression",
        tc: true,
      },
    ],
    stats: {
      hp: 130,
      atk: 70,
      def: 35,
      spe_atk: 70,
      spe_def: 35,
      vit: 60,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 321,
          name: "Wailord",
          condition: "Niveau 40",
        },
      ],
      mega: null,
    },
    height: "2,0 m",
    weight: "130,0 kg",
    egg_groups: ["Terrestre", "Aquatique 2"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 125,
    level_100: 1640000,
    formes: null,
  },
  {
    pokedex_id: 321,
    generation: 3,
    category: "Pokémon Cachabouée",
    name: {
      fr: "Wailord",
      en: "Wailord",
      jp: "ホエルオー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/321/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/321/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Ignifu-Voile",
        tc: false,
      },
      {
        name: "Benêt",
        tc: false,
      },
      {
        name: "Pression",
        tc: true,
      },
    ],
    stats: {
      hp: 170,
      atk: 90,
      def: 45,
      spe_atk: 90,
      spe_def: 45,
      vit: 60,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 320,
          name: "Wailmer",
          condition: "Niveau 40",
        },
      ],
      next: null,
      mega: null,
    },
    height: "14,5 m",
    weight: "398,0 kg",
    egg_groups: ["Terrestre", "Aquatique 2"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 60,
    level_100: 1640000,
    formes: null,
  },
  {
    pokedex_id: 322,
    generation: 3,
    category: "Pokémon Engourdi",
    name: {
      fr: "Chamallot",
      en: "Numel",
      jp: "ドンメル",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/322/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/322/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Feu",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png",
      },
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
    ],
    talents: [
      {
        name: "Benêt",
        tc: false,
      },
      {
        name: "Simple",
        tc: false,
      },
      {
        name: "Tempo Perso",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 60,
      def: 40,
      spe_atk: 65,
      spe_def: 45,
      vit: 35,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 4,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 323,
          name: "Camérupt",
          condition: "Niveau 33",
        },
      ],
      mega: null,
    },
    height: "0,7 m",
    weight: "24,0 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 323,
    generation: 3,
    category: "Pokémon Éruption",
    name: {
      fr: "Camérupt",
      en: "Camerupt",
      jp: "バクーダ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/323/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/323/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Feu",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png",
      },
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
    ],
    talents: [
      {
        name: "Armumagma",
        tc: false,
      },
      {
        name: "Solide Roc",
        tc: false,
      },
      {
        name: "Colérique",
        tc: true,
      },
    ],
    stats: {
      hp: 70,
      atk: 100,
      def: 70,
      spe_atk: 105,
      spe_def: 75,
      vit: 40,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 322,
          name: "Chamallot",
          condition: "Niveau 33",
        },
      ],
      next: null,
      mega: [
        {
          orbe: "Caméruptite",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/323/mega-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/323/mega-shiny.png",
          },
        },
      ],
    },
    height: "1,9 m",
    weight: "220,0 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 150,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 324,
    generation: 3,
    category: "Pokémon Charbon",
    name: {
      fr: "Chartor",
      en: "Torkoal",
      jp: "コータス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/324/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/324/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Feu",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png",
      },
    ],
    talents: [
      {
        name: "Écran Fumée",
        tc: false,
      },
      {
        name: "Sécheresse",
        tc: false,
      },
      {
        name: "Coque Armure",
        tc: true,
      },
    ],
    stats: {
      hp: 70,
      atk: 85,
      def: 140,
      spe_atk: 85,
      spe_def: 70,
      vit: 20,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: null,
    height: "0,5 m",
    weight: "80,4 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 90,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 325,
    generation: 3,
    category: "Pokémon Rebond",
    name: {
      fr: "Spoink",
      en: "Spoink",
      jp: "バネブー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/325/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/325/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Isograisse",
        tc: false,
      },
      {
        name: "Tempo Perso",
        tc: false,
      },
      {
        name: "Gloutonnerie",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 25,
      def: 35,
      spe_atk: 70,
      spe_def: 80,
      vit: 60,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 0,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 326,
          name: "Groret",
          condition: "Niveau 32",
        },
      ],
      mega: null,
    },
    height: "0,7 m",
    weight: "30,6 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 326,
    generation: 3,
    category: "Pokémon Magouilleur",
    name: {
      fr: "Groret",
      en: "Grumpig",
      jp: "ブーピッグ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/326/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/326/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Isograisse",
        tc: false,
      },
      {
        name: "Tempo Perso",
        tc: false,
      },
      {
        name: "Gloutonnerie",
        tc: true,
      },
    ],
    stats: {
      hp: 80,
      atk: 45,
      def: 65,
      spe_atk: 90,
      spe_def: 110,
      vit: 80,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 0,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 325,
          name: "Spoink",
          condition: "Niveau 32",
        },
      ],
      next: null,
      mega: null,
    },
    height: "0,9 m",
    weight: "71,5 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 60,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 327,
    generation: 3,
    category: "Pokémon Panda Tache",
    name: {
      fr: "Spinda",
      en: "Spinda",
      jp: "パッチール",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/327/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/327/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Tempo Perso",
        tc: false,
      },
      {
        name: "Pieds Confus",
        tc: false,
      },
      {
        name: "Contestation",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 60,
      def: 60,
      spe_atk: 60,
      spe_def: 60,
      vit: 60,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "1,1 m",
    weight: "5,0 kg",
    egg_groups: ["Terrestre", "Humanoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 328,
    generation: 3,
    category: "Pokémon Piégeur",
    name: {
      fr: "Kraknoix",
      en: "Trapinch",
      jp: "ナックラー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/328/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/328/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
    ],
    talents: [
      {
        name: "Hyper Cutter",
        tc: false,
      },
      {
        name: "Piège Sable",
        tc: false,
      },
      {
        name: "Sans Limite",
        tc: true,
      },
    ],
    stats: {
      hp: 45,
      atk: 100,
      def: 45,
      spe_atk: 45,
      spe_def: 45,
      vit: 10,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 329,
          name: "Vibraninf",
          condition: "Niveau 35",
        },
        {
          pokedex_id: 330,
          name: "Libégon",
          condition: "Niveau 45",
        },
      ],
      mega: null,
    },
    height: "0,7 m",
    weight: "15,0 kg",
    egg_groups: ["Insectoïde", "Draconique"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 329,
    generation: 3,
    category: "Pokémon Vibration",
    name: {
      fr: "Vibraninf",
      en: "Vibrava",
      jp: "ビブラーバ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/329/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/329/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
      {
        name: "Dragon",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/dragon.png",
      },
    ],
    talents: [
      {
        name: "Lévitation",
        tc: false,
      },
    ],
    stats: {
      hp: 50,
      atk: 70,
      def: 50,
      spe_atk: 50,
      spe_def: 50,
      vit: 70,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 4,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 2,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 328,
          name: "Kraknoix",
          condition: "Niveau 35",
        },
      ],
      next: [
        {
          pokedex_id: 330,
          name: "Libégon",
          condition: "Niveau 45",
        },
      ],
      mega: null,
    },
    height: "1,1 m",
    weight: "15,3 kg",
    egg_groups: ["Insectoïde", "Draconique"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 120,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 330,
    generation: 3,
    category: "Pokémon Mystique",
    name: {
      fr: "Libégon",
      en: "Flygon",
      jp: "フライゴン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/330/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/330/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
      {
        name: "Dragon",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/dragon.png",
      },
    ],
    talents: [
      {
        name: "Lévitation",
        tc: false,
      },
    ],
    stats: {
      hp: 80,
      atk: 100,
      def: 80,
      spe_atk: 80,
      spe_def: 80,
      vit: 100,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 4,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 2,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 328,
          name: "Kraknoix",
          condition: "Niveau 35",
        },
        {
          pokedex_id: 329,
          name: "Vibraninf",
          condition: "Niveau 45",
        },
      ],
      next: null,
      mega: null,
    },
    height: "2,0 m",
    weight: "82,0 kg",
    egg_groups: ["Insectoïde", "Draconique"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 331,
    generation: 3,
    category: "Pokémon Cactus",
    name: {
      fr: "Cacnea",
      en: "Cacnea",
      jp: "サボネア",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/331/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/331/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
    ],
    talents: [
      {
        name: "Voile Sable",
        tc: false,
      },
      {
        name: "Absorbe-Eau",
        tc: true,
      },
    ],
    stats: {
      hp: 50,
      atk: 85,
      def: 40,
      spe_atk: 85,
      spe_def: 40,
      vit: 35,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 332,
          name: "Cacturne",
          condition: "Niveau 32",
        },
      ],
      mega: null,
    },
    height: "0,4 m",
    weight: "51,3 kg",
    egg_groups: ["Végétal", "Humanoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 190,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 332,
    generation: 3,
    category: "Pokémon Épouvantail",
    name: {
      fr: "Cacturne",
      en: "Cacturne",
      jp: "ノクタス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/332/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/332/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
      {
        name: "Ténèbres",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/tenebres.png",
      },
    ],
    talents: [
      {
        name: "Voile Sable",
        tc: false,
      },
      {
        name: "Absorbe-Eau",
        tc: true,
      },
    ],
    stats: {
      hp: 70,
      atk: 115,
      def: 60,
      spe_atk: 115,
      spe_def: 60,
      vit: 55,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 0,
      },
      {
        name: "Insecte",
        multiplier: 4,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0.5,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 331,
          name: "Cacnea",
          condition: "Niveau 32",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,3 m",
    weight: "77,4 kg",
    egg_groups: ["Végétal", "Humanoïde"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 60,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 333,
    generation: 3,
    category: "Pokémon Oiseaucoton",
    name: {
      fr: "Tylton",
      en: "Swablu",
      jp: "チルット",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/333/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/333/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Médic Nature",
        tc: false,
      },
      {
        name: "Ciel Gris",
        tc: true,
      },
    ],
    stats: {
      hp: 45,
      atk: 40,
      def: 60,
      spe_atk: 40,
      spe_def: 75,
      vit: 50,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 334,
          name: "Altaria",
          condition: "Niveau 35",
        },
      ],
      mega: null,
    },
    height: "0,4 m",
    weight: "1,2 kg",
    egg_groups: ["Aérien", "Draconique"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 600000,
    formes: null,
  },
  {
    pokedex_id: 334,
    generation: 3,
    category: "Pokémon Virevolteur",
    name: {
      fr: "Altaria",
      en: "Altaria",
      jp: "チルタリス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/334/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/334/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Dragon",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/dragon.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Médic Nature",
        tc: false,
      },
      {
        name: "Ciel Gris",
        tc: true,
      },
    ],
    stats: {
      hp: 75,
      atk: 70,
      def: 90,
      spe_atk: 70,
      spe_def: 105,
      vit: 80,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 4,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 2,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 333,
          name: "Tylton",
          condition: "Niveau 35",
        },
      ],
      next: null,
      mega: [
        {
          orbe: "Altarite",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/334/mega-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/334/mega-shiny.png",
          },
        },
      ],
    },
    height: "1,1 m",
    weight: "20,6 kg",
    egg_groups: ["Aérien", "Draconique"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 600000,
    formes: null,
  },
  {
    pokedex_id: 335,
    generation: 3,
    category: "Pokémon Chat Furet",
    name: {
      fr: "Mangriff",
      en: "Zangoose",
      jp: "ザングース",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/335/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/335/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Vaccin",
        tc: false,
      },
      {
        name: "Rage Poison",
        tc: true,
      },
    ],
    stats: {
      hp: 73,
      atk: 115,
      def: 60,
      spe_atk: 60,
      spe_def: 60,
      vit: 90,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "1,3 m",
    weight: "40,3 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 90,
    level_100: 600000,
    formes: null,
  },
  {
    pokedex_id: 336,
    generation: 3,
    category: "Pokémon Serpacroc",
    name: {
      fr: "Séviper",
      en: "Seviper",
      jp: "ハブネーク",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/336/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/336/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Poison",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
      },
    ],
    talents: [
      {
        name: "Mue",
        tc: false,
      },
      {
        name: "Infiltration",
        tc: true,
      },
    ],
    stats: {
      hp: 73,
      atk: 100,
      def: 60,
      spe_atk: 100,
      spe_def: 60,
      vit: 65,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 2,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: null,
    height: "2,7 m",
    weight: "52,5 kg",
    egg_groups: ["Terrestre", "Draconique"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 90,
    level_100: 1640000,
    formes: null,
  },
  {
    pokedex_id: 337,
    generation: 3,
    category: "Pokémon Météorite",
    name: {
      fr: "Séléroc",
      en: "Lunatone",
      jp: "ルナトーン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/337/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/337/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Roche",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/roche.png",
      },
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Lévitation",
        tc: false,
      },
    ],
    stats: {
      hp: 90,
      atk: 55,
      def: 65,
      spe_atk: 95,
      spe_def: 85,
      vit: 70,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "1,0 m",
    weight: "168,0 kg",
    egg_groups: ["Minéral"],
    sexe: null,
    catch_rate: 45,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 338,
    generation: 3,
    category: "Pokémon Météorite",
    name: {
      fr: "Solaroc",
      en: "Solrock",
      jp: "ソルロック",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/338/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/338/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Roche",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/roche.png",
      },
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Lévitation",
        tc: false,
      },
    ],
    stats: {
      hp: 90,
      atk: 95,
      def: 85,
      spe_atk: 55,
      spe_def: 65,
      vit: 70,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "1,2 m",
    weight: "154,0 kg",
    egg_groups: ["Minéral"],
    sexe: null,
    catch_rate: 45,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 339,
    generation: 3,
    category: "Pokémon Barbillon",
    name: {
      fr: "Barloche",
      en: "Barboach",
      jp: "ドジョッチ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/339/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/339/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
    ],
    talents: [
      {
        name: "Benêt",
        tc: false,
      },
      {
        name: "Anticipation",
        tc: false,
      },
      {
        name: "Hydratation",
        tc: true,
      },
    ],
    stats: {
      hp: 50,
      atk: 48,
      def: 43,
      spe_atk: 46,
      spe_def: 41,
      vit: 60,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 4,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 340,
          name: "Barbicha",
          condition: "Niveau 30",
        },
      ],
      mega: null,
    },
    height: "0,4 m",
    weight: "1,9 kg",
    egg_groups: ["Aquatique 2"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 190,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 340,
    generation: 3,
    category: "Pokémon Barbillon",
    name: {
      fr: "Barbicha",
      en: "Whiscash",
      jp: "ナマズン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/340/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/340/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
    ],
    talents: [
      {
        name: "Benêt",
        tc: false,
      },
      {
        name: "Anticipation",
        tc: false,
      },
      {
        name: "Hydratation",
        tc: true,
      },
    ],
    stats: {
      hp: 110,
      atk: 78,
      def: 73,
      spe_atk: 76,
      spe_def: 71,
      vit: 60,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 4,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 339,
          name: "Barloche",
          condition: "Niveau 30",
        },
      ],
      next: null,
      mega: null,
    },
    height: "0,9 m",
    weight: "23,6 kg",
    egg_groups: ["Aquatique 2"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 75,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 341,
    generation: 3,
    category: "Pokémon Brute",
    name: {
      fr: "Écrapince",
      en: "Corphish",
      jp: "ヘイガニ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/341/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/341/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Hyper Cutter",
        tc: false,
      },
      {
        name: "Coque Armure",
        tc: false,
      },
      {
        name: "Adaptabilité",
        tc: true,
      },
    ],
    stats: {
      hp: 43,
      atk: 80,
      def: 65,
      spe_atk: 50,
      spe_def: 35,
      vit: 35,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 342,
          name: "Colhomard",
          condition: "Niveau 30",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "11,5 kg",
    egg_groups: ["Aquatique 1", "Aquatique 3"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 205,
    level_100: 1640000,
    formes: null,
  },
  {
    pokedex_id: 342,
    generation: 3,
    category: "Pokémon Crapule",
    name: {
      fr: "Colhomard",
      en: "Crawdaunt",
      jp: "シザリガー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/342/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/342/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Ténèbres",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/tenebres.png",
      },
    ],
    talents: [
      {
        name: "Hyper Cutter",
        tc: false,
      },
      {
        name: "Coque Armure",
        tc: false,
      },
      {
        name: "Adaptabilité",
        tc: true,
      },
    ],
    stats: {
      hp: 63,
      atk: 120,
      def: 85,
      spe_atk: 90,
      spe_def: 55,
      vit: 55,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0.5,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 341,
          name: "Écrapince",
          condition: "Niveau 30",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,1 m",
    weight: "32,8 kg",
    egg_groups: ["Aquatique 1", "Aquatique 3"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 155,
    level_100: 1640000,
    formes: null,
  },
  {
    pokedex_id: 343,
    generation: 3,
    category: "Pokémon Poupargile",
    name: {
      fr: "Balbuto",
      en: "Baltoy",
      jp: "ヤジロン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/343/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/343/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Lévitation",
        tc: false,
      },
    ],
    stats: {
      hp: 40,
      atk: 40,
      def: 55,
      spe_atk: 40,
      spe_def: 70,
      vit: 55,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 344,
          name: "Kaorine",
          condition: "Niveau 36",
        },
      ],
      mega: null,
    },
    height: "0,5 m",
    weight: "21,5 kg",
    egg_groups: ["Minéral"],
    sexe: null,
    catch_rate: 255,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 344,
    generation: 3,
    category: "Pokémon Poupargile",
    name: {
      fr: "Kaorine",
      en: "Claydol",
      jp: "ネンドール",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/344/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/344/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Lévitation",
        tc: false,
      },
    ],
    stats: {
      hp: 60,
      atk: 70,
      def: 105,
      spe_atk: 70,
      spe_def: 120,
      vit: 75,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 343,
          name: "Balbulto",
          condition: "Niveau 36",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,5 m",
    weight: "108,0 kg",
    egg_groups: ["Minéral"],
    sexe: null,
    catch_rate: 90,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 345,
    generation: 3,
    category: "Pokémon Lis d'Eau",
    name: {
      fr: "Lilia",
      en: "Lileep",
      jp: "リリーラ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/345/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/345/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Roche",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/roche.png",
      },
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
    ],
    talents: [
      {
        name: "Ventouse",
        tc: false,
      },
      {
        name: "Lavabo",
        tc: true,
      },
    ],
    stats: {
      hp: 66,
      atk: 41,
      def: 77,
      spe_atk: 61,
      spe_def: 87,
      vit: 23,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 346,
          name: "Vacilys",
          condition: "Niveau 40",
        },
      ],
      mega: null,
    },
    height: "1,0 m",
    weight: "23,8 kg",
    egg_groups: ["Aquatique 3"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 600000,
    formes: null,
  },
  {
    pokedex_id: 346,
    generation: 3,
    category: "Pokémon Bernacle",
    name: {
      fr: "Vacilys",
      en: "Cradily",
      jp: "ユレイドル",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/346/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/346/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Roche",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/roche.png",
      },
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
    ],
    talents: [
      {
        name: "Ventouse",
        tc: false,
      },
      {
        name: "Lavabo",
        tc: true,
      },
    ],
    stats: {
      hp: 86,
      atk: 81,
      def: 97,
      spe_atk: 81,
      spe_def: 107,
      vit: 43,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 345,
          name: "Lilia",
          condition: "Niveau 40",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,5 m",
    weight: "60,4 kg",
    egg_groups: ["Aquatique 3"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 600000,
    formes: null,
  },
  {
    pokedex_id: 347,
    generation: 3,
    category: "Pokémon Crustage",
    name: {
      fr: "Anorith",
      en: "Anorith",
      jp: "アノプス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/347/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/347/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Roche",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/roche.png",
      },
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
    ],
    talents: [
      {
        name: "Armurbaston",
        tc: false,
      },
      {
        name: "Glissade",
        tc: true,
      },
    ],
    stats: {
      hp: 45,
      atk: 95,
      def: 50,
      spe_atk: 40,
      spe_def: 50,
      vit: 75,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 348,
          name: "Armaldo",
          condition: "Niveau 40",
        },
      ],
      mega: null,
    },
    height: "0,7 m",
    weight: "12,5 kg",
    egg_groups: ["Aquatique 3"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 600000,
    formes: null,
  },
  {
    pokedex_id: 348,
    generation: 3,
    category: "Pokémon Blindage",
    name: {
      fr: "Armaldo",
      en: "Armaldo",
      jp: "アーマルド",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/348/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/348/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Roche",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/roche.png",
      },
      {
        name: "Insecte",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png",
      },
    ],
    talents: [
      {
        name: "Armurbaston",
        tc: false,
      },
      {
        name: "Glissade",
        tc: true,
      },
    ],
    stats: {
      hp: 75,
      atk: 125,
      def: 100,
      spe_atk: 70,
      spe_def: 80,
      vit: 45,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 347,
          name: "Anorith",
          condition: "Niveau 40",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,5 m",
    weight: "68,2 kg",
    egg_groups: ["Aquatique 3"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 600000,
    formes: null,
  },
  {
    pokedex_id: 349,
    generation: 3,
    category: "Pokémon Poisson",
    name: {
      fr: "Barpau",
      en: "Feebas",
      jp: "ヒンバス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/349/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/349/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Glissade",
        tc: false,
      },
      {
        name: "Benêt",
        tc: false,
      },
      {
        name: "Adaptabilité",
        tc: true,
      },
    ],
    stats: {
      hp: 20,
      atk: 15,
      def: 20,
      spe_atk: 10,
      spe_def: 55,
      vit: 80,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 350,
          name: "Milobellus",
          condition: "Beauté supérieur ou égal à 170 + 1 niveau (RSE à N2B2 + ROSA + DEPS) / Echange avec Bel'Écaille (depuis NB)",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "7,4 kg",
    egg_groups: ["Aquatique 1", "Draconique"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 600000,
    formes: null,
  },
  {
    pokedex_id: 350,
    generation: 3,
    category: "Pokémon Tendre",
    name: {
      fr: "Milobellus",
      en: "Milotic",
      jp: "ミロカロス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/350/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/350/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Écaille Spéciale",
        tc: false,
      },
      {
        name: "Battant",
        tc: false,
      },
      {
        name: "Joli Sourire",
        tc: true,
      },
    ],
    stats: {
      hp: 95,
      atk: 60,
      def: 79,
      spe_atk: 100,
      spe_def: 125,
      vit: 81,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 349,
          name: "Barpau",
          condition: "Beauté supérieur ou égal à 170 + 1 niveau (RSE à N2B2 + ROSA + DEPS) / Echange avec Bel'Écaille (depuis NB)",
        },
      ],
      next: null,
      mega: null,
    },
    height: "6,2 m",
    weight: "162,0 kg",
    egg_groups: ["Draconique", "Aquatique 1"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 60,
    level_100: 600000,
    formes: null,
  },
  {
    pokedex_id: 351,
    generation: 3,
    category: "Pokémon Climat",
    name: {
      fr: "Morphéo",
      en: "Castform",
      jp: "ポワルン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/351/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/351/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Météo",
        tc: false,
      },
    ],
    stats: {
      hp: 70,
      atk: 70,
      def: 70,
      spe_atk: 70,
      spe_def: 70,
      vit: 70,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "0,3 m",
    weight: "0,8 kg",
    egg_groups: ["Féerique", "Amorphe"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 352,
    generation: 3,
    category: "Pokémon Multicolor",
    name: {
      fr: "Kecleon",
      en: "Kecleon",
      jp: "カクレオン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/352/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/352/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Normal",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/normal.png",
      },
    ],
    talents: [
      {
        name: "Homochromie",
        tc: false,
      },
      {
        name: "Protéen",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 90,
      def: 70,
      spe_atk: 60,
      spe_def: 120,
      vit: 40,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "1,0 m",
    weight: "22,0 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 200,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 353,
    generation: 3,
    category: "Pokémon Poupée",
    name: {
      fr: "Polichombr",
      en: "Shuppet",
      jp: "カゲボウズ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/353/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/353/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Spectre",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/spectre.png",
      },
    ],
    talents: [
      {
        name: "Insomnia",
        tc: false,
      },
      {
        name: "Fouille",
        tc: false,
      },
      {
        name: "Corps Maudit",
        tc: true,
      },
    ],
    stats: {
      hp: 44,
      atk: 75,
      def: 35,
      spe_atk: 63,
      spe_def: 33,
      vit: 45,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 354,
          name: "Branette",
          condition: "Niveau 37",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "2,3 kg",
    egg_groups: ["Amorphe"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 225,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 354,
    generation: 3,
    category: "Pokémon Marionnette",
    name: {
      fr: "Branette",
      en: "Banette",
      jp: "ジュペッタ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/354/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/354/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Spectre",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/spectre.png",
      },
    ],
    talents: [
      {
        name: "Insomnia",
        tc: false,
      },
      {
        name: "Fouille",
        tc: false,
      },
      {
        name: "Corps Maudit",
        tc: true,
      },
    ],
    stats: {
      hp: 64,
      atk: 115,
      def: 65,
      spe_atk: 83,
      spe_def: 63,
      vit: 65,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 353,
          name: "Polichombr",
          condition: "Niveau 37",
        },
      ],
      next: null,
      mega: [
        {
          orbe: "Branettite",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/354/mega-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/354/mega-shiny.png",
          },
        },
      ],
    },
    height: "1,1 m",
    weight: "12,5 kg",
    egg_groups: ["Amorphe"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 355,
    generation: 3,
    category: "Pokémon Requiem",
    name: {
      fr: "Skelénox",
      en: "Duskull",
      jp: "ヨマワル",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/355/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/355/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Spectre",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/spectre.png",
      },
    ],
    talents: [
      {
        name: "Lévitation",
        tc: false,
      },
      {
        name: "Fouille",
        tc: true,
      },
    ],
    stats: {
      hp: 20,
      atk: 40,
      def: 90,
      spe_atk: 30,
      spe_def: 90,
      vit: 25,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 356,
          name: "Téraclope",
          condition: "Niveau 37",
        },
        {
          pokedex_id: 477,
          name: "Noctunoir",
          condition: "Echange en tant Tissu Fauche / Contact d'un Tissu Fauche (PLA)",
        },
      ],
      mega: null,
    },
    height: "0,8 m",
    weight: "15,0 kg",
    egg_groups: ["Amorphe"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 190,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 356,
    generation: 3,
    category: "Pokémon Appel",
    name: {
      fr: "Téraclope",
      en: "Dusclops",
      jp: "サマヨール",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/356/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/356/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Spectre",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/spectre.png",
      },
    ],
    talents: [
      {
        name: "Pression",
        tc: false,
      },
      {
        name: "Fouille",
        tc: true,
      },
    ],
    stats: {
      hp: 40,
      atk: 70,
      def: 130,
      spe_atk: 60,
      spe_def: 130,
      vit: 25,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 355,
          name: "Skélénox",
          condition: "Niveau 37",
        },
      ],
      next: [
        {
          pokedex_id: 477,
          name: "Noctunoir",
          condition: "Echange en tant Tissu Fauche / Contact d'un Tissu Fauche (PLA)",
        },
      ],
      mega: null,
    },
    height: "1,6 m",
    weight: "30,6 kg",
    egg_groups: ["Amorphe"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 90,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 357,
    generation: 3,
    category: "Pokémon Fruit",
    name: {
      fr: "Tropius",
      en: "Tropius",
      jp: "トロピウス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/357/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/357/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Chlorophylle",
        tc: false,
      },
      {
        name: "Force Soleil",
        tc: false,
      },
      {
        name: "Récolte",
        tc: true,
      },
    ],
    stats: {
      hp: 99,
      atk: 68,
      def: 83,
      spe_atk: 72,
      spe_def: 87,
      vit: 51,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 4,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "2,0 m",
    weight: "100,0 kg",
    egg_groups: ["Monstrueux", "Végétal"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 200,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 358,
    generation: 3,
    category: "Pokémon Carillon",
    name: {
      fr: "Éoko",
      en: "Chimecho",
      jp: "チリーン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/358/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/358/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Lévitation",
        tc: false,
      },
    ],
    stats: {
      hp: 75,
      atk: 50,
      def: 80,
      spe_atk: 95,
      spe_def: 90,
      vit: 65,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 433,
          name: "Korillon",
          condition: "+1 Niveau + Nuit + Bonheur",
        },
      ],
      next: null,
      mega: null,
    },
    height: "0,6 m",
    weight: "1,0 kg",
    egg_groups: ["Amorphe"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 359,
    generation: 3,
    category: "Pokémon Désastre",
    name: {
      fr: "Absol",
      en: "Absol",
      jp: "アブソル",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/359/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/359/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Ténèbres",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/tenebres.png",
      },
    ],
    talents: [
      {
        name: "Pression",
        tc: false,
      },
      {
        name: "Chanceux",
        tc: false,
      },
      {
        name: "Cœur Noble",
        tc: true,
      },
    ],
    stats: {
      hp: 65,
      atk: 130,
      def: 60,
      spe_atk: 75,
      spe_def: 60,
      vit: 75,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 0.5,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 0.5,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: null,
      next: null,
      mega: [
        {
          orbe: "Absolite",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/359/mega-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/359/mega-shiny.png",
          },
        },
      ],
    },
    height: "1,2 m",
    weight: "47,0 kg",
    egg_groups: ["Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 30,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 360,
    generation: 3,
    category: "Pokémon Ravi",
    name: {
      fr: "Okéoké",
      en: "Wynaut",
      jp: "ソーナノ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/360/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/360/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Marque Ombre",
        tc: false,
      },
      {
        name: "Télépathe",
        tc: true,
      },
    ],
    stats: {
      hp: 95,
      atk: 23,
      def: 48,
      spe_atk: 23,
      spe_def: 48,
      vit: 23,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 202,
          name: "Qulbutoké",
          condition: "Niveau 15",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "14,0 kg",
    egg_groups: null,
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 125,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 361,
    generation: 3,
    category: "Pokémon Capuche",
    name: {
      fr: "Stalgamin",
      en: "Snorunt",
      jp: "ユキワラシ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/361/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/361/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Glace",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/glace.png",
      },
    ],
    talents: [
      {
        name: "Attention",
        tc: false,
      },
      {
        name: "Corps Gel",
        tc: false,
      },
      {
        name: "Lunatique",
        tc: true,
      },
    ],
    stats: {
      hp: 50,
      atk: 50,
      def: 50,
      spe_atk: 50,
      spe_def: 50,
      vit: 50,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 362,
          name: "Oniglali",
          condition: "Niveau 42",
        },
        {
          pokedex_id: 478,
          name: "Momartik",
          condition: "Femelle + Pierre Aube",
        },
      ],
      mega: null,
    },
    height: "0,7 m",
    weight: "16,8 kg",
    egg_groups: ["Féerique", "Minéral"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 190,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 362,
    generation: 3,
    category: "Pokémon Face",
    name: {
      fr: "Oniglali",
      en: "Glalie",
      jp: "オニゴーリ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/362/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/362/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Glace",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/glace.png",
      },
    ],
    talents: [
      {
        name: "Attention",
        tc: false,
      },
      {
        name: "Corps Gel",
        tc: false,
      },
      {
        name: "Lunatique",
        tc: true,
      },
    ],
    stats: {
      hp: 80,
      atk: 80,
      def: 80,
      spe_atk: 80,
      spe_def: 80,
      vit: 80,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 361,
          name: "Stalgamin",
          condition: "Niveau 42",
        },
      ],
      next: null,
      mega: [
        {
          orbe: "Oniglalite",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/362/mega-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/362/mega-shiny.png",
          },
        },
      ],
    },
    height: "1,5 m",
    weight: "256,5 kg",
    egg_groups: ["Féerique", "Minéral"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 75,
    level_100: 1000000,
    formes: null,
  },
  {
    pokedex_id: 363,
    generation: 3,
    category: "Pokémon Clap Clap",
    name: {
      fr: "Obalie",
      en: "Spheal",
      jp: "タマザラシ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/363/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/363/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Glace",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/glace.png",
      },
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Isograisse",
        tc: false,
      },
      {
        name: "Corps Gel",
        tc: false,
      },
      {
        name: "Benêt",
        tc: true,
      },
    ],
    stats: {
      hp: 70,
      atk: 40,
      def: 50,
      spe_atk: 55,
      spe_def: 50,
      vit: 25,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 364,
          name: "Phogleur",
          condition: "Niveau 32",
        },
        {
          pokedex_id: 365,
          name: "Kaimorse",
          condition: "Niveau 44",
        },
      ],
      mega: null,
    },
    height: "0,8 m",
    weight: "39,5 kg",
    egg_groups: ["Aquatique 1", "Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 364,
    generation: 3,
    category: "Pokémon Roule Boule",
    name: {
      fr: "Phogleur",
      en: "Sealeo",
      jp: "トドグラー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/364/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/364/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Glace",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/glace.png",
      },
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Isograisse",
        tc: false,
      },
      {
        name: "Corps Gel",
        tc: false,
      },
      {
        name: "Benêt",
        tc: true,
      },
    ],
    stats: {
      hp: 90,
      atk: 60,
      def: 70,
      spe_atk: 75,
      spe_def: 70,
      vit: 45,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 363,
          name: "Obalie",
          condition: "Niveau 32",
        },
      ],
      next: [
        {
          pokedex_id: 365,
          name: "Kaimorse",
          condition: "Niveau 44",
        },
      ],
      mega: null,
    },
    height: "1,1 m",
    weight: "87,6 kg",
    egg_groups: ["Aquatique 1", "Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 120,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 365,
    generation: 3,
    category: "Pokémon Brise Glace",
    name: {
      fr: "Kaimorse",
      en: "Walrein",
      jp: "トドゼルガ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/365/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/365/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Glace",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/glace.png",
      },
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Isograisse",
        tc: false,
      },
      {
        name: "Corps Gel",
        tc: false,
      },
      {
        name: "Benêt",
        tc: true,
      },
    ],
    stats: {
      hp: 110,
      atk: 80,
      def: 90,
      spe_atk: 95,
      spe_def: 90,
      vit: 65,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 363,
          name: "Obalie",
          condition: "Niveau 32",
        },
        {
          pokedex_id: 364,
          name: "Phogleur",
          condition: "Niveau 44",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,4 m",
    weight: "150,6 kg",
    egg_groups: ["Aquatique 1", "Terrestre"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 366,
    generation: 3,
    category: "Pokémon Bivalve",
    name: {
      fr: "Coquiperl",
      en: "Clamperl",
      jp: "パールル",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/366/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/366/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Coque Armure",
        tc: false,
      },
      {
        name: "Phobique",
        tc: true,
      },
    ],
    stats: {
      hp: 35,
      atk: 64,
      def: 85,
      spe_atk: 74,
      spe_def: 55,
      vit: 32,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 367,
          name: "Serpang",
          condition: "Echange avec Dent Océan",
        },
        {
          pokedex_id: 368,
          name: "Rosabyss",
          condition: "Echange avec Écaille Océan",
        },
      ],
      mega: null,
    },
    height: "0,4 m",
    weight: "52,5 kg",
    egg_groups: ["Aquatique 1"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 255,
    level_100: 600000,
    formes: null,
  },
  {
    pokedex_id: 367,
    generation: 3,
    category: "Pokémon Abysse",
    name: {
      fr: "Serpang",
      en: "Huntail",
      jp: "ハンテール",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/367/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/367/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Glissade",
        tc: false,
      },
      {
        name: "Ignifu-Voile",
        tc: true,
      },
    ],
    stats: {
      hp: 55,
      atk: 104,
      def: 105,
      spe_atk: 94,
      spe_def: 75,
      vit: 52,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 366,
          name: "Coquiperl",
          condition: "Echange avec Dent Océan",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,7 m",
    weight: "27,0 kg",
    egg_groups: ["Aquatique 1"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 60,
    level_100: 600000,
    formes: null,
  },
  {
    pokedex_id: 368,
    generation: 3,
    category: "Pokémon Mer du Sud",
    name: {
      fr: "Rosabyss",
      en: "Gorebyss",
      jp: "サクラビス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/368/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/368/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Glissade",
        tc: false,
      },
      {
        name: "Hydratation",
        tc: true,
      },
    ],
    stats: {
      hp: 55,
      atk: 84,
      def: 105,
      spe_atk: 114,
      spe_def: 75,
      vit: 52,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 366,
          name: "Coquiperl",
          condition: "Echange avec Écaille Océan",
        },
      ],
      next: null,
      mega: null,
    },
    height: "1,8 m",
    weight: "22,6 kg",
    egg_groups: ["Aquatique 1"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 60,
    level_100: 600000,
    formes: null,
  },
  {
    pokedex_id: 369,
    generation: 3,
    category: "Pokémon Longévité",
    name: {
      fr: "Relicanth",
      en: "Relicanth",
      jp: "ジーランス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/369/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/369/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
      {
        name: "Roche",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/roche.png",
      },
    ],
    talents: [
      {
        name: "Glissade",
        tc: false,
      },
      {
        name: "Tête de Roc",
        tc: false,
      },
      {
        name: "Fermeté",
        tc: true,
      },
    ],
    stats: {
      hp: 100,
      atk: 90,
      def: 130,
      spe_atk: 45,
      spe_def: 65,
      vit: 55,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 4,
      },
      {
        name: "Feu",
        multiplier: 0.25,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "1,0 m",
    weight: "23,4 kg",
    egg_groups: ["Aquatique 1", "Aquatique 2"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 25,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 370,
    generation: 3,
    category: "Pokémon Rendezvous",
    name: {
      fr: "Lovdisc",
      en: "Luvdisc",
      jp: "ラブカス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/370/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/370/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Glissade",
        tc: false,
      },
      {
        name: "Hydratation",
        tc: true,
      },
    ],
    stats: {
      hp: 43,
      atk: 30,
      def: 55,
      spe_atk: 40,
      spe_def: 65,
      vit: 97,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "0,6 m",
    weight: "8,7 kg",
    egg_groups: ["Aquatique 2"],
    sexe: {
      male: 25,
      female: 75,
    },
    catch_rate: 225,
    level_100: 800000,
    formes: null,
  },
  {
    pokedex_id: 371,
    generation: 3,
    category: "Pokémon Tête de Roc",
    name: {
      fr: "Draby",
      en: "Bagon",
      jp: "タツベイ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/371/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/371/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Dragon",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/dragon.png",
      },
    ],
    talents: [
      {
        name: "Tête de Roc",
        tc: false,
      },
      {
        name: "Sans Limite",
        tc: true,
      },
    ],
    stats: {
      hp: 45,
      atk: 75,
      def: 60,
      spe_atk: 40,
      spe_def: 30,
      vit: 50,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 2,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 372,
          name: "Drackhaus",
          condition: "Niveau 30",
        },
        {
          pokedex_id: 373,
          name: "Drattak",
          condition: "Niveau 50",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "42,1 kg",
    egg_groups: ["Draconique"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 372,
    generation: 3,
    category: "Pokémon Endurant",
    name: {
      fr: "Drackhaus",
      en: "Shelgon",
      jp: "コモルー",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/372/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/372/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Dragon",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/dragon.png",
      },
    ],
    talents: [
      {
        name: "Tête de Roc",
        tc: false,
      },
      {
        name: "Envelocape",
        tc: true,
      },
    ],
    stats: {
      hp: 65,
      atk: 95,
      def: 100,
      spe_atk: 60,
      spe_def: 50,
      vit: 50,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 2,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 371,
          name: "Drabby",
          condition: "Niveau 30",
        },
      ],
      next: [
        {
          pokedex_id: 373,
          name: "Drattak",
          condition: "Niveau 50",
        },
      ],
      mega: null,
    },
    height: "1,1 m",
    weight: "110,5 kg",
    egg_groups: ["Draconique"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 373,
    generation: 3,
    category: "Pokémon Dragon",
    name: {
      fr: "Drattak",
      en: "Salamence",
      jp: "ボーマンダ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/373/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/373/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Dragon",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/dragon.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Intimidation",
        tc: false,
      },
      {
        name: "Impudence",
        tc: true,
      },
    ],
    stats: {
      hp: 95,
      atk: 135,
      def: 80,
      spe_atk: 110,
      spe_def: 80,
      vit: 100,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 4,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 2,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 371,
          name: "Drabby",
          condition: "Niveau 30",
        },
        {
          pokedex_id: 372,
          name: "Drackhaus",
          condition: "Niveau 50",
        },
      ],
      next: null,
      mega: [
        {
          orbe: "Drattakite",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/373/mega-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/373/mega-shiny.png",
          },
        },
      ],
    },
    height: "1,5 m",
    weight: "102,6 kg",
    egg_groups: ["Draconique"],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 374,
    generation: 3,
    category: "Pokémon Boulefer",
    name: {
      fr: "Terhal",
      en: "Beldum",
      jp: "ダンバル",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/374/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/374/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Acier",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/acier.png",
      },
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Corps Sain",
        tc: false,
      },
      {
        name: "Light Metal",
        tc: true,
      },
    ],
    stats: {
      hp: 40,
      atk: 55,
      def: 80,
      spe_atk: 35,
      spe_def: 60,
      vit: 30,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 0.25,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 0.5,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 375,
          name: "Métang",
          condition: "Niveau 20",
        },
        {
          pokedex_id: 376,
          name: "Métalosse",
          condition: "Niveau 45",
        },
      ],
      mega: null,
    },
    height: "0,6 m",
    weight: "95,2 kg",
    egg_groups: ["Minéral"],
    sexe: null,
    catch_rate: 3,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 375,
    generation: 3,
    category: "Pokémon Pincefer",
    name: {
      fr: "Métang",
      en: "Metang",
      jp: "メタング",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/375/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/375/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Acier",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/acier.png",
      },
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Corps Sain",
        tc: false,
      },
      {
        name: "Light Metal",
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 75,
      def: 100,
      spe_atk: 55,
      spe_def: 80,
      vit: 50,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 0.25,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 0.5,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 374,
          name: "Terhal",
          condition: "Niveau 20",
        },
      ],
      next: [
        {
          pokedex_id: 376,
          name: "Métalosse",
          condition: "Niveau 45",
        },
      ],
      mega: null,
    },
    height: "1,2 m",
    weight: "202,5 kg",
    egg_groups: ["Minéral"],
    sexe: null,
    catch_rate: 3,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 376,
    generation: 3,
    category: "Pokémon Pattefer",
    name: {
      fr: "Métalosse",
      en: "Metagross",
      jp: "メタグロス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/376/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/376/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Acier",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/acier.png",
      },
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Corps Sain",
        tc: false,
      },
      {
        name: "Light Metal",
        tc: true,
      },
    ],
    stats: {
      hp: 80,
      atk: 135,
      def: 130,
      spe_atk: 95,
      spe_def: 90,
      vit: 70,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 0.25,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 0.5,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 374,
          name: "Terhal",
          condition: "Niveau 20",
        },
        {
          pokedex_id: 375,
          name: "Métang",
          condition: "Niveau 45",
        },
      ],
      next: null,
      mega: [
        {
          orbe: "Métalossite",
          sprites: {
            regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/376/mega-regular.png",
            shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/376/mega-shiny.png",
          },
        },
      ],
    },
    height: "1,6 m",
    weight: "550,0 kg",
    egg_groups: ["Minéral"],
    sexe: null,
    catch_rate: 3,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 377,
    generation: 3,
    category: "Pokémon Pic Rocheux",
    name: {
      fr: "Regirock",
      en: "Regirock",
      jp: "レジロック",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/377/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/377/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Roche",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/roche.png",
      },
    ],
    talents: [
      {
        name: "Corps Sain",
        tc: false,
      },
      {
        name: "Fermeté",
        tc: true,
      },
    ],
    stats: {
      hp: 80,
      atk: 100,
      def: 200,
      spe_atk: 50,
      spe_def: 100,
      vit: 50,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "1,7 m",
    weight: "230,0 kg",
    egg_groups: null,
    sexe: null,
    catch_rate: 3,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 378,
    generation: 3,
    category: "Pokémon Iceberg",
    name: {
      fr: "Regice",
      en: "Regice",
      jp: "レジアイス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/378/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/378/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Glace",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/glace.png",
      },
    ],
    talents: [
      {
        name: "Corps Sain",
        tc: false,
      },
      {
        name: "Corps Gel",
        tc: true,
      },
    ],
    stats: {
      hp: 80,
      atk: 50,
      def: 100,
      spe_atk: 100,
      spe_def: 200,
      vit: 50,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 2,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "1,8 m",
    weight: "175,0 kg",
    egg_groups: null,
    sexe: null,
    catch_rate: 3,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 379,
    generation: 3,
    category: "Pokémon Fer",
    name: {
      fr: "Registeel",
      en: "Registeel",
      jp: "レジスチル",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/379/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/379/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Acier",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/acier.png",
      },
    ],
    talents: [
      {
        name: "Corps Sain",
        tc: false,
      },
      {
        name: "Light Metal",
        tc: true,
      },
    ],
    stats: {
      hp: 80,
      atk: 75,
      def: 150,
      spe_atk: 75,
      spe_def: 150,
      vit: 50,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 2,
      },
      {
        name: "Poison",
        multiplier: 0,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 0.5,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: null,
    height: "1,9 m",
    weight: "205,0 kg",
    egg_groups: null,
    sexe: null,
    catch_rate: 3,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 380,
    generation: 3,
    category: "Pokémon Éon",
    name: {
      fr: "Latias",
      en: "Latias",
      jp: "ラティアス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/380/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/380/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Dragon",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/dragon.png",
      },
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Lévitation",
        tc: false,
      },
    ],
    stats: {
      hp: 80,
      atk: 80,
      def: 90,
      spe_atk: 110,
      spe_def: 130,
      vit: 110,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 2,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: null,
    height: "1,4 m",
    weight: "40,0 kg",
    egg_groups: null,
    sexe: {
      male: 0,
      female: 100,
    },
    catch_rate: 3,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 381,
    generation: 3,
    category: "Pokémon Éon",
    name: {
      fr: "Latios",
      en: "Latios",
      jp: "ラティオス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/381/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/381/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Dragon",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/dragon.png",
      },
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Lévitation",
        tc: false,
      },
    ],
    stats: {
      hp: 80,
      atk: 90,
      def: 80,
      spe_atk: 130,
      spe_def: 110,
      vit: 110,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 2,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: null,
    height: "2,0 m",
    weight: "60,0 kg",
    egg_groups: null,
    sexe: {
      male: 100,
      female: 0,
    },
    catch_rate: 3,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 382,
    generation: 3,
    category: "Pokémon Bassinmarin",
    name: {
      fr: "Kyogre",
      en: "Kyogre",
      jp: "カイオーガ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/382/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/382/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Eau",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png",
      },
    ],
    talents: [
      {
        name: "Crachin",
        tc: false,
      },
    ],
    stats: {
      hp: 100,
      atk: 100,
      def: 90,
      spe_atk: 150,
      spe_def: 140,
      vit: 90,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 2,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "4,5 m",
    weight: "352,0 kg",
    egg_groups: null,
    sexe: null,
    catch_rate: 5,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 383,
    generation: 3,
    category: "Pokémon Continent",
    name: {
      fr: "Groudon",
      en: "Groudon",
      jp: "グラードン",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/383/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/383/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
    ],
    talents: [
      {
        name: "Sécheresse",
        tc: false,
      },
    ],
    stats: {
      hp: 100,
      atk: 150,
      def: 140,
      spe_atk: 100,
      spe_def: 90,
      vit: 90,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 2,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0.5,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "3,5 m",
    weight: "950,0 kg",
    egg_groups: null,
    sexe: null,
    catch_rate: 5,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 384,
    generation: 3,
    category: "Pokémon Cieux",
    name: {
      fr: "Rayquaza",
      en: "Rayquaza",
      jp: "レックウザ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/384/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/384/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Dragon",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/dragon.png",
      },
      {
        name: "Vol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png",
      },
    ],
    talents: [
      {
        name: "Air Lock",
        tc: false,
      },
    ],
    stats: {
      hp: 105,
      atk: 150,
      def: 90,
      spe_atk: 150,
      spe_def: 90,
      vit: 95,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.25,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 4,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 2,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 2,
      },
    ],
    evolution: null,
    height: "7,0 m",
    weight: "206,5 kg",
    egg_groups: null,
    sexe: null,
    catch_rate: 45,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 385,
    generation: 3,
    category: "Pokémon Souhait",
    name: {
      fr: "Jirachi",
      en: "Jirachi",
      jp: "ジラーチ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/385/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/385/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Acier",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/acier.png",
      },
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Sérénité",
        tc: false,
      },
    ],
    stats: {
      hp: 100,
      atk: 100,
      def: 100,
      spe_atk: 100,
      spe_def: 100,
      vit: 100,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 0.5,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 0,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 0.5,
      },
      {
        name: "Psy",
        multiplier: 0.25,
      },
      {
        name: "Insecte",
        multiplier: 1,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 0.5,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: null,
    height: "0,3 m",
    weight: "1,1 kg",
    egg_groups: null,
    sexe: null,
    catch_rate: 3,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 386,
    generation: 3,
    category: "Pokémon ADN",
    name: {
      fr: "Deoxys",
      en: "Deoxys",
      jp: "デオキシス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/386/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/386/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Psy",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/psy.png",
      },
    ],
    talents: [
      {
        name: "Pression",
        tc: false,
      },
    ],
    stats: {
      hp: 50,
      atk: 95,
      def: 90,
      spe_atk: 95,
      spe_def: 90,
      vit: 180,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 1,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 1,
      },
      {
        name: "Combat",
        multiplier: 0.5,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 1,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 0.5,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 2,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 2,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: null,
    height: "1,7 m",
    weight: "60,8 kg",
    egg_groups: null,
    sexe: null,
    catch_rate: 3,
    level_100: 1250000,
    formes: null,
  },
  {
    pokedex_id: 387,
    generation: 4,
    category: "Pokémon Minifeuille",
    name: {
      fr: "Tortipouss",
      en: "Turtwig",
      jp: "ナエトル",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/387/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/387/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
    ],
    talents: [
      {
        name: "Engrais",
        tc: false,
      },
      {
        name: "Coque Armure",
        tc: true,
      },
    ],
    stats: {
      hp: 55,
      atk: 68,
      def: 64,
      spe_atk: 45,
      spe_def: 55,
      vit: 31,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 388,
          name: "Boskara",
          condition: "Niveau 18",
        },
        {
          pokedex_id: 389,
          name: "Torterra",
          condition: "Niveau 32",
        },
      ],
      mega: null,
    },
    height: "0,4 m",
    weight: "10,2 kg",
    egg_groups: ["Monstrueux", "Végétal"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 388,
    generation: 4,
    category: "Pokémon Bosquet",
    name: {
      fr: "Boskara",
      en: "Grotle",
      jp: "ハヤシガメ",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/388/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/388/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
    ],
    talents: [
      {
        name: "Engrais",
        tc: false,
      },
      {
        name: "Coque Armure",
        tc: true,
      },
    ],
    stats: {
      hp: 75,
      atk: 89,
      def: 85,
      spe_atk: 55,
      spe_def: 65,
      vit: 36,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 0.5,
      },
      {
        name: "Électrik",
        multiplier: 0.5,
      },
      {
        name: "Glace",
        multiplier: 2,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 2,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 1,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 387,
          name: "Tortipouss",
          condition: "Niveau 18",
        },
      ],
      next: [
        {
          pokedex_id: 389,
          name: "Torterra",
          condition: "Niveau 32",
        },
      ],
      mega: null,
    },
    height: "1,1 m",
    weight: "97,0 kg",
    egg_groups: ["Monstrueux", "Végétal"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 389,
    generation: 4,
    category: "Pokémon Continent",
    name: {
      fr: "Torterra",
      en: "Torterra",
      jp: "ドダイトス",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/389/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/389/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Plante",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
      },
      {
        name: "Sol",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/sol.png",
      },
    ],
    talents: [
      {
        name: "Engrais",
        tc: false,
      },
      {
        name: "Coque Armure",
        tc: true,
      },
    ],
    stats: {
      hp: 95,
      atk: 109,
      def: 105,
      spe_atk: 75,
      spe_def: 85,
      vit: 56,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 1,
      },
      {
        name: "Feu",
        multiplier: 2,
      },
      {
        name: "Eau",
        multiplier: 1,
      },
      {
        name: "Électrik",
        multiplier: 0,
      },
      {
        name: "Glace",
        multiplier: 4,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 0.5,
      },
      {
        name: "Vol",
        multiplier: 2,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 2,
      },
      {
        name: "Roche",
        multiplier: 0.5,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 1,
      },
      {
        name: "Fée",
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 387,
          name: "Tortipouss",
          condition: "Niveau 18",
        },
        {
          pokedex_id: 388,
          name: "Boskara",
          condition: "Niveau 32",
        },
      ],
      next: null,
      mega: null,
    },
    height: "2,2 m",
    weight: "310,0 kg",
    egg_groups: ["Monstrueux", "Végétal"],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 390,
    generation: 4,
    category: "Pokémon Chimpanzé",
    name: {
      fr: "Ouisticram",
      en: "Chimchar",
      jp: "ヒコザル",
    },
    sprites: {
      regular: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/390/regular.png",
      shiny: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/390/shiny.png",
      gmax: null,
    },
    types: [
      {
        name: "Feu",
        image: "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png",
      },
    ],
    talents: [
      {
        name: "Brasier",
        tc: false,
      },
      {
        name: "Poing de Fer",
        tc: true,
      },
    ],
    stats: {
      hp: 44,
      atk: 58,
      def: 44,
      spe_atk: 58,
      spe_def: 44,
      vit: 61,
    },
    resistances: [
      {
        name: "Normal",
        multiplier: 1,
      },
      {
        name: "Plante",
        multiplier: 0.5,
      },
      {
        name: "Feu",
        multiplier: 0.5,
      },
      {
        name: "Eau",
        multiplier: 2,
      },
      {
        name: "Électrik",
        multiplier: 1,
      },
      {
        name: "Glace",
        multiplier: 0.5,
      },
      {
        name: "Combat",
        multiplier: 1,
      },
      {
        name: "Poison",
        multiplier: 1,
      },
      {
        name: "Sol",
        multiplier: 2,
      },
      {
        name: "Vol",
        multiplier: 1,
      },
      {
        name: "Psy",
        multiplier: 1,
      },
      {
        name: "Insecte",
        multiplier: 0.5,
      },
      {
        name: "Roche",
        multiplier: 2,
      },
      {
        name: "Spectre",
        multiplier: 1,
      },
      {
        name: "Dragon",
        multiplier: 1,
      },
      {
        name: "Ténèbres",
        multiplier: 1,
      },
      {
        name: "Acier",
        multiplier: 0.5,
      },
      {
        name: "Fée",
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,