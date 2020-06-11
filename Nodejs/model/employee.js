const mongoose = require('mongoose');

var employeesTable = mongoose.model('employeesTable', {
    name: { type: String},
    age: { type: Number },
    salary: { type: Number }
});

module.exports = { 
    employeesTable: employeesTable 
};