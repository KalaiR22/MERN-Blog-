import express from 'express';
import { verifyToken } from '../Utils/verifyUser.js';
import { create, deletepost, getPosts, updatePost } from '../controllers/post.controller.js';

const router = express.Router();

router.post('/create',verifyToken, create);
router.get('/getposts', getPosts);
router.delete('/deletepost/:postId/:userId', verifyToken,deletepost );
router.put('/updatepost/:postId/:userId',  updatePost)


export default router;
