const fs = require('fs');
const path = require('path');

const folderPath = __dirname;

const manifestLine = `<link rel="manifest" href="manifest.json" />`;
const metaLine = `<meta name="theme-color" content="#000000" />`;
const swRegisterScript = `
<script>
if ('serviceWorker' in navigator) {
  const basePath = location.pathname.replace(/\\/[^/]*$/, '/') || '/';
  navigator.serviceWorker.register(basePath + 'service-worker.js')
    .then(() => console.log('Service Worker registered!'))
    .catch(err => console.error('Service Worker registration failed:', err));
}
</script>
`;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  let updated = false;

  // Add manifest and meta inside <head> if missing
  if (!content.includes(manifestLine)) {
    content = content.replace(
      /<head([^>]*)>/i,
      `<head$1>\n  ${manifestLine}\n  ${metaLine}`
    );
    updated = true;
  }

  // Add service worker register script before </body> if missing
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
