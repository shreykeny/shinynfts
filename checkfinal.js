const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('finalCsv.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log(results);
        fs.writeFile("veryveryfinalOutput.json", JSON.stringify(results), function (err) {
            if (err) throw err;
            console.log('complete');

        });
    });
