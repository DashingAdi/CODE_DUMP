const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:dashing4149@cluster0.mqtu0jn.mongodb.net/');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: String,
    description: String,
    completed: Boolean,
});

const todo = mongoose.model('todo', todoSchema);

module.exports = {
    todo,
}