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
    save: async (req, res) => {
        try {
            let {
                world,
                translation,
                description
            } = req.body

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
    },
    delete: async (req, res) => {
        try {
            let {
                id
            } = req.params
            console.log(id);
            await Card.findByIdAndDelete(id);
            res.status(204).json({
                message: "ok"
            })
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = indexController