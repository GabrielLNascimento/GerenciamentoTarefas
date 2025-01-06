const mongoose = require("mongoose")

const HomeSchema = new mongoose.Schema({
    tarefa: { 
        type: String, 
        required: true 
    },
    data: { 
        type: Date, 
        required: true
    },
    time: { 
        type: String, 
        match: /^([01]\d|2[0-3]):([0-5]\d)$/ 
    }
})

const HomeModel = mongoose.model('Home', HomeSchema)

module.exports = HomeModel