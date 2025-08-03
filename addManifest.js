const fs = require('fs');
const path = require('path');

// Use current folder (where script is located)
const folderPath = __dirname;

const manifestLine = `<link rel="manifest" href="/manifest.json" />`;
const metaLine = `<meta name="theme-color" content="#000000" />`;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  if (!content.includes(manifestLine)) {
    content = content.replace(
      /<head([^>]*)>/i,
      `<head$1>\n  ${manifestLine}\n  ${metaLine}`
    );
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated: ${filePath}`);
  } else {
    console.log(`🔁 Already contains manifest: ${filePath}`);
  }
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (file.endsWith('.html')) {
      processFile(fullPath);
    }
  });
}

walkDir(folderPath);
