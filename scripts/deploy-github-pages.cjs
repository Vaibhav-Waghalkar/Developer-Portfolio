const fs = require('fs');
const path = require('path');

// Folders to ignore when copying (relative to project root)
const IGNORE_FOLDERS = new Set([
  '.git',
  'backend',
  '.github',
  'node_modules',
  'scripts',
  'src',
  'public',
  'dist', // We're copying FROM dist, so ignore it
  'screenshots', // Optional: keep screenshots in repo but don't overwrite
]);

// Files to ignore when copying
const IGNORE_FILES = new Set([
  '.gitignore',
  'package.json',
  'package-lock.json',
  'bun.lockb',
  'tsconfig.json',
  'tsconfig.app.json',
  'tsconfig.node.json',
  'vite.config.ts',
  'tailwind.config.ts',
  'postcss.config.js',
  'eslint.config.js',
  'components.json',
  'README.md',
  'LICENSE',
]);

/**
 * Recursively copy files from source to destination
 * @param {string} src - Source directory
 * @param {string} dest - Destination directory
 */
function copyRecursive(src, dest) {
  // Ensure destination directory exists
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    // Skip ignored folders and files
    if (entry.isDirectory()) {
      if (IGNORE_FOLDERS.has(entry.name)) {
        console.log(`Skipping folder: ${entry.name}`);
        continue;
      }
      copyRecursive(srcPath, destPath);
    } else {
      if (IGNORE_FILES.has(entry.name)) {
        console.log(`Skipping file: ${entry.name}`);
        continue;
      }
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied: ${entry.name}`);
    }
  }
}

// Main execution
const distPath = path.resolve(__dirname, '..', 'dist');
const rootPath = path.resolve(__dirname, '..');

// Check if dist folder exists
if (!fs.existsSync(distPath)) {
  console.error('Error: dist folder does not exist. Run "npm run build" first.');
  process.exit(1);
}

console.log('Starting deployment to GitHub Pages...');
console.log(`Copying from: ${distPath}`);
console.log(`Copying to: ${rootPath}`);
console.log('');

// Copy all files from dist to root
copyRecursive(distPath, rootPath);

console.log('');
console.log('✅ Deployment files copied successfully!');
console.log('Next steps:');
console.log('  1. Review changes with: git status');
console.log('  2. Commit: git add . && git commit -m "Deploy to GitHub Pages"');
console.log('  3. Push: git push origin main');

