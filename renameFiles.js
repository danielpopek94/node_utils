const jsony = require("./data/case-studies.json");
const fs = require("fs");
const path = require("path");

const projects = [...jsony];

function renameFilesWithSlug(project) {
	const folderPath = ".node rename.js/public/images/project/"; // Zmień na właściwą ścieżkę
	const id = project.id;
	const slug = project.slug;

	const oldFileName = `${id}.jpg`;
	const newFileName = `${slug}.jpg`;

	const oldFilePath = path.join(folderPath, oldFileName);
	const newFilePath = path.join(folderPath, newFileName);

	// Zmień nazwę pliku na dysku
	fs.renameSync(oldFilePath, newFilePath);
	console.log(`Zmieniono nazwę pliku "${oldFileName}" na "${newFileName}"`);
}

//wykonaj funkcje

for (let i = 1; i <= 52; i++) {
	renameFilesWithSlug(projects[i]);
}
