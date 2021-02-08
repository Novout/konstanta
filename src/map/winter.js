import Keyboard from 'pixi.js-keyboard';
import { FirstLayerRender, SecondLayerRender, ThirdLayerRender } from '@/render/winter';
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

    ui = CreateUI(app, player, resources);
    
    GameLoop(app, loop);
  }

  const [app, stage, renderer] = createContext();
  
  FullContextSize(renderer);
  
  LoaderCache([
    ['snowpack', 'src/assets/rig/snowpack.png'],
    ['winter1', 'src/assets/map/winter1.jpg'],
    ['winter_base', 'src/assets/map/winter2.jpg'],
    ['winter3', 'src/assets/map/winter3.jpg'],
    ['twig', 'src/assets/map/twig.png'],
    ['winter_grass1', 'src/assets/map/winter_grass1.png'],
    ['winter_grass2', 'src/assets/map/winter_grass2.png'],
    ['item_unknown', 'src/assets/ui/item_unknown.png']
  ], setup);
  
  const play = (delta) => {
    Keyboard.update();
    PlayerKeyboardListener(delta, player);

    CameraFixed(stage, player);

    RenderUI(app, ui, player);

    items.forEach(item => {
      BlockRIG(player, item);
    });
  }
  
  const loop = (delta) => {
    play(delta);
  }
}
