export const setPlayerSkill = (skill, player) => {
  player.skills.push(skill);

  if (skill.id === 'resilience') applyResilienceSkill(skill, player);
  else if (skill.id === 'rage') applyRageSkill(skill, player);
  else if (skill.id === 'arcane') applyArcaneSkill(skill, player);
};

const applyResilienceSkill = (skill, player) => {
  if (skill.effect_tags.includes('hp')) {
    player.HP += skill.effect.HP;
    player.maxHP += skill.effect.maxHP;
  }
};

const applyRageSkill = (skill, player) => {};

const applyArcaneSkill = (skill, player) => {};
