
const fs = require('fs');

async function run() {
    const pdf = await import('pdf-parse');
    const pdfParser = pdf.default;
    let dataBuffer = fs.readFileSync('c:/laragon/www/Legalis-Pro-Nestor-main/public/assets/FORTALEZAS NUEVO.pdf');
    const data = await pdfParser(dataBuffer);
    console.log("--- TEXT CONTENT ---");
    console.log(data.text);
    console.log("--- END CONTENT ---");
}

run();
