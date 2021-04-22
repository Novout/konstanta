import { getStorage } from '../storage/get';
import { setStorage } from '../storage/set';

export const savePlayer = (player, context) => {
  setStorage(`${context.id}player`, {
    id: player.id,
    texture_actually: player.texture_actually,
    y: player.y,
    x: player.x,
    cwidth: player.cwidth,
    cheight: player.cheight,
    vx: player.vx,
    vy: player.vy,
    level: player.level,
    levelHP: player.levelHP,
    HP: player.HP,
    maxHP: player.maxHP,
    minHP: player.minHP,
    temporaryHP: player.temporaryHP,
    lucky: player.lucky,
    CA: player.CA,
    inventory: {
      actually_item: player.inventory?.actually_item?.base,
      primary_weapon: player.inventory?.primary_weapon?.base,
      second_weapon: player.inventory?.second_weapon?.base,
      activate: player.inventory?.activate?.base,
      artefact: player.inventory?.artefact?.base,
      utils: player.inventory?.utils
    },
    resources: player.resources,
    conditionals: player.conditionals,
    skills: player.skills,
    action: player.action,
    effects: player.effects,
    magics: player.magics
  });
};

export const loadPlayer = (context) => {
  return getStorage(`${context.id}player`);
};
