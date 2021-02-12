import { Texture, BaseTexture, Rectangle } from '@/pixi/alias';

export const createPlayer = (resources) => {
  let resource_idle = BaseTexture.from(resources['player_ide'].url);
  let resource_run = BaseTexture.from(resources['player_run'].url);
  let resource_attack = BaseTexture.from(resources['player_attack'].url);
  let w = 80;
  let h = 80;
  // localStorage request;
  return {
    //default
    id: 'player',
    texture_actually: 'stand',
    texture: {
      stand: [
        new Texture(resource_idle, new Rectangle(0 * w, 0, w, h)),
        new Texture(resource_idle, new Rectangle(1 * w, 0, w, h)),
        new Texture(resource_idle, new Rectangle(2 * w, 0, w, h)),
        new Texture(resource_idle, new Rectangle(3 * w, 0, w, h)),
        new Texture(resource_idle, new Rectangle(4 * w, 0, w, h)),
        new Texture(resource_idle, new Rectangle(5 * w, 0, w, h)),
        new Texture(resource_idle, new Rectangle(6 * w, 0, w, h)),
        new Texture(resource_idle, new Rectangle(7 * w, 0, w, h)),
        new Texture(resource_idle, new Rectangle(8 * w, 0, w, h)),
        new Texture(resource_idle, new Rectangle(9 * w, 0, w, h)),
        new Texture(resource_idle, new Rectangle(10 * w, 0, w, h)),
        new Texture(resource_idle, new Rectangle(11 * w, 0, w, h)),
        new Texture(resource_idle, new Rectangle(12 * w, 0, w, h)),
        new Texture(resource_idle, new Rectangle(13 * w, 0, w, h)),
        new Texture(resource_idle, new Rectangle(14 * w, 0, w, h)),
        new Texture(resource_idle, new Rectangle(15 * w, 0, w, h)),
        new Texture(resource_idle, new Rectangle(16 * w, 0, w, h)),
        new Texture(resource_idle, new Rectangle(17 * w, 0, w, h))
      ],
      run: [
        new Texture(resource_run, new Rectangle(0 * w, 0, w, h)),
        new Texture(resource_run, new Rectangle(1 * w, 0, w, h)),
        new Texture(resource_run, new Rectangle(2 * w, 0, w, h)),
        new Texture(resource_run, new Rectangle(3 * w, 0, w, h)),
        new Texture(resource_run, new Rectangle(4 * w, 0, w, h)),
        new Texture(resource_run, new Rectangle(5 * w, 0, w, h)),
        new Texture(resource_run, new Rectangle(6 * w, 0, w, h)),
        new Texture(resource_run, new Rectangle(7 * w, 0, w, h)),
        new Texture(resource_run, new Rectangle(8 * w, 0, w, h)),
        new Texture(resource_run, new Rectangle(9 * w, 0, w, h)),
        new Texture(resource_run, new Rectangle(10 * w, 0, w, h)),
        new Texture(resource_run, new Rectangle(11 * w, 0, w, h)),
        new Texture(resource_run, new Rectangle(12 * w, 0, w, h)),
        new Texture(resource_run, new Rectangle(13 * w, 0, w, h)),
        new Texture(resource_run, new Rectangle(14 * w, 0, w, h)),
        new Texture(resource_run, new Rectangle(15 * w, 0, w, h)),
        new Texture(resource_run, new Rectangle(16 * w, 0, w, h)),
        new Texture(resource_run, new Rectangle(17 * w, 0, w, h)),
        new Texture(resource_run, new Rectangle(18 * w, 0, w, h)),
        new Texture(resource_run, new Rectangle(19 * w, 0, w, h)),
        new Texture(resource_run, new Rectangle(20 * w, 0, w, h)),
        new Texture(resource_run, new Rectangle(21 * w, 0, w, h)),
        new Texture(resource_run, new Rectangle(22 * w, 0, w, h)),
        new Texture(resource_run, new Rectangle(23 * w, 0, w, h))
      ],
      attack: [
        new Texture(resource_attack, new Rectangle(0 * w, 0, w, h)),
        new Texture(resource_attack, new Rectangle(1 * w, 0, w, h)),
        new Texture(resource_attack, new Rectangle(2 * w, 0, w, h)),
        new Texture(resource_attack, new Rectangle(3 * w, 0, w, h)),
        new Texture(resource_attack, new Rectangle(4 * w, 0, w, h)),
        new Texture(resource_attack, new Rectangle(5 * w, 0, w, h)),
        new Texture(resource_attack, new Rectangle(6 * w, 0, w, h)),
        new Texture(resource_attack, new Rectangle(7 * w, 0, w, h)),
        new Texture(resource_attack, new Rectangle(8 * w, 0, w, h)),
        new Texture(resource_attack, new Rectangle(9 * w, 0, w, h)),
        new Texture(resource_attack, new Rectangle(10 * w, 0, w, h)),
        new Texture(resource_attack, new Rectangle(11 * w, 0, w, h)),
        new Texture(resource_attack, new Rectangle(12 * w, 0, w, h)),
        new Texture(resource_attack, new Rectangle(13 * w, 0, w, h)),
        new Texture(resource_attack, new Rectangle(14 * w, 0, w, h)),
        new Texture(resource_attack, new Rectangle(15 * w, 0, w, h)),
        new Texture(resource_attack, new Rectangle(16 * w, 0, w, h)),
        new Texture(resource_attack, new Rectangle(17 * w, 0, w, h)),
        new Texture(resource_attack, new Rectangle(18 * w, 0, w, h)),
        new Texture(resource_attack, new Rectangle(19 * w, 0, w, h)),
        new Texture(resource_attack, new Rectangle(20 * w, 0, w, h)),
        new Texture(resource_attack, new Rectangle(21 * w, 0, w, h)),
        new Texture(resource_attack, new Rectangle(22 * w, 0, w, h)),
        new Texture(resource_attack, new Rectangle(23 * w, 0, w, h))
      ]
    },
    y: 1500,
    x: 1500,
    vx: 3,
    vy: 3,
    cwidth: 18,
    cheight: 30,
    // habilities
    level: 1,
    levelHP: 8,
    maxHP: 10,
    HP: 10,
    CA: 0, // % for ignore attack
    inventory: {
      actually_item: undefined,
      primary_weapon: undefined,
      second_weapon: undefined,
      activate: undefined,
      artefact: undefined,
      general: []
    },
    //general
    resources: {
      gold: 0,
      wood: 0,
      rock: 0,
      leather: 0,
      efrium: 0,
      eletronic_circuit: 0
    },
    conditionals: {
      poisoning: false,
      bleeding: false,
      resistance: false
    },
    skills: []
  };
};
