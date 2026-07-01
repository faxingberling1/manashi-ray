const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('public/Publications/Experiences of Empowerment and Constraints - Narratives of Indian Women Transnational Entrepreneurs.pdf');

pdf(dataBuffer).then(function(data) {
    // raw text
    let text = data.text;
    
    // Clean up text
    // Replace single newlines with a space, but keep double newlines intact.
    // Also remove the header/footer artifacts if possible, or just let them be.
    text = text.replace(/-\r?\n/g, '');
    let paragraphs = text.split(/\r?\n\r?\n/);
    paragraphs = paragraphs.map(p => p.replace(/\r?\n/g, ' '));
    text = paragraphs.join('\n\n');

    // Escape backticks in text
    text = text.replace(/`/g, '\\`');

    const exportStr = 'export const experiencesContent = `' + text + '`;\n';
    fs.writeFileSync('components/Publications/experiencesContent.ts', exportStr);
    console.log('Processed experiencesContent.ts successfully.');
}).catch(err => {
    console.error('Error parsing PDF:', err);
});
