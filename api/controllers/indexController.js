const Card = require('../models/Card')
const indexController = {
    index: (_req, res) => {
        res.status(200).send({
            info: "pagina initial"
        })
    },
    getAll: async (_req, res) => {
        try {
            let obj = await Card.find()
            res.status(200).json(obj)
        } catch (error) {
            res.status(404).json({
                error: `${error}`
            })
        }
    },
    save: async (_req, res) => {
        try {
            let world = 'Hi'
            let translation = 'oi'
            let description = '  para saudar'


            let card = await Card.create({
                world,
                translation,
                description
            })

            res.json(card).status(201)


        } catch (error) {
            res.status(400).json({
                error: `${error}`
            })
        }


    }
}


module.exports = indexController