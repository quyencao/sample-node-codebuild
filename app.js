const fs = require('fs');

console.log(process.env.environment);

fs.readFile('./file.txt', (err, data) => {
    if (err) {
        return console.log('Error: ', err.message);
    }

    console.log(data.toString());
});