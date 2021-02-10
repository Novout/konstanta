import { 
  Container,
  Text,
  TextStyle,
  Graphics
} from '@/pixi/alias';
import { UIAlpha, InterfaceGlow, FXAA } from '@/utils/webgl';

export const CreateAltarButton = (app, player, item) => {
  const main = new Container();
  main.position.set(player.x - player.width / 2, player.y - player.height / 2);
  main.id_parent = item.id;
  main.filters = [InterfaceGlow(), UIAlpha().alpha_main];
  app.stage.addChild(main);

  let container = new Graphics();
  container.beginFill(0x66BD99);
  container.drawRect(0, 0, 256, 64);
  container.endFill();
  main.addChild(container);

  const style = new TextStyle({
    fontFamily: "Poppins",
    fontSize: 36,
    fontWeight: "bold"
  });
  const button = new Text("Ativar Altar", style);
  button.interactive = true;
  button.buttonMode = true;
  button.filters = [FXAA()];
  button.x = button.x + main.width / 11;
  button.y = button.y + main.height / 10;
  container.addChild(button);
  button.on('click', () => {
    item.active = false;
    main.visible = false;
    DeleteAltarButton(main);
  })
  main.visible = false;

  item.ui_altar = main;

  return main;
}

export const DeleteAltarButton = (main) => {
  main.destroy(true);
}