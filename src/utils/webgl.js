import { 
  utils,
} from '@/pixi/alias';

export const OnlyWEBGL = () => {
  if(!utils.isWebGLSupported()){
    throw new Error("WEBGL is required!");
  }
}