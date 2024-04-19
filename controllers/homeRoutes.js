const router = require('express').Router();
const { route } = require('.');
const { User, Performer, Venue, Comment } = require('../models');


router.get('/', (req,res)=> {
    res.render('homepage')
});

module.exports = router; 