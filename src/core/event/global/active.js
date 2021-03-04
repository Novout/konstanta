import { ContainSprite } from '@/event/sprite';

export const ContainStoreActive = (app, player, item) => {
  if (ContainSprite(player, item) && !player.action.interactive_item) {
    item.ui_store_entry.position.set(
      player.x - player.width / 2 + 50,
      player.y - player.height / 2
    );
    item.ui_store_entry.visible = true;
  } else {
    item.ui_store_entry.visible = false;
  }
};

export const ContainAltarActive = (app, player, item) => {
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

export const ContainChestActive = (app, player, item) => {
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

export const ContainAreaActive = (player, item, options) => {
  if (
    player.y >= (options.size - 2) * options.node_size &&
    player.x >= (options.size - 2) * options.node_size
  ) {
    item.visible = false;
    return;
  }

  if (
    (player.y >= (options.size - 2) * options.node_size ||
      player.x >= (options.size - 2) * options.node_size) &&
    !player.action.interactive_item
  ) {
    item.position.set(
      player.x - player.width / 2 + 50,
      player.y - player.height / 2
    );
    item.visible = true;
  } else {
    item.visible = false;
  }
};
