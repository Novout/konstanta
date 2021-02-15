const upLevel = (player) => {
  player.level++;

  const _hp = Math.floor(Math.random() * player.levelHP + 1);
  player.HP += _hp;
  player.maxHP += _hp;
};

const applyResilienceSkill = (skill, player) => {
  if (skill.effect_tags.includes('hp')) {
    player.HP += skill.effect.HP;
    if (skill.effect_tags.includes('max_hp')) {
      player.maxHP += skill.effect.maxHP;
    }
  }
};

const applyRageSkill = (skill, player) => {
  if (skill.effect_tags.includes('knockback')) {
    if (skill.effect_bonus?.multi?.includes('knockback')) {
      player.effects.knockback *= skill.effect.knockback;
    } else {
      player.effects.knockback += skill.effect.knockback;
    }
  }
};

const applyArcaneSkill = (skill, player) => {
  if (skill.effect_tags.includes('magic')) {
    if (skill.effect_tags.includes('magic_slot')) {
      player.action.magic.magic_slot += skill.effect.magic_slot;
      player.action.magic.magic_slot_max += skill.effect.magic_slot_max;
    }
  }
};

export const setPlayerSkill = (skill, player) => {
  upLevel(player);

  player.skills.list.push(skill);

  if (skill.id === 'resilience') {
    player.skills.resilience++;
    applyResilienceSkill(skill, player);
  } else if (skill.id === 'rage') {
    player.skills.rage++;
    applyRageSkill(skill, player);
  } else if (skill.id === 'arcane') {
    player.skills.arcane++;
    applyArcaneSkill(skill, player);
  } else {
    throw new Error('Skill id not exists.');
  }
};
