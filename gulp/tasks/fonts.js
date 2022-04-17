import fs from "fs";

export function createFonts() {
  return app.gulp
    .src(app.path.src.fonts)
    .pipe(app.gulp.dest(app.path.build.fonts));
}

export function generateFonts() {
  fs.readdir(app.path.build.fonts, function (err, fonts) {
    if (fonts) {
      const fontsFile = `${app.path.srcFolder}/scss/styles/base/fonts.scss`;

      if (!fs.existsSync(fontsFile)) {
        fs.writeFile(fontsFile, "", () => {});

        let previousFontName;
        for (var i = 0; i < fonts.length; i++) {
          const font = fonts[i].split(".")[0];

          if (previousFontName !== font) {
            const fontArr = font.split("-");

            const [fontName, fontWeight] = fontArr;
            let fontWeightNumber;

            switch (fontWeight.toLowerCase()) {
              case "light":
                fontWeightNumber = 300;
                break;
              case "regular":
                fontWeightNumber = 400;
                break;
              case "medium":
                fontWeightNumber = 500;
                break;
              case "semibold":
                fontWeightNumber = 600;
                break;
              case "bold":
                fontWeightNumber = 700;
                break;
            }
            console.log(fontWeightNumber);

            fs.appendFile(
              fontsFile,
              `@font-face {
  font-family: "${fontName}";
  src: url("../fonts/${font}.woff2") format("woff2"),
        url("../fonts/${font}.woff") format("woff");
  font-weight: ${fontWeightNumber || 300};
  font-style: normal;
  font-display: swap;
}

`,
              () => {}
            );

            previousFontName = font;
          }
        }
      } else {
        console.log("Файл fonts.scss уже существует. Его нужно удалить.");
      }
    }
  });

  return app.gulp.src(`${app.path.srcFolder}`);
}
