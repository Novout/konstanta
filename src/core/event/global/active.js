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
