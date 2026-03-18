const fs = require('fs');
const content = fs.readFileSync('c:\\Users\\sharm\\OneDrive\\Desktop\\new\\componentbuilder\\app\\app\\page.tsx', 'utf8');
const lines = content.split('\n');
let p = 0;
for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  for (let c of line) {
    if (c === '(') p++;
    if (c === ')') p--;
  }
  process.stdout.write(`Line ${i+1}: Balance ${p}\r`);
}
console.log(`\nFinal balance: ${p}`);
if (p > 0) {
  p = 0;
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let startP = p;
    for (let c of line) {
       if (c === '(') p++;
       if (c === ')') p--;
    }
    if (p > startP) {
      // Something opened on this line
      // Check if p EVER goes back to 0 or startP
      let closedLater = false;
      let tempP = p;
      for (let j = i + 1; j < lines.length; j++) {
        for (let c of lines[j]) {
          if (c === '(') tempP++;
          if (c === ')') tempP--;
        }
        if (tempP === startP) { closedLater = true; break; }
      }
      if (!closedLater) {
        console.log(`POTENTIAL OPEN PAREN ON LINE ${i+1}: ${line}`);
      }
    }
  }
}
