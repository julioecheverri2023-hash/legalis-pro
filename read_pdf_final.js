
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('c:/laragon/www/Legalis-Pro-Nestor-main/public/assets/FORTALEZAS NUEVO.pdf');

pdf(dataBuffer).then(function (data) {
    console.log("--- TEXT CONTENT ---");
    console.log(data.text.substring(0, 2000));
    console.log("--- END CONTENT ---");
}).catch(err => {
    console.error(err);
});
