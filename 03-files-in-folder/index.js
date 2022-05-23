const fs = require('fs');
const path = require('path');
const { stdout } = process;

fs.readdir(
  path.join(__dirname, 'secret-folder'), { withFileTypes: true }, (err, infoFiles) => {
    if (err) throw err;
    for (let infoFile of infoFiles) {
      fs.stat(path.join(__dirname, 'secret-folder', infoFile.name), (err, contentsFolder) => {
        if (err) throw err;
        if (contentsFolder.isFile()) {
          stdout.write(`${path.basename(infoFile.name, path.extname(infoFile.name))} - ${path.extname(infoFile.name).slice(1)} - ${contentsFolder.size.toString()}bytes\n`);
        }
      });
    }
  });