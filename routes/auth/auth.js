const { Router } = require("express");

const router = Router();

router.post('/login',(req,res)=>{
    res.json({
        res:'respuest'
    })
})

module.exports = router;