const fs = import('node:fs');

const directoryName = 'memes';

try {
  if (!fs.existsSync(directoryName)) {
    fs.mkdirSync(directoryName);
  }
} catch (err) {
  console.error(err);
}
