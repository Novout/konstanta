import { 
  Application,
} from '@/pixi/alias';

export const createContext = () => {
  const app = new Application({ 
    width: window.innerWidth, 
    height: window.innerHeight,   
    backgroundAlpha: 0,                    
    antialias: true, 
    transparent: false, 
    resolution: 1
  }); 

  if(!app) {
    throw new Error("Application not created!");
  }

  const stage = app?.stage;
  const renderer = app?.renderer;

  document.body.appendChild(app.view);
  
  return [app, stage, renderer];
}