var express = require('express');
var router = express.Router();
const authRouter = require('./auth');
const postRouter = require('./posts');
const postCtr = require('../controller/postCtr');

router.get('/', postCtr.list);
// response의 랜더를 통해서 index.ejs를 보여주며, postList를 통해 게시물을 담아 보여주겠다.. ! 

router.use('/auth', authRouter);
router.use('/posts', postRouter);
// use는 get이나 post 메소드와 상관없이 모든 요청을 authRouter로 보내겠다는 뜻.. ! 

module.exports = router;
