import { ContainSprite } from '@/event/sprite';

export const ContainStoreActive = (app, player, item, resources) => {
  const _item = item;

  if (ContainSprite(player, _item) && !player.action.interactive_item) {
    item.ui_store.position.set(
      player.x - player.width / 2 + 50,
      player.y + player.height * 1.5
    );
    item.ui_store.visible = true;
  } else {
    item.ui_store.visible = false;
  }
};

export const ContainAltarActive = (app, player, item, resources) => {
  if (ContainSprite(player, item) && !player.action.interactive_item) {
    item.ui_altar.visible = true;
    if (item.choice_skills.visible)
      item.ui_altar.position.set(
        player.x + item.width / 2,
        player.y + item.height / 2
      );
    else
      item.ui_altar.position.set(player.x - player.width / 4, player.y + 200);
  } else {
    item.ui_altar.visible = false;
  }
};

export const ContainChestActive = (app, player, item, resources) => {
  if (ContainSprite(player, item) && !player.action.interactive_item) {
    item.ui_chest.position.set(
      player.x - player.width / 2 + 50,
      player.y + player.height * 1.5
    );
    item.ui_chest.visible = true;
  } else {
    item.ui_chest.visible = false;
  }
};
