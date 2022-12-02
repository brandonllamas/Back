const {
    Router
} = require("express");
const param = require("../../models/param");

const models = require('../../models').Ticket

const router = Router();

router.post('/', async (req, res) => {
    // console.log(req.body);
    let bod = req.body;

    const jane = await models.create({
        num_ticket: bod.num_ticket,
        trabajo_group: bod.trabajo_group,
        operator_group: bod.operator_group,
        detail_user: bod.detail_user
    });

    res.json({
        code: 200,
        data: jane,
        res: 'respuest'
    })
})

router.get('/', async (req, res) => {
    const product =await  models.findAll()
    res.json({
        msg: 'Datos obtenidos',
        code: 200,
        data: product
    })
})


router.post('/update', async (req, res) => {
    let bod = req.body;

    const jane = await models.update({
        num_ticket: bod.num_ticket,
        trabajo_group: bod.trabajo_group,
        operator_group: bod.operator_group,
        detail_user: bod.detail_user
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