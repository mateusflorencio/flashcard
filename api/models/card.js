const {
    default: Mongoose
} = require("mongoose")

const cardSchema = new Mongoose.Schema({
    world: {
        type: String,
        require: true
    },
    translation: {
        type: String,
        require: true
    },
    description: String
})

cardSchema.index({
    "word": "text",
    "translation": "s"
})

module.exports = Mongoose.model('card', cardSchema)