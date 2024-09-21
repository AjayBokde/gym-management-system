const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    fname: {
        type: String,
        require: true
    },
    lname: {
        type: String,
        require: true
    },
    uniqid: {
        type: Number,
        require: true
    },
    mobilenumber: {
        type: Number,
        require: true
    },
    birthdate: {
        type: String,
        require: true
    },
    startdate: {
        type: String,
        require: true
    },
    enddate: {
        type: String,
        require: true
    },
    active: {
        type: Boolean,
        require: true
    },
    
})

const CustomerDB = mongoose.model('Customer', customerSchema);

module.exports = CustomerDB;