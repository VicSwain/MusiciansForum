const router = require('express').Router();
const { route } = require('.');
const { User, Performer, Venue, Comment } = require('../models');

// on the landing page I would like an even mix of venues and performers to be displayed with their information
// when clicking on one of the provided the user is directed to sign up or log in
router.get('/', (req,res)=> {
    res.render('homepage')
});

// sign up route

router.get('/signup', (req, res) => {
    res.render('signup')
});



// log in route
router.get('/login', (req, res) => {
    res.render('login')
});


// 




module.exports = router; 