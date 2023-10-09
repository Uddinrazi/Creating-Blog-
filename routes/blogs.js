const express = require('express');

const blogsControllers = require('../controllers/blogs')

const router = express.Router();

router.get('/get-blogs/data', blogsControllers.getBlogData)

router.post('/post-blog/data', blogsControllers.postBlogsData)

router.delete('/delete-comments/:id', blogsControllers.deleteComment)

router.get('/get-comments/:id', blogsControllers.getComments)

router.post('/post-comments', blogsControllers.postComments)

module.exports = router;



