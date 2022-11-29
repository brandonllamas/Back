const { Router } = require("express");

const router = Router();
const models = require('../../models').Param

router.post('/create',(req,res)=>{
    res.json({
        res:'respuest'
    })
})

router.get('/', async (req,res) =>{
    const product = await models.findAll()
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