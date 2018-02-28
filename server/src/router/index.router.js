const express = require('express');
const router = express.Router();

const User = require("../models/user.model").User;
const Taskboard = require("../models/taskboard.model").Taskboard;

router.route('/')
    .get(function(req, res, next) {
        res.sendFile(__dirname + "../../dist/index.html")
    })

router.route('/users')
    .get(function (req, res, next) {
        if (req.query.username) {
            User.findOne({ username: req.query.username }).then(doc => {
                res.status(200).send(doc.getPublicFields())
            })
            .catch(e => {
                console.log('err')
                res.status(500).send(e);
            })
        } else {
            res.status(403).send('Not found username...');
        }
    })
    .post(function (req, res, next) {
        console.log(req.body)
        if (req.body) {
            let data = new User(req.body)
            data.save(function (err) {
                if (err) {
                    console.error(err)
                    res.status(403).send(err);
                } else {
                    console.log('User is added #' + data._id.toString())
                    res.status(200).send(data.getPublicFields());
                }
            })
        } else {
            res.status(403).send('Have not request body...');
        }
    })

router.route('/tasksboards/:id?')
    .get(function(req, res, next) {
        if (req.query.user_id) {
            console.log(req.query)
            Taskboard.find({user_id: req.query.user_id}).then(doc => {
                var tbs = []
                doc.forEach(tb => {
                    return tbs.push(tb.getPublicFields())
                })
                res.status(200).send(tbs);
            }).catch(e => {
                console.error(e)
                res.status(500).send(e);
            })
        } else {
            res.status(403).send('Not found user id...');
        }
    })
    .post(function (req, res, next) {
        if (req.body) {
            let data = new Taskboard(req.body)
            data.save(function (err) {
                if (err) {
                    console.error(err)
                    res.status(403).send(err);
                } else {
                    console.log('Taskboard is added #' + data._id.toString())
                    res.status(200).send(data.getPublicFields());
                }
            })
        } else {
            res.status(403).send('Not found body...');
        }
    })
    .put(function (req, res, next) {
        if (req.body && req.params.id) {
            Taskboard.findById(req.params.id).then(doc => {
                console.log(req.body, doc)
                req.body.user_id ? doc.user_id = req.body.user_id : doc.user_id = doc.user_id;
                req.body.title ? doc.title = req.body.title : doc.title = doc.title;
                req.body.tasks ? doc.tasks = req.body.tasks : doc.tasks = doc.tasks;
                
                doc.save(function (err) {
                    if (err) {
                        console.error(err)
                        res.status(403).send(err);
                    } else {
                        console.log('Taskboard is saved #' + doc._id.toString())
                        res.status(200).send(doc.getPublicFields());
                    }
                })
            }).catch(e => {
                console.error(e)
                res.status(500).send(e)
            })
        } else {
            res.status(403).send('Body and params not defined...');
        }
    })
    .delete(function(req, res, next) {
        if (req.params.id) {
            Taskboard.findByIdAndRemove(req.params.id).then(doc => {
                res.status(200).send(doc.getPublicFields());
            }).catch(e => {
                res.status(500).send(e);
            })
        } else {
            res.status(403).send('Sorry, request params not defined...')
        }
    })

module.exports = router;