import './index.css'; // Simple CSS Reset
import Forest from '@/map/forest'; // Import function for map

Forest({
  difficult: 'hard',
  size: 32, // 32x32 map
  node_size: 200, // size any node
  node_addons: 20, // spawn addons
  node_items: 30, // spawn items
  altar_radius: 100, // radius for spawn monsters
  altar_chance: 30, // chance spawn
  spawn: {
    simple_chest: 30, // default chest chance to special node
    store: 99.0 // 99.9 default chance spawn 0.01 for all fixed interactive
  }
});
