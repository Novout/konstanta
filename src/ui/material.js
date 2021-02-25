import {
  Container,
  TextStyle,
  Texture,
  Rectangle,
  Graphics,
  Sprite,
  Text,
  SBox
} from '@/pixi/alias';

export const KText = (
  title,
  stage,
  style = {
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: 'bold'
  },
  options = {
    button: false,
    filters: [],
    positional: false
  }
) => {
  const _style = new TextStyle(style);
  const _text = new Text(title, _style);

  _text.filters = options?.filters;
  _text.style.align = 'center';

  if (options.button) {
    _text.interactive = true;
    _text.buttonMode = true;
  }

  if (options.positional) {
    if (options.positional.absolute) {
      if (options.positional.x) _text.x = options.positional.x;

      if (options.positional.y) _text.y = options.positional.y;
    } else if(options.positional.center) {
      _text.x += stage.width / 2;
      _text.y += stage.height / 2;
    }
    else {
      _text.x += options.positional?.x;
      _text.y += options.positional?.y;
    } 
  }
  _text.pivot.x = _text.width / 2;
  _text.pivot.y = _text.height / 2;

  stage.addChild(_text);

  return _text;
};

export const KContainer = (
  stage,
  positional = { x: 1000, y: 1000 },
  append = []
) => {
  const _container = new Container();
  _container.position.set(positional.x, positional.y);
  append?.forEach((item) => {
    _container[item[0]] = item[1];
  });
  stage.addChild(_container);

  return _container;
};

export const KGraphics = (
  stage,
  runner = {
    fake: false,
    fill: 0x66bd99,
    rectangle: [0, 0, 256, 256],
    filters: [],
    button: false
  },
  positional = undefined
) => {
  const _graphics = new Graphics();
  if (runner.fill) _graphics.beginFill(runner.fill);
  if (runner.rectangle)
    _graphics.drawRect(
      runner.rectangle[0],
      runner.rectangle[1],
      runner.rectangle[2],
      runner.rectangle[3]
    );
  if (runner.fill || runner.fake) _graphics.endFill();
  if (runner.filters) _graphics.filters = runner.filters;
  if (runner.button) {
    _graphics.interactive = true;
    _graphics.buttonMode = true;
  }

  if (positional) {
    if (positional.absolute) {
      if (positional.x) _graphics.x = positional.x;
      if (positional.y) _graphics.y = positional.y;
    } else {
      _graphics.x = _graphics.x + positional?.x;
      _graphics.y = _graphics.y + positional?.y;
    }

    if(positional.center) {
      _graphics.pivot.x = runner.rectangle[2] / 2;
      _graphics.pivot.y = runner.rectangle[3] / 2;
    }
  }

  stage.addChild(_graphics);

  return _graphics;
};

export const KImage = (
  stage,
  item,
  resources,
  size = { width: 100, height: 100 },
  positional = undefined
) => {
  const _image = new Sprite(resources[item.sprite.path_inventory].texture);
  _image.width = size.width;
  _image.height = size.height;

  if (positional) {
    if (positional.absolute) {
      if (positional.x) _image.x = positional.x;

      if (positional.y) _image.y = positional.y;
    } else {
      _image.x = _image.x + positional?.x;
      _image.y = _image.y + positional?.y;
    }
  }

  stage.addChild(_image);

  return _image;
};

export const KTileset = (
  stage,
  item,
  resources,
  size = { width: 100, height: 100 },
  positional = undefined,
  path = 'item_inventory_main'
) => {
  let _resource = resources[path];
  const _image = new Sprite(
    new Texture(
      _resource.texture,
      new Rectangle(
        item.sprite.positional[0] * item.sprite.size[0],
        item.sprite.positional[1] * item.sprite.size[1],
        item.sprite.size[0],
        item.sprite.size[1]
      )
    )
  );
  _image.base = item;
  if (!positional.anchor) _image.anchor.set(0.5);
  _image.width = size.width;
  _image.height = size.height;

  if (positional) {
    if (positional.absolute) {
      if (positional.x) _image.x = positional.x;

      if (positional.y) _image.y = positional.y;
    } else {
      _image.x = _image.x + positional?.x;
      _image.y = _image.y + positional?.y;
    }
  }

  stage.addChild(_image);

  return _image;
};

export const KScrollBox = (
  stage,
  positional = { x: 1000, y: 1000 },
  size = { width: 500, height: 200 },
  options = {}
) => {
  const _box = new SBox({ boxWidth: size.width, boxHeight: size.height });

  if (positional) {
    if (positional.absolute) {
      if (positional.x) _box.x = positional.x;
      if (positional.y) _box.y = positional.y;
    } else {
      _box.x = _box.x + positional?.x;
      _box.y = _box.y + positional?.y;
    }
  }

  _box.filters = options?.filters;
  _box.overflowY = options?.scrollableY ? 'auto' : 'hidden';
  _box.overflowX = options?.scrollableX ? 'auto' : 'hidden';

  stage.addChild(_box);

  return _box;
};
