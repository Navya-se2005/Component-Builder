const fs = require('fs');
const content = fs.readFileSync('c:\\Users\\sharm\\OneDrive\\Desktop\\new\\componentbuilder\\app\\app\\page.tsx', 'utf8');
const indices = [48975, 48977, 49008];
indices.forEach(idx => {
  console.log(`Index ${idx}: ${content.substring(idx - 20, idx + 20)}`);
});
