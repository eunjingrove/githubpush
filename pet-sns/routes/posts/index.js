const express = require('express');
const router = express.Router();
const upload = required('../../module/multer');
const postCtr = require('../../controller/postCtr');
const checkUser = require('../../module/checkUser');


router.get('/upload', checkUser, (req, res) => {
    res.render('upload');
});

router.get('/:id', postCtr.detail);
// id값을 바탕으로 detail 페이지를 가져온다. 

router.get('/update/id', checkUser, postCtr.updateLayout);

router.post('/', checkUser, upload.single('image'), postCtr.upload);

router.post('/update/:id', checkUser, postCtr.update);

router.post('/delete/:id', checkUser, postCtr.delete);

router.post('/like/:id', checkUser, postCtr.like);

router.post('/comment/:id', checkUser, postCtr.comment);

module.exports = router;