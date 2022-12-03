const { Router } = require("express");

const models = require('../../models').User
const router = Router();

router.post('/', async (req, res) => {
    // console.log(req.body);
    let bod = req.body;
    try {
        const jane = await models.create({
            Nombre: bod.nombre,
            Apellido: bod.apellido,
            Email: bod.email,
            pass: bod.password,
        });
    
        res.json({
            code: 200,
            data: jane,
            res: 'respuest'
        }) 
    } catch (error) {
        
        res.json({
            code: 200,
            data: null,
            res: 'data violada'
        }) 
    }
   
})

router.get('/', async (req, res) => {
    const product =await models.findAll()
    res.json({
        msg: 'Datos obtenidos',
        code: 200,
        data: product
    })
})


router.post('/update', async (req, res) => {
    let bod = req.body;

    const jane = await models.update({
        Nombre: bod.nombre,
        Apellido: bod.apellido,
        Email: bod.email,
        pass: bod.password,
    }, {
        where: {
            id: bod.id
        }
    });

    res.json({
        code: 200,
        data: jane,
        res: 'respuest'
    })
})

module.exports = router;