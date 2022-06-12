const Card = require('../models/card');
const {
    body,
    param,
    validationResult
} = require('express-validator');


const indexController = {
    index: (_req, res) => {
        res.status(200).send({
            info: "pagina initial"
        })
    },
    getAll: async (_req, res) => {
        try {
            let obj = await Card.find()
            res.status(200).json(obj);
        } catch (error) {
            res.status(404).json({
                error: `${error}`
            });
        }
    },
    findId: async (req, res) => {
        let id = req.params.id;
        param('id').trim().notEmpty();
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json({
                errors: errors.array()
            });
        }
        try {
            let card = await Card.findById(id);
            if (!card) {
                res.status(404).json({
                    message: "id not found"
                });
            }
            res.status(200).json(card);
        } catch (err) {
            return res.status(500).json({
                err: `${err}`
            });
        }
    },
    save: async (req, res) => {
        let {
            world,
            translation,
            description
        } = req.body
        try {
            let card = await Card.create({
                world,
                translation,
                description
            });
            return res.status(201).json(card);
        } catch (error) {
            res.status(400).json({
                error: `${error}`
            });
        }
    },
    delete: async (req, res) => {
        try {
            let {
                id
            } = req.params
            param('id').trim().notEmpty()

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