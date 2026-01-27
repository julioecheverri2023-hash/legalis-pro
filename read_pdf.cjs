
const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('c:/laragon/www/Legalis-Pro-Nestor-main/public/assets/FORTALEZAS NUEVO.pdf');

pdf(dataBuffer).then(function (data) {
    console.log("--- TEXT CONTENT ---");
    console.log(data.text);
    console.log("--- END CONTENT ---");
}).catch(err => {
    console.error(err);
});
