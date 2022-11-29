const { Router } = require("express");
const param = require("../../models/param");

const models = require('../../models').Ticket

const router = Router();

router.post('/create',(req,res)=>{
    res.json({
        res:'respuest'
    })
})

router.get('/',(req,res)=>{
    const product = models.findAll()
    res.json({
       msg:'Datos obtenidos',
       code:200,
       data:product
    })
})


router.post('/update',(req,res)=>{
    res.json({
        res:'respuest'
    })
})

module.exports = router;