const fs = require("fs");

const path = "./data/case-studies.json";

function renameFilesWithSlug() {
	const jsonData = fs.readFileSync(path, "utf-8");

	const jsonObject = JSON.parse(jsonData);

	//tu edytujesz obiekt
	jsonObject.forEach((e) => {
		delete e.id;
		return e;
	});

	//koniec edycji i zapis
	const updatedJsonData = JSON.stringify(jsonObject, null, 2);

	fs.writeFileSync(path, updatedJsonData, "utf-8");
}

//wykonaj funkcje

renameFilesWithSlug();
