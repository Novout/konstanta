import { 
  Texture,
  BaseTexture,
  Rectangle,
} from '@/pixi/alias';

export const createPlayer = (resources) => {
  let resource = BaseTexture.from(resources["player_ide"].url);
  let w = 80;
  let h = 80;
  // localStorage request;
  return {
    //default
    id: 'player',
    texture: {
      stand: [
        new Texture(resource, new Rectangle(0 * w, 0, w, h)),
        new Texture(resource, new Rectangle(1 * w, 0, w, h)),
        new Texture(resource, new Rectangle(2 * w, 0, w, h)),
        new Texture(resource, new Rectangle(3 * w, 0, w, h)),
        new Texture(resource, new Rectangle(4 * w, 0, w, h)),
        new Texture(resource, new Rectangle(5 * w, 0, w, h)),
        new Texture(resource, new Rectangle(6 * w, 0, w, h)),
        new Texture(resource, new Rectangle(7 * w, 0, w, h)),
        new Texture(resource, new Rectangle(8 * w, 0, w, h)),
        new Texture(resource, new Rectangle(9 * w, 0, w, h)),
        new Texture(resource, new Rectangle(10 * w, 0, w, h)),
        new Texture(resource, new Rectangle(11 * w, 0, w, h)),
        new Texture(resource, new Rectangle(12 * w, 0, w, h)),
        new Texture(resource, new Rectangle(13 * w, 0, w, h)),
        new Texture(resource, new Rectangle(14 * w, 0, w, h)),
        new Texture(resource, new Rectangle(15 * w, 0, w, h)),
        new Texture(resource, new Rectangle(16 * w, 0, w, h)),
        new Texture(resource, new Rectangle(17 * w, 0, w, h)),
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
    maxHP: 10,
    HP: 10,
    CA: 0, // % for ignore attack
    inventory: {
      actually_item: undefined,
      primary_weapon: undefined,
      second_weapon: undefined,
      activate: undefined,
      artefact: undefined
    },
    //general
    resources: {
      gold: 0,
      wood: 0,
      rock: 0,
      leather: 0,
      efrium: 0,
      eletronic_circuit: 0
    }
  }
}