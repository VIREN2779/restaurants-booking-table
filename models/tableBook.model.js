const mongoose = require("mongoose");

const tableBookSchema = new mongoose.Schema({
    day: String,
    hours: String,
    fullName: String,
    phoneNumber: Number,
    howManyPersons: Number
});

module.exports = mongoose.model('tableBookDetail', tableBookSchema);