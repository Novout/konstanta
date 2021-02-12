export const BlockScenarioRIG = (r1, r2, options) => {
  let combinedHalfWidths, 
      combinedHalfHeights, 
      vx, 
      vy;

  r1.centerX = r1.x + r1.width / 2;
  r1.centerY = r1.y + r1.height / 2;
  r2.centerX = r2.x + r2.width / 2;
  r2.centerY = r2.y + r2.height / 2;

  r1.halfWidth = r1.cwidth / 2;
  r1.halfHeight = r1.cheight / 2;
  r2.halfWidth = r2.cwidth;
  r2.halfHeight = r2.cheight;

  vx = (r1.centerX - 20) - r2.centerX;
  vy = r1.centerY - (r2.centerY + (r2.height / 2));

  combinedHalfWidths = r1.halfWidth + r2.halfWidth;
  combinedHalfHeights = r1.halfHeight + r2.halfHeight;

  if (Math.abs(vx) < combinedHalfWidths) {
    if (Math.abs(vy) < combinedHalfHeights) {
      if(r1.x > r2.x) { 
        if(r1.x >= (options.size - 1) * options.node_size) return;
        r1.x += r1.vx 
      }

      if(r1.x < r2.x) { 
        if(r1.x <= 0) return;
        r1.x -= r1.vx 
      }

      if(r1.y > r2.y) { 
        if(r1.y >= (options.size - 1) * options.node_size) return;
        r1.y += r1.vy 
      }

      if(r1.y < r2.y) { 
        if(r1.y <= 0) return;
        r1.y -= r1.vy 
      }
    } 
  }
};

export const BlockFixedScenarioRIG = (r1, r2, options) => {
  let combinedHalfWidths, 
      combinedHalfHeights, 
      vx, 
      vy;

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
      if(r1.x > r2.x) { 
        if(r1.x >= (options.size - 1) * options.node_size) return;
        r1.x += r1.vx 
      }

      if(r1.x < r2.x) { 
        if(r1.x <= 0) return;
        r1.x -= r1.vx 
      }

      if(r1.y > r2.y) { 
        if(r1.y >= (options.size - 1) * options.node_size) return;
        r1.y += r1.vy 
      }

      if(r1.y < r2.y) { 
        if(r1.y <= 0) return;
        r1.y -= r1.vy 
      }
    } 
  }
};

export const ContainSprite = (r1, r2) => {
  //Define the variables we'll need to calculate
  let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

  //hit will determine whether there's a collision
  hit = false;

  //Find the center points of each sprite
  r1.centerX = r1.x + r1.cwidth / 2;
  r1.centerY = r1.y + r1.cheight / 2;
  r2.centerX = r2.x + r2.width / 2;
  r2.centerY = r2.y + r2.height / 2;

  //Find the half-widths and half-heights of each sprite
  r1.halfWidth = r1.width / 2;
  r1.halfHeight = r1.height / 2;
  r2.halfWidth = r2.width / 2;
  r2.halfHeight = r2.height / 2;

  //Calculate the distance vector between the sprites
  vx = r1.centerX - r2.centerX;
  vy = r1.centerY - r2.centerY;

  //Figure out the combined half-widths and half-heights
  combinedHalfWidths = r1.halfWidth + r2.halfWidth;
  combinedHalfHeights = r1.halfHeight + r2.halfHeight;

  //Check for a collision on the x axis
  if (Math.abs(vx) < combinedHalfWidths) {

    //A collision might be occurring. Check for a collision on the y axis
    if (Math.abs(vy) < combinedHalfHeights) {

      //There's definitely a collision happening
      hit = true;
    } else {

      //There's no collision on the y axis
      hit = false;
    }
  } else {

    //There's no collision on the x axis
    hit = false;
  }

  //`hit` will be either `true` or `false`
  return hit;
};

export const ContainAltarActive = (app, player, item, resources) => {
  if(ContainSprite(player, item)) {
    item.ui_altar.visible = true;
    if(item.choice_skills.visible) item.ui_altar.position.set(player.x - player.width / 2, player.y - (item.choice_skills.height / 4));
    else item.ui_altar.position.set(player.x - player.width / 4, player.y + 200);
  } else {
    item.ui_altar.visible = false;
  }
}