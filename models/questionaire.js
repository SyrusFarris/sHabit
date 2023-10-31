const mongoose = require('mongoose');

const QuestionaireSchema = new mongoose.Schema({
    habit: {
        type: String,
        required: true
    },
    reinforcer: {
        type: String,
        required: true
    },
    reward: {
        type: String,
        required: true
    },
    consequence: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    }
})

mongoose.exports = mongoose.model('Questionaire', QuestionaireSchema);