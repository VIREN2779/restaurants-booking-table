const mongoose = require("mongoose");

var tableBookSchema = new mongoose.Schema({
    day: {
        type: String
    },
    hours: {
        type: String
    },
    fullName: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    howManyPersons: {
        type: String
    }
});

module.exports = mongoose.model('tableBookDetail', tableBookSchema);