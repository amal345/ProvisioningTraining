const express = require('express');
const router = express.Router();

const pagecontroller = require('../controller/pagecontroller')
router.get('/:id',async function (req, res) {
    let val=req.params.id;
    let data=await pagecontroller.getValue(val);
    console.log(data);
    res.end(JSON.stringify(data));
})

// router.get('/:id',async function (req, res) {
//         let val=req.params.id;
//         let data= pagecontroller.getdata(val);
//         console.log(data);
//         res.end(data);
//     })

router.get('',async function (req, res) {
    let content=await pagecontroller.readFile();
    res.writeHead(200, { "Content-Type": "text" })
    res.end(content)
})
module.exports = router;