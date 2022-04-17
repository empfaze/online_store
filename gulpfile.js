import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";
import ghPages from "gulp-gh-pages";

global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path,
  gulp,
  plugins,
};

import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { generateFonts, createFonts } from "./gulp/tasks/fonts.js";
import { svgsprite } from "./gulp/tasks/svgSprite.js";

function watchFiles() {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
}

const fonts = gulp.series(createFonts, generateFonts);
const mainTasks = gulp.series(
  fonts,
  gulp.parallel(html, scss, js, images, svgsprite)
);

export const dev = gulp.series(
  reset,
  mainTasks,
  gulp.parallel(watchFiles, server)
);
export const build = gulp.series(reset, mainTasks);

gulp.task("deploy", () => gulp.src("./dist/**/*").pipe(ghPages()));

gulp.task("default", dev);
