const express = require('express');
const router = express.Router();
const Usercontroller = require('../controller/usercontroller')

router.get('/activeuser', async function (req, res) {
    let data=await Usercontroller.activeuser();
    res.end(JSON.stringify(data));
});

router.get('/:id', async function (req, res) {
    let id = req.params.id;
    let data =await Usercontroller.getOneuser(id);
    // console.log(data);
    //  console.log(data[0].firstname);
    //  console.log(data);
    
    res.end(JSON.stringify(data));

})

router.post('/save', async function (req, res) {
    let body = req.body;
    // console.log(body);
    let data=await Usercontroller.saveoneuser(body);
    res.end('ok');
});

router.delete('/:id/delete', async function (req, res) {
    let id = req.params.id;
    console.log(id);
    let data=await Usercontroller.deleteoneuser(id);
    console.log(data);
    res.end('Delete');
});

router.put('/:id/edit', async function (req, res) {
    let id = req.params.id;
    let body = req.body;
    console.log(id);
    console.log(body);
    let data=await Usercontroller.updateoneuser(id, body);
    res.end('ok');
});

module.exports = router;