export const setPlayerSkill = (skill, player) => {
  player.skills.push(skill);
  if(skill.id === 'resilience') applyResilienceSkill(skill, player);
  if(skill.id === 'rage') applyRageSkill(skill, player);
  if(skill.id === 'arcane') applyArcaneSkill(skill, player);
}

const applyResilienceSkill = (skill, player) => {

}

const applyRageSkill = (skill, player) => {

}

const applyArcaneSkill = (skill, player) => {

}
