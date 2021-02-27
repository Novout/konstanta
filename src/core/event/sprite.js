export const BlockScenarioRIG = (r1, r2, options) => {
  let combinedHalfWidths, combinedHalfHeights, vx, vy;

  r1.centerX = r1.x + r1.width / 2;
  r1.centerY = r1.y + r1.height / 2;
  r2.centerX = r2.x + r2.width / 2;
  r2.centerY = r2.y + r2.height / 2;

  r1.halfWidth = r1.cwidth / 2;
  r1.halfHeight = r1.cheight / 2;
  r2.halfWidth = r2.cwidth;
  r2.halfHeight = r2.cheight;

  vx = r1.centerX - 20 - r2.centerX;
  vy = r1.centerY - (r2.centerY + r2.height / 2);

  combinedHalfWidths = r1.halfWidth + r2.halfWidth;
  combinedHalfHeights = r1.halfHeight + r2.halfHeight;

  if (Math.abs(vx) < combinedHalfWidths) {
    if (Math.abs(vy) < combinedHalfHeights) {
      if (r1.x > r2.x) {
        if (r1.x >= (options.size - 1) * options.node_size) return;
        r1.x += r1.vx;
      }

      if (r1.x < r2.x) {
        if (r1.x <= 0) return;
        r1.x -= r1.vx;
      }

      if (r1.y > r2.y) {
        if (r1.y >= (options.size - 1) * options.node_size) return;
        r1.y += r1.vy;
      }

      if (r1.y < r2.y) {
        if (r1.y <= 0) return;
        r1.y -= r1.vy;
      }
    }
  }
};

export const BlockFixedScenarioRIG = (r1, r2, options) => {
  let combinedHalfWidths, combinedHalfHeights, vx, vy;

  r1.centerX = r1.x + r1.width / 2;
  r1.centerY = r1.y + r1.height / 2;
  r2.centerX = r2.x + r2.width / 2;
  r2.centerY = r2.y + r2.height / 2;

  r1.halfWidth = r1.cwidth / 2;
  r1.halfHeight = r1.cheight / 2;
  r2.halfWidth = r2.width / 2;
  r2.halfHeight = r2.height / 2;

  vx = r1.centerX - r2.centerX;
  vy = r1.centerY - r2.centerY;

  combinedHalfWidths = r1.halfWidth + r2.halfWidth;
  combinedHalfHeights = r1.halfHeight + r2.halfHeight;

  if (Math.abs(vx) < combinedHalfWidths) {
    if (Math.abs(vy) < combinedHalfHeights) {
      if (r1.x > r2.x) {
        if (r1.x >= (options.size - 1) * options.node_size) return;
        r1.x += r1.vx;
      }

      if (r1.x < r2.x) {
        if (r1.x <= 0) return;
        r1.x -= r1.vx;
      }

      if (r1.y > r2.y) {
        if (r1.y >= (options.size - 1) * options.node_size) return;
        r1.y += r1.vy;
      }

      if (r1.y < r2.y) {
        if (r1.y <= 0) return;
        r1.y -= r1.vy;
      }
    }
  }
};

export const ContainSprite = (r1, r2) => {
  let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

  hit = false;

  r1.centerX = r1.x + r1.cwidth / 2;
  r1.centerY = r1.y + r1.cheight / 2;
  r2.centerX = r2.x + r2.width / 2;
  r2.centerY = r2.y + r2.height / 2;

  r1.halfWidth = r1.width / 2;
  r1.halfHeight = r1.height / 2;
  r2.halfWidth = r2.width / 2;
  r2.halfHeight = r2.height / 2;

  vx = r1.centerX - r2.centerX;
  vy = r1.centerY - r2.centerY;

  combinedHalfWidths = r1.halfWidth + r2.halfWidth;
  combinedHalfHeights = r1.halfHeight + r2.halfHeight;

  if (Math.abs(vx) < combinedHalfWidths && Math.abs(vy) < combinedHalfHeights) {
    hit = true;
  }

  return hit;
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
