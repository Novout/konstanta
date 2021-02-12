import { 
  Container,
  Text,
  TextStyle,
  Graphics,
  Sprite
} from '@/pixi/alias';
import { UIAlpha, InterfaceGlow, FXAA } from '@/utils/webgl';

export const CreateAltarButton = (app, player, item, resources) => {
  const main = new Container();
  main.position.set(player.x - player.width / 2, player.y - player.height / 2);
  main.id_parent = item.id;
  app.stage.addChild(main);

  const container = new Graphics();
  container.beginFill(0x66BD99);
  container.drawRect(0, 0, 256, 64);
  container.endFill();
  container.filters = [UIAlpha().alpha_main];
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
    choice_skills.visible = true;
    const arr = [{
      "id": "resilience",
      "id_cont": 0,
      "id_type": "altar_resilience",
      "title": "Test 1",
      "description": "Test",
      "x": 36
    }, {
      "id": "resilience",
      "id_cont": 1,
      "id_type": "altar_resilience",
      "title": "Test 2",
      "description": "Test",
      "x": 222
    }, {
      "id": "resilience",
      "id_cont": 2,
      "id_type": "altar_resilience",
      "title": "Test 3",
      "description": "Testttt\ntttttttttt\nttttttttttttt\nttttttttttt",
      "x": 412
    }]
  
    arr.forEach(item => {
      main.y = main.y - 200;
    
      const item_container = new Graphics();
      item_container.drawRect(0, 0, 128, 256);
      item_container.endFill();
      item_container.filters = [];
      item_container.x = item_container.x + item.x;
      choice_skills.addChild(item_container);


      const item_sprite = new Sprite(resources.item_unknown.texture);
      item_sprite.width = 64;
      item_sprite.height = 64;
      item_sprite.y = item_sprite.y + 8;
      item_container.addChild(item_sprite);

      const item_title_style = new TextStyle({
        fontFamily: "Poppins",
        fontSize: 24,
        fontWeight: "bold"
      });
      const item_title = new Text(item.title, item_title_style);
      item_title.y = item_title.y + item_sprite.height + 8;
      item_container.addChild(item_title);

      const item_description_style = new TextStyle({
        fontFamily: "Poppins",
        fontSize: 16,
      });
      const item_description = new Text(item.description, item_description_style);
      item_description.y = item_title.y + 40;
      item_container.addChild(item_description);

      const item_button_style = new TextStyle({
        fontFamily: "Poppins",
        fontSize: 18,
        fontWeight: "bold"
      });
      const item_button_text = new Text("Escolher", item_button_style);
      item_button_text.interactive = true;
      item_button_text.buttonMode = true;
      item_button_text.y = choice_skills.height - 30;
      item_button_text.on('click', () => {
        DeleteAltarButton(choice_skills, main);
      });
      item_container.addChild(item_button_text);
    })

    main.choice_skills = true;
    container.visible = false;
  })
  main.visible = false;

  const choice_skills = new Graphics();
  choice_skills.drawRect(0, 0, 512, 512);
  choice_skills.endFill();
  choice_skills.visible = false;
  main.addChild(choice_skills);

  const choice_skills_fake = new Graphics();
  choice_skills_fake.beginFill("0x66BD99");
  choice_skills_fake.drawRect(0, 0, 512, 512);
  choice_skills_fake.endFill();
  choice_skills_fake.filters = [InterfaceGlow(), UIAlpha().alpha_bar];
  choice_skills.addChild(choice_skills_fake);

  item.choice_skills = choice_skills;
  item.ui_altar = main;

  return main;
}

export const DeleteAltarButton = (item, main) => {
  item.visible = false;
  main.visible = false;
  //main.destroy(true);
}