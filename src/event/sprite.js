export const BlockScenarioRIG = (r1, r2) => {
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
        if(r1.x >= 63 * 150) return;
        r1.x += r1.vx 
      }

      if(r1.x < r2.x) { 
        if(r1.x <= 0) return;
        r1.x -= r1.vx 
      }

      if(r1.y > r2.y) { 
        if(r1.y >= 63 * 150) return;
        r1.y += r1.vy 
      }

      if(r1.y < r2.y) { 
        if(r1.y <= 0) return;
        r1.y -= r1.vy 
      }
    } 
  }
};

export const BlockFixedScenarioRIG = (r1, r2) => {
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
        if(r1.x >= 63 * 150) return;
        r1.x += r1.vx 
      }

      if(r1.x < r2.x) { 
        if(r1.x <= 0) return;
        r1.x -= r1.vx 
      }

      if(r1.y > r2.y) { 
        if(r1.y >= 63 * 150) return;
        r1.y += r1.vy 
      }

      if(r1.y < r2.y) { 
        if(r1.y <= 0) return;
        r1.y -= r1.vy 
      }
    } 
  }
};