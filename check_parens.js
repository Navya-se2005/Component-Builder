const fs = require('fs');
const content = fs.readFileSync('c:\\Users\\sharm\\OneDrive\\Desktop\\new\\componentbuilder\\app\\app\\page.tsx', 'utf8');
let parens = 0;
const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  for (let char of line) {
    if (char === '(') parens++;
    if (char === ')') parens--;
  }
  if (parens < 0) console.log(`NEGATIVE PARENS at line ${i+1}: ${parens}`);
}
console.log(`Final Parens: ${parens}`);
