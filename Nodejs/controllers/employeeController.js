var express = require('express');
var router = express.Router();
var ObjectID = require('mongoose').Types.ObjectId;

var { employeesTable } = require('../model/employee.js');





router.get('/', (req, res) => {
    employeesTable.find((err, docs) => {
        if(!err) {
            res.send(docs);
        } else {
            console.log(`err: ${JSON.stringify(err)}`);
        }
    });
});

router.post('/', (req, res) => {
    var emp = new employeesTable({
        name: req.body.name,
        age: req.body.age,
        salary: req.body.salary
    });
    emp.save((err, docs) => {
        if(!err) {
            res.send(docs);
        } else {
            console.log(`err: ${JSON.stringify(err)}`);
        }
    })
})

router.get('/:id', (req, res) => {
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send(`errr in givwn id: ${req.params.id} `);
    } else {
        employeesTable.findById(req.params.id, (err, docs) => {
            if(!err) {
                res.send(docs);
            } else {
                console.log(`err: ${err}`);
            }
        });
    }
})

router.put('/:id', (req, res) => {
    // console.log(req);
    if(!ObjectID.isValid(req.params.id)) {
        return res.status(400).send(`error: ${req.params.id}`)
    } else {
        console.log(req);
        var emp = {
            _id: req.params.id,
            name: req.body.name,
            age: req.body.age,
            salary: req.body.salary
        }
        employeesTable.findByIdAndUpdate(req.params.id, {$set: emp}, {new: true}, (err, docs) => {
            if(!err) {
                res.send(docs);
            } else {
                console.log(`err: ${err}`);
            }
        })
    }
})

router.delete('/:id', (req, res) => {
    if(!ObjectID.isValid(req.params.id)) {
        return res.status(400).send(`error: ${req.params.id}`)
    } else {
        employeesTable.findByIdAndRemove(req.params.id, (err, docs) => {
            if(!err) {
                res.send(docs);
            } else {
                console.log(`err ${JSON.stringify(err)}`);
            }
        });
    }   
})

module.exports = router;