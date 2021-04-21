import resilience from '@/defines/skills/resilience.json';
import rage from '@/defines/skills/rage.json';
import arcane from '@/defines/skills/arcane.json';
import { getChancePercentage } from '@/utils/random';

export const getAltarChoices = (player) => {
  const _resilience = resilience.filter(
    (item) => item.id_cont === player.skills.resilience
  );
  const _rage = rage.filter((item) => item.id_cont === player.skills.rage);
  const _arcane = arcane.filter(
    (item) => item.id_cont === player.skills.arcane
  );

  const skillsAvailable = [..._resilience, ..._rage, ..._arcane];
  const skills = [];

  let _resilience_choice = false;
  let _rage_choice = false;
  let _arcane_choice = false;

  if(!_resilience || !_rage || !_arcane || !skillsAvailable) return [];

  while (!_resilience_choice || !_rage_choice || !_arcane_choice) {

    const random = Math.floor(Math.random() * skillsAvailable.length);
    const skill = skillsAvailable[random];

    if (!skill) break;

    if (skill.id === 'resilience' && !_resilience_choice) {
      skill.background = 0x2abe10;
      skills.push(skill);
      _resilience_choice = true;
    } else if (skill.id === 'rage' && !_rage_choice) {
      skill.background = 0xbe1010;
      skills.push(skill);
      _rage_choice = true;
    } else if (skill.id === 'arcane' && !_arcane_choice) {
      skill.background = 0x10a1be;
      skills.push(skill);
      _arcane_choice = true;
    }
  }

  if(skills.length !== 3) return;

  skills[0].x = -266;
  skills[1].x = 0;
  skills[2].x = 266;

  return skills;
};

export const createAltars = (nodes, FOREST, options) => {
  const items = [];

  nodes.forEach((node) => {
    if (node.background === FOREST[1][0]) {
      if (getChancePercentage(options.altar_chance)) {
        node.parent_quantity++;
        const item = {};
        item.background = 'altar';
        item.active = true;
        item.id = 'altar';
        item.scale = 2;
        item.x = node.x - node.width / 4;
        item.y = node.y - node.height / 2;
        item.cwidth = 12.5 * (item.scale + 1.0);
        item.cheight = 12.5 * (item.scale + 1.0);
        items.push(item);
      }
    }
  });

  return items;
};
