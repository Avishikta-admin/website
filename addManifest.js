const fs = require('fs');
const path = require('path');

const folderPath = __dirname;

const manifestLine = `<link rel="manifest" href="/manifest.json" />`;
const metaLine = `<meta name="theme-color" content="#000000" />`;
const swRegisterScript = `
<script>
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('Service Worker registered!'))
    .catch(err => console.error('Service Worker registration failed:', err));
}
</script>
`;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;

  // Inject manifest and meta in <head>
  if (!content.includes(manifestLine)) {
    content = content.replace(
      /<head([^>]*)>/i,
      `<head$1>\n  ${manifestLine}\n  ${metaLine}`
    );
    updated = true;
  }

  // Inject service worker script before </body>
  if (!content.includes('navigator.serviceWorker.register')) {
    content = content.replace(
      /<\/body>/i,
      `${swRegisterScript}\n</body>`
    );
    updated = true;
  }

  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated: ${filePath}`);
  } else {
    console.log(`🔁 Already up to date: ${filePath}`);
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

