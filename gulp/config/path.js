import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/img/`,
    svgSprite: `${buildFolder}/img/sprite/`,
    fonts: `${buildFolder}/fonts/`,
  },
  src: {
    html: `${srcFolder}/*.pug`,
    scss: `${srcFolder}/scss/index.scss`,
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/img/**/*.{jpg,png,svg,gif,ico,webp}`,
    fonts: `${srcFolder}/fonts/*.{woff,woff2}`,
    svg: `${srcFolder}/img/**/*.svg`,
    svgIcons: `${srcFolder}/svg/*.svg`,
  },
  watch: {
    html: `${srcFolder}/**/*.pug`,
    scss: `${srcFolder}/scss/**/*.scss`,
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,png,svg,gif,ico,webp}`,
    svgIcons: `${srcFolder}/svg/*.svg`,
    fonts: `${srcFolder}/fonts/*.{woff,woff2}`,
  },
  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder,
};
