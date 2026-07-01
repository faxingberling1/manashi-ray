const fs = require('fs');

let text = fs.readFileSync('components/Publications/economicsPopulationRaw.txt', 'utf8');

// Fix hyphenated newlines: word-\nword -> wordword
text = text.replace(/-\r?\n/g, '');

// Re-join lines in the same paragraph: 
// Replace single newlines with a space, but keep double newlines intact.
let paragraphs = text.split(/\r?\n\r?\n/);
paragraphs = paragraphs.map(p => p.replace(/\r?\n/g, ' '));
text = paragraphs.join('\n\n');

// Escape backticks in text
text = text.replace(/`/g, '\\`');

const exportStr = 'export const economicsPopulationContent = `' + text + '`;\n';
fs.writeFileSync('components/Publications/economicsPopulationContent.ts', exportStr);
console.log('Processed economicsPopulationContent.ts successfully.');
