const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function fixQuotes(dirPath) {
  const files = fs.readdirSync(dirPath);
  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixQuotes(fullPath);
    } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;

      // Fix quote mismatches: "@/... ' -> '@/... '
      content = content.replace(/"(@\/Components\/[^"']+)'/g, "'$1'");
      content = content.replace(/"(@\/assets\/[^"']+)'/g, "'$1'");
      content = content.replace(/"(@\/data\/[^"']+)'/g, "'$1'");
      
      // Some may have started with ' and ended with ' originally:
      // wait, if I put " it means it is -> '"@/Components/...' which is matched by /"/ 
      // replace: "@/... '  => '@/... ' OR "@/... "
      // Let's just make them all double quotes if they start with double quote and end with single quote
      content = content.replace(/"(@\/Components\/[^"']+)'/g, '"$1"');
      content = content.replace(/"(@\/assets\/[^"']+)'/g, '"$1"');
      content = content.replace(/"(@\/data\/[^"']+)'/g, '"$1"');
      
      // Wait, let's fix the start and end carefully.
      // E.g., import Header1 from "@/Components/Header/Header1';
      // Here, /"(@\/Components\/[^']+)'/ matches "@/Components/Header/Header1' .
      // Let's replace with "$1"
      content = content.replace(/"(@\/Components\/[^"'\n]+)'/g, '"$1"');
      content = content.replace(/"(@\/assets\/[^"'\n]+)'/g, '"$1"');
      content = content.replace(/"(@\/data\/[^"'\n]+)'/g, '"$1"');

      // Also fix missed imports that still point to @/app/Components
      content = content.replace(/@\/app\/Components\//g, '@/Components/');
      content = content.replace(/@\/app\/assets\//g, '@/assets/');
      content = content.replace(/@\/app\/data\//g, '@/data/');

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        console.log(`Fixed quotes/imports in ${fullPath}`);
      }
    }
  });
}

fixQuotes(srcDir);
console.log("Quotes fixed.");
