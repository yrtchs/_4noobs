import { Router } from 'express';
const Post = require('../models/Post')
const router = Router();

router.get('/posts',async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (e) {
        res.status(500).json({ message: 'Server Error' });
    }
})

export default router;