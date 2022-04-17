export function svgsprite() {
  return app.gulp
    .src(`${app.path.src.svgIcons}`)
    .pipe(app.gulp.dest(`${app.path.build.svgSprite}`));
}
