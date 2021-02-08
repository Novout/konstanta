import Keyboard from 'pixi.js-keyboard';
import { FirstLayerRender, SecondLayerRender, ThirdLayerRender } from '@/render/forest';
import { PlayerLayerRender } from '@/render/player';
import { GameLoop } from '@/render/loop';
import { OnlyWEBGL } from '@/utils/webgl';
import { CameraFixed, CameraInitialFixed } from '@/utils/context';
import { PlayerKeyboardListener } from '@/event/keyboard';
import { LoaderCache } from '@/pixi/loader';
import { createContext } from '@/pixi/application';
import { FullContextSize } from '@/utils/context';
import { BlockRIG } from '@/event/sprite';
import { CreateUI, RenderUI } from '@/ui';

let player, 
    items, 
    ui,
    addons,
    keyboard = {
      press1: undefined
    },
    nodes;

export default () => {
  OnlyWEBGL();

  const setup = (loader, resources) =>  {
    nodes = FirstLayerRender(stage, resources);
    addons = SecondLayerRender(stage, resources, nodes);
    player = PlayerLayerRender(stage, resources);
    items = ThirdLayerRender(stage, resources, nodes);
  
    CameraInitialFixed(stage, renderer);

    ui = CreateUI(app, player[0], resources);
    
    GameLoop(app, loop);
  }

  const [app, stage, renderer] = createContext();
  
  FullContextSize(renderer);
  
  LoaderCache([
    ['player_ide', 'src/assets/rig/player/player_ide.png'],
    ['player_run', 'src/assets/rig/player/player_run.png'],
    ['forest_rock', 'src/assets/map/forest/forest_rock.jpg'],
    ['forest1', 'src/assets/map/forest/forest1.jpg'],
    ['forest2', 'src/assets/map/forest/forest2.jpg'],
    ['tree', 'src/assets/map/forest/tree.png'],
    ['winter_grass1', 'src/assets/map/winter_grass1.png'],
    ['winter_grass2', 'src/assets/map/winter_grass2.png'],
    ['item_unknown', 'src/assets/ui/item_unknown.png']
  ], setup);
  
  const play = (delta) => {
    Keyboard.update();
    PlayerKeyboardListener(delta, player[0], player[1]);

    CameraFixed(stage, player[0]);

    RenderUI(app, ui, player[0]);

    items.forEach(item => {
      BlockRIG(player[0], item);
    });
  }
  
  const loop = (delta) => {
    play(delta);
  }
}
