import { UIAlpha, FXAA } from '@/utils/webgl';
import { KContainer, KGraphics, KText } from './material';

export const CreatePlayerLife = (app, player, resources) => {
  const main = KContainer(app.stage, {
    x: player.x - player.width / 2,
    y: player.y - player.height / 2
  });

  const level = KGraphics(main, {
    fill: 0xffffff,
    rectangle: [0, 0, 32, 32],
    filters: [UIAlpha().alpha_bar]
  });
  level.x -= main.width;
  level.y -= main.height - 12;

  const level_text = KText(player.level, level, {
    fontFamily: 'KitchenSink',
    fontSize: 18,
    fontWeight: 'bold'
  });
  level_text.x += level.width / 3;
  level_text.y += level.height / 4;

  const bar = KGraphics(main, {
    fake: true,
    rectangle: [0, 0, 128, 12],
    filters: [UIAlpha().alpha_item]
  });

  const max_bar = 128;
  const max_hp = player.maxHP;
  const hp = player.HP;
  const max_node_bar = max_bar / max_hp;
  const bar_value = max_node_bar * hp;

  const health_bar = KGraphics(main, {
    fill: 0xbb3131,
    rectangle: [0, 0, bar_value, 12]
  });

  const health_text = KText(`${player.HP}  /  ${player.maxHP}`, health_bar, {
    fontFamily: 'KitchenSink',
    fontSize: 10,
    fontWeight: 'bold',
    fill: 0xffffff
  });
  health_text.filters = [FXAA()];
  health_text.x = bar.x + bar.width / 2 - 18;

  main.fake_bar = bar;
  main.health_bar = health_bar;
  main.health_text = health_text;
  main.level_bar = level;
  main.level_text = level_text;

  return main;
};

export const RenderPlayerLife = (ui, player) => {
  player.action.interactive_ui
    ? (ui.player_life.visible = false)
    : (ui.player_life.visible = true);

  ui.player_life.position.set(player.x + 8, player.y + 24);
  ui.player_life.level_text.text = player.level;

  const max_bar = 128;
  const max_hp = player.maxHP;
  const hp = player.HP;
  const max_node_bar = max_bar / max_hp;
  const bar_value = max_node_bar * hp;

  ui.player_life.health_bar.width = bar_value;
  ui.player_life.health_text.text = `${player.HP}  /  ${player.maxHP}`;
};
