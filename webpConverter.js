//need sharp: npm install sharp

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

function convertImagesToWebp(directory) {
	fs.readdir(directory, { withFileTypes: true }, (err, files) => {
		if (err) {
			console.error("Błąd podczas czytania katalogu:", err);
			return;
		}

		files.forEach((file) => {
			const currentPath = path.join(directory, file.name);

			if (file.isDirectory()) {
				convertImagesToWebp(currentPath);
			} else if (/\.(jpg|jpeg|png)$/i.test(file.name)) {
				const pathElements = currentPath.split(".");
				pathElements.pop();
				pathElements.join(".");
				const outputPath = pathElements + ".webp";
				sharp(currentPath).toFile(outputPath, (err, info) => {
					if (err) {
						console.error("Błąd podczas konwersji obrazu:", err);
					} else {
						console.log("Obraz został przekonwertowany:", outputPath);
					}
				});
			}
		});
	});
}

//change me
const startDirectory = "C:/Users/user/Desktop";

convertImagesToWebp(startDirectory);
