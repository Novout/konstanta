import './index.css'; // Simple CSS Reset
import Forest from '@/map/forest'; // Import function for map

Forest({
  difficult: 'hard',
  size: 32, // 32x32 map
  node_size: 200, // size any node
  node_addons: 20, // spawn addons
  node_items: 30, // spawn items
  altar_radius: 100, // radius for spawn monsters
  altar_chance: 30 // chance spawn
});
