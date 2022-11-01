const fs = require('fs');
const path = require('path');
const filecontroller = {
    readFile: () => {
        return new Promise((resolve, reject) => {
            fs.readFile(path.join(__dirname, '../sample.html'), 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    // console.log(data);
                    resolve(data);

                }
            });
        });
    }
}

module.exports = filecontroller;
