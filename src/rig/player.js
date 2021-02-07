export const createPlayer = () => {
  // localStorage request;
  return {
    //default
    id: 'player',
    y: 1500,
    x: 1500,
    vx: 4,
    vy: 4,
    // habilities
    level: 1,
    HP: 10,
    CA: 0, // % for ignore attack
    inventory: {
      primary_weapon: undefined,
      second_weapon: undefined,
      activate: undefined,
      artefact: undefined
    },
    //general
    resources: {
      gold: 0,
      wood: 0,
      rock: 0,
      leather: 0,
      efrium: 0,
      eletronic_circuit: 0
    }
  }
}