import origin from '@/defines/origin.json';
import resilience from '@/defines/skills/resilience.json';
import rage from '@/defines/skills/rage.json';
import arcane from '@/defines/skills/arcane.json';

export const generateType = () => {
  const actually = origin[0];
  return actually;
};

export const getAltarChoices = (player) => {
  const _resilience = resilience.filter(item => item.id_cont === player.skills.resilience);
  const _rage = rage.filter(item => item.id_cont === player.skills.rage);
  const _arcane = arcane.filter(item => item.id_cont === player.skills.arcane);

  const skillsAvailable = [
    ..._resilience,
    ..._rage,
    ..._arcane,
  ];

  let _resilience_choice = false;
  let _rage_choice = false;
  let _arcane_choice = false;
  const skills = [];

  while(!_resilience_choice && !_rage_choice && !_arcane_choice) {
    const random = Math.floor(Math.random() * skillsAvailable.lenght);
    const skill = skillsAvailable[random];

    if(skill.id === "resilience" && !_resilience_choice) {
      skills.push(skill);
      _resilience_choice = true;
      player.skills.resilience++;
    } else if(skill.id === "rage" && !_rage_choice) {
      skills.push(skill);
      _rage_choice = true;
      player.skills.rage++;
    } else if(skill.id === "arcane" && !_arcane_choice) {
      skills.push(skill);
      _arcane_choice = true;
      player.skills.arcane++;
    }
  }

  return skills;
}
