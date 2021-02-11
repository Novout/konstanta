import { 
  Container,
  TextStyle, 
  Graphics,
  Text
} from "@/pixi/alias";
import { UIAlpha } from '@/utils/webgl';


export const CreatePlayerLife = (app, player, resources) => {
  const main = new Container();
  main.position.set(player.x - player.width / 2, player.y - player.height / 2);
  app.stage.addChild(main);

  const bar = new Graphics();
  bar.beginFill(0xFFFFFF);
  bar.drawRect(0, 0, 128, 12);
  bar.endFill();
  bar.filters = [UIAlpha().alpha_item];

  const max_bar = 128;
  const max_hp = player.maxHP;
  const hp = player.HP;
  const max_node_bar = max_bar / max_hp;
  const bar_value = max_node_bar * hp;

  const health_bar = new Graphics();
  health_bar.beginFill(0xBB3131);
  health_bar.drawRect(0, 0, bar_value, 12);
  health_bar.endFill();
  /*
  const style = new TextStyle({
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: "bold"
  });
  const text = new Text(`${player.HP}  /  ${player.maxHP}`, style);
  text.filters = [FXAA()];
  text.x = bar.x + (bar.width / 2) - 18;
  health_bar.addChild(text);
  */

  main.addChild(bar);
  main.addChild(health_bar);

  main.health_bar = health_bar;

  return main;
}

export const RenderPlayerLife = (ui, player) => {
  player.action.interactive_ui ? ui.player_life.visible = false : ui.player_life.visible = true;
  ui.player_life.position.set(player.x + 8, player.y + 24);
}