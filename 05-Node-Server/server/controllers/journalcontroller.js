let express = require('express');
let router = express.Router();


router.get('/practice', function(req,res){
    res.send('Hey!! This is practice route!');
});

router.get('/about', function(req,res){
    res.send('Hey! This is about route!');
});

module.exports = router;