import Keyboard from 'pixi.js-keyboard';
import { 
  Container, 
  filters,
  Graphics
} from "@/pixi/alias";
import { D_OPEN_INVENTORY } from '@/defines/keys';

export const UIAlpha = () => {
  const alpha_main = new filters.AlphaFilter(0.5);
  const alpha_item = new filters.AlphaFilter(0.15);

  return { alpha_main, alpha_item };
}

export const CreateUI = (app, player) => {
  const inventory = CreateInventoryBar(app, player);
  return { inventory };
}

export const CreateInventoryBar = (app, player) => {
  let inventory = new Container();
  inventory.position.set(player.x - 75, player.y - 100);
  app.stage.addChild(inventory);

  let bar = new Graphics();
  bar.beginFill(0x66BD99);
  bar.drawRect(0, 0, 256, 64);
  bar.endFill();
  bar.filters = [UIAlpha().alpha_main];
  inventory.addChild(bar);

  let item = new Graphics();
  item.beginFill(0xFFFFFF);
  item.drawRect(0, 0, 64, 64);
  item.endFill();
  item.lineStyle(2, 0xFFFFFF, 1, 1, false);
  item.filters = [UIAlpha().alpha_item];
  inventory.addChild(item);

  inventory.outer = item;

  return inventory;
}

export const RenderUI = (app, ui, player) => {
  if (Keyboard.isKeyDown(...D_OPEN_INVENTORY)) {
    ui.inventory.visible = true;
    RenderInventoryBar(ui.inventory, player);
  } else {
    ui.inventory.visible = false;
  }
}

export const RenderInventoryBar = (bar, player) => {
  bar.position.set(player.x - 75, player.y - 100);
}