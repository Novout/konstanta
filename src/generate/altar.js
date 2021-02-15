import origin from '@/defines/origin.json';
import resilience from '@/defines/skills/resilience.json';
import rage from '@/defines/skills/rage.json';
import arcane from '@/defines/skills/arcane.json';

export const generateType = () => {
  const actually = origin[0];
  return actually;
};

export const getAltarChoices = (player) => {
  const _resilience = resilience.filter(
    (item) => item.id_cont === player.skills.resilience
  );
  const _rage = rage.filter((item) => item.id_cont === player.skills.rage);
  const _arcane = arcane.filter(
    (item) => item.id_cont === player.skills.arcane
  );

  const skillsAvailable = [..._resilience, ..._rage, ..._arcane];

  let _resilience_choice = false;
  let _rage_choice = false;
  let _arcane_choice = false;
  const skills = [];

  while (!_resilience_choice || !_rage_choice || !_arcane_choice) {
    const random = Math.floor(Math.random() * skillsAvailable.length);
    const skill = skillsAvailable[random];

    if (!skill) return;

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

  skills[0].x = 10;
  skills[1].x = 285;
  skills[2].x = 555;

  return skills;
};
