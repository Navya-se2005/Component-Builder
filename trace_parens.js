const fs = require('fs');
const content = fs.readFileSync('c:\\Users\\sharm\\OneDrive\\Desktop\\new\\componentbuilder\\app\\app\\page.tsx', 'utf8');
const lines = content.split('\n');
let p = 0;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  let lineP = 0;
  for (let c of line) {
    if (c === '(') { p++; lineP++; }
    if (c === ')') { p--; lineP--; }
  }
  console.log(`${String(i+1).padStart(4, ' ')}: ${String(p).padStart(3, ' ')} | ${line.substring(0, 80)}`);
}
