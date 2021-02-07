import Keyboard from 'pixi.js-keyboard';
import { FirstLayerRender, SecondLayerRender } from '@/render/winter';
import { PlayerLayerRender } from '@/render/player';
import { GameLoop } from '@/render/loop';
import { OnlyWEBGL } from '@/utils/webgl';
import { CameraFixed, CameraInitialFixed } from '@/utils/context';
import { PlayerKeyboardListener } from '@/event/keyboard';
import { LoaderCache } from '@/pixi/loader';
import { createContext } from '@/pixi/application';
import { FullContextSize } from '@/utils/context';
import { BlockRIG } from '@/event/sprite';

let player, 
    items, 
    nodes;

export default () => {
  OnlyWEBGL();

  const setup = (loader, resources) =>  {
    nodes = FirstLayerRender(stage, resources);
    items = SecondLayerRender(stage, resources, nodes);
    player = PlayerLayerRender(stage, resources);
  
    CameraInitialFixed(stage, renderer);
    
    GameLoop(app, loop);
  }

  const [app, stage, renderer] = createContext();
  
  FullContextSize(renderer);
  
  LoaderCache([
    ['snowpack', 'src/assets/rig/snowpack.png'],
    ['pixijs', 'src/assets/rig/pixi.png'],
    ['winter1', 'src/assets/map/winter1.png'],
    ['winter2', 'src/assets/map/winter2.jpg'],
    ['winter3', 'src/assets/map/winter3.jpg'],
    ['twig', 'src/assets/map/twig.png'],
  ], setup);
  
  const play = (delta) => {
    PlayerKeyboardListener(delta, player);
  }
  
  const loop = (delta) => {
    play(delta);
  
    CameraFixed(stage, player);

    items.forEach(item => {
      BlockRIG(player, item);
    });
    
    Keyboard.update();
  }
}
