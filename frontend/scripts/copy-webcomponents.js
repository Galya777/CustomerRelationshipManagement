import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Ensure public directory exists
const publicDir = path.join(__dirname, '../public/webcomponents');
await fs.ensureDir(publicDir);

// Copy WebComponents polyfill
await fs.copy(
  path.join(__dirname, '../node_modules/@webcomponents/webcomponentsjs'),
  path.join(publicDir, 'webcomponentsjs')
);

console.log('WebComponents polyfill copied to public directory');
