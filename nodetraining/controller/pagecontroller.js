const fs = require('fs');
const path = require('path');
var json_hero = require('../model/hero.js');
const pagecontroller = {
    readFile: () => {
        return new Promise((resolve, reject) => {
            fs.readFile(path.join(__dirname, '../page.html'), 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    // console.log(data);
                    resolve(data);

                }
            });
        });
    },
    // using promise
    getValue: (id) => {
        return new Promise((resolve, reject) => {
            if(id!=null)
            {   let data=json_hero.getAll()
                resolve(data[id]);
            }
            else{
                reject("Error")
            }
        })
    }
    // using normal function
    // getdata: (id) =>
    // {
    //     let json = JSON.stringify(json_hero.getAll()[id]);
    //     return json;
    // }
}

module.exports = pagecontroller;
