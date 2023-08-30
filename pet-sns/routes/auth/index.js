const express = require('express');
const router = express.Router();
const authCtr = require('../../controller/authCtr');

router.post('/register', authCtr.register);
router.post('/login', authCtr.login);

// 해당 라우터로 접근하기 위해서는 /auth/login의 url로 접근해야 한다. 
router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register');
})

router.post('/logout', (req, res) => {
    res.clearCookie('access_token');
    res.redirect('/');
})
module.exports = router;

