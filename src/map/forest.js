import Keyboard from 'pixi.js-keyboard';
import Mouse from 'pixi.js-mouse';
import { FirstLayerRender, SecondLayerRender, ThirdLayerRender } from '@/render/forest';
import { PlayerLayerRender } from '@/render/player';
import { GameLoop } from '@/render/loop';
import { OnlyWEBGL } from '@/utils/webgl';
import { CameraFixed, CameraInitialFixed } from '@/utils/context';
import { PlayerKeyboardListener } from '@/event/keyboard';
import { LoaderCache } from '@/pixi/loader';
import { createContext } from '@/pixi/application';
import { FullContextSize } from '@/utils/context';
import { BlockScenarioRIG, BlockFixedScenarioRIG } from '@/event/sprite';
import { CreateUI, RenderUI } from '@/ui';

let player, 
    items, 
    ui,
    addons,
    keyboard = {
      press1: undefined
    },
    nodes;

export default (options) => {
  OnlyWEBGL();

  const setup = (loader, resources) =>  {
    nodes = FirstLayerRender(stage, resources, options);
    addons = SecondLayerRender(stage, resources, nodes, options);
    player = PlayerLayerRender(stage, resources);
    items = ThirdLayerRender(stage, resources, nodes, options);
  
    CameraInitialFixed(stage, renderer);

    ui = CreateUI(app, player[0], resources);
    
    GameLoop(app, loop);
  }

  const [app, stage, renderer] = createContext();
  
  FullContextSize(renderer);
  
  LoaderCache([
    ['player_ide', 'src/assets/rig/player/player_ide.png'],
    ['player_run', 'src/assets/rig/player/player_run.png'],
    ['player_attack', 'src/assets/rig/player/player_attack.png'],
    ['forest_rock', 'src/assets/map/forest/forest_rock.jpg'],
    ['forestrock1', 'src/assets/map/forest/forestrock1.png'],
    ['forest1', 'src/assets/map/forest/forest1.jpg'],
    ['forest2', 'src/assets/map/forest/forest2.jpg'],
    ['forestgrass1', 'src/assets/map/forest/forestgrass1.png'],
    ['forestgrass2', 'src/assets/map/forest/forestgrass2.png'],
    ['foreststone1', 'src/assets/map/forest/foreststone1.png'],
    ['foreststone2', 'src/assets/map/forest/foreststone2.png'],
    ['altar', 'src/assets/map/generics/altar.png'],
    ['tree', 'src/assets/map/forest/tree.png'],
    ['tree2', 'src/assets/map/forest/tree2.png'],
    ['item_unknown', 'src/assets/ui/item_unknown.png']
  ], setup);
  
  const loop = (delta) => {
    Keyboard.update();
    PlayerKeyboardListener(delta, player[0], player[1], options);

    CameraFixed(stage, player[0]);

    RenderUI(app, ui, player[0]);

    items.forEach(item => {
      BlockScenarioRIG(player[0], item);
    });

    addons.forEach(addon => {
      if(addon.background.includes('rock')) BlockFixedScenarioRIG(player[0], addon);
    })
  }
}
