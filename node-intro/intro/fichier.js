const fs = require("fs");

fs.readFile("./path/fichier.json", (error, data) => {
  if (error) {
    console.log({ error });
    return;
  }

  console.log({ data: JSON.parse(data) });
});
