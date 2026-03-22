import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, 'src');
const publicImagesDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach((file) => {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        arrayOfFiles.push(path.join(dirPath, file));
      }
    }
  });

  return arrayOfFiles;
}

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
        return;
      }
      const stream = fs.createWriteStream(filepath);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => reject(err));
    });
  });
};

async function processFiles() {
  const files = getAllFiles(srcDir);
  const urlRegex = /https:\/\/images\.(pexels|unsplash)\.com\/[^\s'"]+/g;
  
  const uniqueUrls = new Set();
  const fileMatches = [];

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    const matches = content.match(urlRegex);
    if (matches) {
      matches.forEach(m => uniqueUrls.add(m));
      fileMatches.push({ file, content, matches });
    }
  }

  const urlMap = {};
  let counter = 1;

  for (const url of uniqueUrls) {
    console.log(`Downloading ${url}...`);
    // Create a simple name
    let ext = 'jpg';
    if (url.includes('.jpeg')) ext = 'jpeg';
    if (url.includes('.png')) ext = 'png';
    const filename = `img_new_${counter++}.${ext}`;
    const filepath = path.join(publicImagesDir, filename);
    const localUrl = `/images/${filename}`;
    
    try {
      await downloadImage(url, filepath);
      urlMap[url] = localUrl;
      console.log(`Saved as ${localUrl}`);
    } catch (err) {
      console.error(`Error downloading ${url}:`, err.message);
    }
  }

  // Replace in files
  for (const { file, content, matches } of fileMatches) {
    let newContent = content;
    let modified = false;
    for (const match of matches) {
      if (urlMap[match]) {
        newContent = newContent.replace(new RegExp(match.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), urlMap[match]);
        modified = true;
      }
    }
    if (modified) {
      fs.writeFileSync(file, newContent, 'utf8');
      console.log(`Updated ${file}`);
    }
  }
}

processFiles().then(() => console.log('Done!')).catch(console.error);
