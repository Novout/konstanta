import {
  FirstLayerRender,
  SecondLayerRender,
  ThirdLayerRender
} from '@/render/forest';
import {
  ContainStoreActive,
  ContainAltarActive,
  ContainChestActive
} from '@/event/global/active';
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
import { CreateChestButton } from '@/ui/chests';
import { resources } from '@/pixi/alias';
import { PlayerMouseListener } from '@/event/mouse';
import { setBackground } from '@/utils/dom';
import { PlayerKeyboardWatcher } from '@/watcher/keyboard';
import { PlayerMouseWatcher, WindowScrollWatcher } from '@/watcher/mouse';
import { CreateStoreButton } from '@/ui/store';
import * as Debugger from '@/debugger';
import FOREST from '@/defines/loader/forest.json';
import SKILLS from '@/defines/loader/skills.json';
import ITEMS from '@/defines/loader/items.json';

let player,
  items,
  ui,
  addons,
  nodes,
  debug,
  reactive = [];

export default (context, options) => {
  OnlyWEBGL();

  const setup = (loader, resources) => {
    nodes = FirstLayerRender(container, resources, options);
    addons = SecondLayerRender(container, resources, nodes, options);
    player = PlayerLayerRender(container, resources);
    items = ThirdLayerRender(container, resources, nodes, options);

    CameraInitialFixed(container, renderer);

    ui = CreateUI(container, player[0], resources);

    WindowScrollWatcher(container);
    PlayerKeyboardWatcher(player[0]);
    PlayerMouseWatcher(app, player[0]);

    items.forEach((item) => {
      if (item.id.includes('altar')) {
        item = CreateAltarButton(container, player[0], item, resources);
      } else if (item.id.includes('house')) {
        item = CreateStoreButton(container, player[0], item, resources);
      }
    });

    addons.forEach((addon) => {
      if (addon.id.includes('chests')) {
        addon = CreateChestButton(container, player[0], addon, resources, app);
      }
    });

    debug = Debugger.Create(container, player);

    Debugger.Success('Mapa Floresta foi inicializado!');

    setBackground('forest');

    GameLoop(app, loop);
  };

  const [app, stage, renderer, container] = createContext(context);

  FullContextSize(renderer, container);

  LoaderCache([...FOREST, ...SKILLS, ...ITEMS], setup);

  const loop = (delta) => {
    PlayerKeyboardListener(delta, player[0], player[1], options);
    PlayerMouseListener(delta, player[0], player[1], options);

    items.forEach((item) => {
      if (item.id.includes('altar') && item.active) {
        ContainAltarActive(app, player[0], item, resources);
      } else if (item.id.includes('house') && !player.interactive_ui) {
        ContainStoreActive(app, player[0], item, resources);
      }
      BlockScenarioRIG(player[0], item, options);
    });

    addons.forEach((addon) => {
      if (addon.background.includes('rock'))
        BlockFixedScenarioRIG(player[0], addon, options);
      else if (
        addon.id.includes('chests') &&
        addon.active &&
        !player.interactive_ui
      )
        ContainChestActive(app, player[0], addon, resources);
    });

    RenderUI(container, ui, player[0]);
    CameraFixed(container, player[0]);
    Debugger.RenderFrameRate(debug, player[0], renderer);
  };
};
