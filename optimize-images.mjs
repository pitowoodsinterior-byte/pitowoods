import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dir = path.join(__dirname, 'public', 'images');
const files = fs.readdirSync(dir);

async function processImages() {
  for (const file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')) {
      const filePath = path.join(dir, file);
      const tempPath = filePath + '.tmp';
      try {
        await sharp(filePath)
          .resize(1200, null, { withoutEnlargement: true })
          .jpeg({ quality: 75 })
          .toFile(tempPath);
        fs.renameSync(tempPath, filePath);
        console.log(`Optimized: ${file}`);
      } catch (e) {
        console.error(`Failed to optimize ${file}: `, e);
      }
    }
  }
}

processImages().then(() => console.log('Image optimization complete!')).catch(console.error);
