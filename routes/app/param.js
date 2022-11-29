const { Router } = require("express");

const router = Router();

router.post('/create',(req,res)=>{
    res.json({
        res:'respuest'
    })
})

router.get('/list',(req,res)=>{
    res.json({
        res:'respuest'
    })
})


router.post('/update',(req,res)=>{
    res.json({
        res:'respuest'
    })
})

module.exports = router;