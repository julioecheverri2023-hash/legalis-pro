
const fs = require('fs');
// const pdf = require('./node_modules/pdf-parse/dist/pdf-parse/web/pdf-parse.umd.js');
// Wait, I will try to use the PDFParse class if available
const pdfParse = require('pdf-parse');

async function run() {
    console.log("PDF Parse keys:", Object.keys(pdfParse));
    // If it's a module, maybe it's pdfParse.PDFParse or similar
}
run();
