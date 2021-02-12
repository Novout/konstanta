import { Container, TextStyle, Graphics, Sprite, Text } from '@/pixi/alias';

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

  if (options.button) {
    _text.interactive = true;
    _text.buttonMode = true;
  }

  if (options.positional) {
    if (options.positional.absolute) {
      if (options.positional.x) _text.x = options.positional.x;

      if (options.positional.y) _text.y = options.positional.y;
    } else {
      _text.x = _text.x + options.positional?.x;
      _text.y = _text.y + options.positional?.y;
    }
  }

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
    _graphics.x = positional.x;
    _graphics.y = positional.y;
  }

  stage.addChild(_graphics);

  return _graphics;
};

export const KImage = (
  stage,
  item,
  size = { width: 100, height: 100 },
  positional = undefined
) => {
  const _image = new Sprite(item.resources[item.title].texture);
  _image.width = size.width;
  _image.height = size?.height;

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
