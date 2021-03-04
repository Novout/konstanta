import Controller from 'pixi-controller';
import {
  FirstLayerRender,
  SecondLayerRender,
  ThirdLayerRender
} from '@/render/forest';
import {
  ContainStoreActive,
  ContainAltarActive,
  ContainChestActive,
  ContainAreaActive
} from '@/event/global/active';
import { LoadPlayerLayerRender, PlayerLayerRender } from '@/render/player';
import { GameLoop } from '@/render/loop';
import { CameraFixed, CameraInitialFixed, isInitialMap } from '@/utils/context';
import { PlayerKeyboardListener } from '@/event/keyboard';
import { LoaderCache } from '@/pixi/loader';
import { createMap } from '@/pixi/application';
import { FullContextSize } from '@/utils/context';
import { BlockScenarioRIG, BlockFixedScenarioRIG } from '@/event/sprite';
import { CreateUI, RenderUI } from '@/ui';
import { CreateAltarButton } from '@/ui/altar';
import { CreateChestButton } from '@/ui/chests';
import { PlayerMouseListener } from '@/event/mouse';
import { setBackground } from '@/utils/dom';
import { PlayerKeyboardWatcher } from '@/watcher/keyboard';
import { PlayerMouseWatcher, WindowScrollWatcher } from '@/watcher/mouse';
import { CreateStoreButton } from '@/ui/store';
import { CreateAreaButton } from '@/ui/area';
import { saveAll } from '@/serialize';
import { LoaderShared } from '@/pixi/alias';
import * as Debugger from '@/debugger';
import FOREST from '@/defines/loader/forest.json';
import SKILLS from '@/defines/loader/skills.json';
import ITEMS from '@/defines/loader/items.json';

let player, items, ui, addons, nodes, debug, area;

export default (context, options) => {
  const setup = (loader, resources) => {
    nodes = FirstLayerRender(container, resources, options);
    addons = SecondLayerRender(container, resources, nodes, options);
    if (!isInitialMap(context)) {
      player = LoadPlayerLayerRender(container, resources, context);
    } else {
      player = PlayerLayerRender(container, resources);
    }
    items = ThirdLayerRender(container, resources, nodes, options);

    CameraInitialFixed(container, renderer);

    ui = CreateUI(container, player[0], resources);

    WindowScrollWatcher(container, context);
    PlayerKeyboardWatcher(player[0], context);
    PlayerMouseWatcher(app, player[0], context);

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
    area = CreateAreaButton(app, container, player[0], context, options);

    debug = Debugger.Create(container, player);

    Debugger.Success(
      `Mapa Floresta ${context.chunk[0]} / ${context.chunk[1]} foi inicializado!`
    );

    setBackground('forest');

    saveAll({ player: player[0] }, context);

    GameLoop(app, loop);
  };

  const [app, stage, renderer, container] = createMap(context);

  FullContextSize(renderer, container, context);

  const loop = (delta) => {
    PlayerKeyboardListener(delta, player[0], player[1], options);
    PlayerMouseListener(delta, player[0], player[1], options);

    items.forEach((item) => {
      if (item.id.includes('altar') && item.active) {
        ContainAltarActive(app, player[0], item);
      } else if (item.id.includes('house') && !player.interactive_ui) {
        ContainStoreActive(app, player[0], item);
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
        ContainChestActive(app, player[0], addon);
    });

    ContainAreaActive(player[0], area, options);

    RenderUI(container, ui, player[0]);
    CameraFixed(container, player[0]);
    Debugger.RenderFrameRate(debug, player[0], renderer);

    Controller.update();
  };

  if (isInitialMap(context)) {
    LoaderCache([...FOREST, ...SKILLS, ...ITEMS], setup);
  } else {
    LoaderShared.load(setup);
  }
};
