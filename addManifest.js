const fs = require('fs');
const path = require('path');

const folderPath = __dirname;

// Instead of hardcoded <link>, we use script to inject dynamically
const swRegisterScript = `
<script>
  const isGitHub = location.hostname.includes('github.io');
  const base = isGitHub ? '/website' : '';

  const manifest = document.createElement('link');
  manifest.rel = 'manifest';
  manifest.href = base + '/manifest.json';

  const themeMeta = document.createElement('meta');
  themeMeta.name = 'theme-color';
  themeMeta.content = '#000000';

  document.head.appendChild(manifest);
  document.head.appendChild(themeMeta);

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(base + '/service-worker.js')
      .then(() => console.log('✅ Service Worker registered'))
      .catch(err => console.error('❌ Service Worker failed', err));
  }
</script>
`;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;

  // Inject <script> before </body>
  if (!content.includes('navigator.serviceWorker.register')) {
    content = content.replace(/<\/body>/i, `${swRegisterScript}\n</body>`);
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
