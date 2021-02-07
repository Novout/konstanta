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
  let alpha = new filters.AlphaFilter(0.5);
  let inventory = new Container();
  inventory.filters = [alpha];
  inventory.position.set(player.x - 75, player.y - 100);
  app.stage.addChild(inventory);

  let bar = new Graphics();
  bar.beginFill(0x000000);
  bar.drawRect(0, 0, 256, 64);
  bar.endFill();
  inventory.addChild(bar);

  let item = new Graphics();
  item.beginFill(0xFF3300);
  item.drawRect(0, 0, 64, 64);
  item.endFill();
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