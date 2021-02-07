import { 
  Container, 
  filters,
  Graphics
} from "@/pixi/alias";

export const CreateUI = (app, player) => {
  const inventory = CreateInventoryBar(app, player);
  return { inventory };
}

export const CreateInventoryBar = (app, player) => {
  const alpha_main = new filters.AlphaFilter(0.5);
  const alpha_item = new filters.AlphaFilter(0.15);

  let inventory = new Container();
  inventory.position.set(player.x - 75, player.y - 100);
  app.stage.addChild(inventory);

  let bar = new Graphics();
  bar.beginFill(0x66BD99);
  bar.drawRect(0, 0, 256, 64);
  bar.endFill();
  bar.filters = [alpha_main];
  inventory.addChild(bar);

  let item = new Graphics();
  item.beginFill(0xFFFFFF);
  item.drawRect(0, 0, 64, 64);
  item.endFill();
  item.filters = [alpha_item];
  inventory.addChild(item);

  inventory.outer = item;

  return inventory;
}

export const RenderUI = (app, ui, player) => {
  RenderInventoryBar(ui.inventory, player);
}

export const RenderInventoryBar = (bar, player) => {
  bar.position.set(player.x - 75, player.y - 100);
}