const express = require('express');
const router = express.Router();
const filecontroller = require('../controller/filecontroller')
// const pagecontroller = require('../controller/pagecontroller')
// GET INDEX
router.get('/', function (req, res) {
    console.log('reached here at the index rout');
    res.end('this is the index page');
});
// about
router.get('/about',async function (req, res) {
    console.log("reached /about");
    // res.end('This is the about page')
    let content=await filecontroller.readFile();
    // console.log(content);
    res.writeHead(200, { "Content-Type": "text" })
    res.write(content)

    res.end()
})

module.exports = router;