import Keyboard from 'pixi.js-keyboard';
import {
  FirstLayerRender,
  SecondLayerRender,
  ThirdLayerRender
} from '@/render/forest';
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
import { CreateAltarButton } from '@/ui/altar';
import { ContainAltarActive } from '@/event/sprite';
import { resources } from '@/pixi/alias';
import { PlayerMouseListener } from '@/event/mouse';
import Forest from '@/defines/loader/forest.json';

let player, items, ui, addons, nodes;

export default (options) => {
  OnlyWEBGL();

  const setup = (loader, resources) => {
    nodes = FirstLayerRender(stage, resources, options);
    addons = SecondLayerRender(stage, resources, nodes, options);
    player = PlayerLayerRender(stage, resources);
    items = ThirdLayerRender(stage, resources, nodes, options);

    CameraInitialFixed(stage, renderer);

    ui = CreateUI(app, player[0], resources);

    items.forEach((item) => {
      if (item.id.includes('altar')) {
        item = CreateAltarButton(app, player[0], item, resources);
      }
    });

    GameLoop(app, loop);
  };

  const [app, stage, renderer] = createContext();

  FullContextSize(renderer, stage);

  LoaderCache(Forest, setup);

  const loop = (delta) => {
    PlayerKeyboardListener(delta, player[0], player[1], options);
    PlayerMouseListener(delta, player[0], player[1], options);

    CameraFixed(stage, player[0]);

    items.forEach((item) => {
      if (item.id.includes('altar') && item.active) {
        ContainAltarActive(app, player[0], item, resources);
      }
      BlockScenarioRIG(player[0], item, options);
    });

    addons.forEach((addon) => {
      if (addon.background.includes('rock'))
        BlockFixedScenarioRIG(player[0], addon, options);
    });

    RenderUI(app, ui, player[0]);
  };
};
