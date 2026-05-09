const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Dhammika\\.gemini\\antigravity\\brain\\e2d93d95-1c4b-41fc-9034-dc67af84a52a';
const destDir = 'c:\\Users\\Dhammika\\Desktop\\Travelagent website\\assets\\images';

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.png'));

for (const file of files) {
  fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
  console.log(`Copied ${file}`);
}
