import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#00ffd3", //efbd48
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./BluePurpleBlackTexture.png",
});

export default state;
