const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function extractPages() {
  const srcPath = path.join(__dirname, '../public/Publications/RC 32 Newsletter - Summer & Fall 2021.pdf');
  const destPath = path.join(__dirname, '../public/Publications/Kolkata_Under_Covid.pdf');

  const srcBytes = fs.readFileSync(srcPath);
  const srcDoc = await PDFDocument.load(srcBytes);

  const destDoc = await PDFDocument.create();

  // The printed pages 10-13 correspond to PDF indices 10, 11, 12, 13
  const copiedPages = await destDoc.copyPages(srcDoc, [10, 11, 12, 13]);
  copiedPages.forEach((page) => {
    destDoc.addPage(page);
  });

  const destBytes = await destDoc.save();
  fs.writeFileSync(destPath, destBytes);
  console.log('Successfully extracted pages to Kolkata_Under_Covid.pdf');
}

extractPages().catch(console.error);
