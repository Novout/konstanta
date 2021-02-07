export const GameLoop = ({ ticker }, loop) => {
  ticker.add(delta => loop(delta));
}