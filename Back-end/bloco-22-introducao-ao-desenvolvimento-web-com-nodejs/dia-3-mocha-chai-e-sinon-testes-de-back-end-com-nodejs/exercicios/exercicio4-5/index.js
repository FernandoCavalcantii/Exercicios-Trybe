const fs = require("fs");
const writeOnFile = (fileName, content) => {
  const path = `${__dirname}/${fileName}`;
  fs.writeFileSync(path, content, (err) => {
    if (err) console.error(err.message);
  });
  return "ok";
};

writeOnFile("oi.txt", "dale");
module.exports = writeOnFile;
