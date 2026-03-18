const fs = require('fs');
const content = fs.readFileSync('c:\\Users\\sharm\\OneDrive\\Desktop\\new\\componentbuilder\\app\\app\\page.tsx', 'utf8');

const stack = [];
const lines = content.split('\n');

for (let i = 0; i < content.length; i++) {
  const char = content[i];
  if (char === '{' || char === '(' || char === '[') {
    stack.push({ char, i });
  } else if (char === '}' || char === ')' || char === ']') {
    if (stack.length === 0) {
      console.log(`EXTRA CLOSING at index ${i}: ${char}`);
      continue;
    }
    const last = stack.pop();
    if ((char === '}' && last.char !== '{') ||
        (char === ')' && last.char !== '(') ||
        (char === ']' && last.char !== '[')) {
      console.log(`MISMATCH at index ${i}: ${char} (expected close for ${last.char})`);
    }
  }
}

if (stack.length > 0) {
  console.log('UNCLOSED:');
  stack.forEach(s => {
    // Find line number
    let lineNum = 1;
    let pos = 0;
    for (let l = 0; l < lines.length; l++) {
      if (pos + lines[l].length + 1 > s.i) {
        lineNum = l + 1;
        break;
      }
      pos += lines[l].length + 1;
    }
    console.log(`  ${s.char} at line ${lineNum}`);
  });
} else {
  console.log('Balanced!');
}
