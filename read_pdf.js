
import fs from 'fs';
import pdf from 'pdf-parse/lib/pdf-parse.js';

let dataBuffer = fs.readFileSync('c:/laragon/www/Legalis-Pro-Nestor-main/public/assets/FORTALEZAS NUEVO.pdf');

try {
    const data = await pdf(dataBuffer);
    console.log("--- TEXT CONTENT ---");
    console.log(data.text);
    console.log("--- END CONTENT ---");
} catch (err) {
    console.error(err);
}
